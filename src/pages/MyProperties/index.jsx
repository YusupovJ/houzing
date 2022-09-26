import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useShowAlert } from "../../helpers/functions/functions";
import { MyPropertiesStyle } from "./style";
import MyProperty from "./MyProperty";
import PropertiesNotFound from "./PropertiesNotFound";
import Bullets from "./Bullets";
import LoadingSkeleton from "./LoadingSkeleton";
import Search from "./Search";
import ToBegin from "../../components/ToBegin";

const URL = process.env.REACT_APP_PUBLIC_URL;

const MyProperties = () => {
	const token = JSON.parse(localStorage.getItem("login")).authenticationToken;
	const [houses, setHouses] = useState([]);
	const showAlert = useShowAlert();
	// Так надо, если не веришь попробуй убрать и пофиксить warning (спойлер, приложение упадет)
	// eslint-disable-next-line
	const searchParams = useMemo(() => new URLSearchParams(window.location.search), [window.location.search]);
	const [searchValue, setSearchValue] = useState("");

	// Типа current = если приходит page из query то отнимаем один, потому что из сервака приходит
	// страницы с 0, а показываем с 1, иначе если у нас нет вообще в query, то тогда у нас current будет 0
	// а значит показываем первую страницу
	const [pages, setPages] = useState({ current: (searchParams.get("page") || 1) - 1, max: 0 });

	const deleteProperty = async (id) => {
		const request = await fetch(`${URL}/v1/houses/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const response = await request.json();

		if (request.ok) {
			// Если на одной странице оставалась одно свойство, при удалении
			// переводим на предыдущую страницу
			if (houses.length === 1 && pages.current !== 1) {
				setPages((pages) => ({ ...pages, current: pages.current - 1 }));
			}

			getMyHouses();
			showAlert("success", response.message);
		} else {
			showAlert("error", "Something went wrong");
		}
	};

	const getMyHouses = async (current, searchValue) => {
		const query = `?size=5&page=${current}${searchValue && `&house_name=${searchValue}`}`;

		const request = await fetch(`${URL}/v1/houses/me${query}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const response = await request.json();

		setHouses(response.data || ["nothing"]);
		setPages((pages) => ({ ...pages, max: response.map.total_pages }));
	};

	const memoPage = useMemo(() => pages, [pages]);
	const memoSetPage = useCallback(setPages, [setPages]);

	useEffect(() => {
		getMyHouses(pages.current, searchValue);
		// eslint-disable-next-line
	}, [pages.current, searchValue]);

	return (
		<ToBegin>
			<MyPropertiesStyle className="my-properties">
				<div className="my-properties__container">
					<h1 className="my-properties__title">My properties</h1>
					<Search setSearchValue={setSearchValue} />
					<div className="my-properties__wrapper">
						{!houses.length ? (
							<LoadingSkeleton />
						) : houses[0] === "nothing" ? (
							<PropertiesNotFound />
						) : (
							<>
								<div className="my-properties__titles">
									<h2 className="my-properties__subtitle">Listing Title</h2>
									<h2 className="my-properties__subtitle">Category</h2>
									<h2 className="my-properties__subtitle">Rooms</h2>
									<h2 className="my-properties__subtitle">Action</h2>
								</div>
								<div className="my-properties__list">
									{houses.map((house) => {
										const address = [house.country, house.city, house.address].filter(
											(address) => address
										);

										return (
											<MyProperty
												key={house.id}
												id={house.id}
												deleteProperty={deleteProperty}
												name={house.name}
												category={house?.category?.name}
												address={address.join(", ")}
												image={house.attachments[house.attachments.length - 1].imgPath}
												salePrice={house.salePrice}
												price={house.price}
												room={house.houseDetails.room}
											/>
										);
									})}
								</div>
								{!!(pages.max - 1) && <Bullets pages={memoPage} setPages={memoSetPage} />}
							</>
						)}
					</div>
				</div>
			</MyPropertiesStyle>
		</ToBegin>
	);
};

export default memo(MyProperties);

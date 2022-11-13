import React, { memo, useCallback, useEffect, useState } from "react";
import { PropertiesStyle } from "./style";
import { useLocation } from "react-router-dom";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Button from "../../components/Button";
import ToBegin from "../../components/ToBegin";
import requestNotFound from "../../assets/img/requestNotFound.png";
import { useShowAlert } from "../../helpers/functions/functions";
import CardsLoading from "./CardsLoading";

const URL = process.env.REACT_APP_PUBLIC_URL;

/* Компонент фильтра */

const Properties = () => {
	const location = useLocation();
	const [cards, setCards] = useState([]);
	const [cardsLength, setCardsLength] = useState(0);
	const [page, setPage] = useState({ current: 0, max: 0 });
	const showAlert = useShowAlert();

	const token = JSON.parse(localStorage.getItem("login"))?.authenticationToken;

	/* ------------------------------------ */

	const showMore = useCallback(
		(data) => {
			setCards([...cards, ...data.data]);
			setPage({ current: page.current + 1, max: data.map.total_pages });
		},
		[cards, page]
	);

	const getCards = () => {
		const requestQuery = location.search || `?page=${page.current}&size=15`;
		const request = fetch(`${URL}/v1/houses/list${requestQuery}`).then((response) => response.json());

		request.then((data) => {
			if (location.search) {
				setCards(data.data || ["nothing"]);
			} else {
				showMore(data);
			}

			setCardsLength(data.map.total_elements);

			if (data.status >= 400) {
				showAlert("error", `Error ${data.status}: ${data?.error}`);
			}
		});
	};

	useEffect(() => {
		getCards();
	}, []);

	/* ------------------------------------ */

	return (
		<ToBegin>
			<PropertiesStyle
				className="properties"
				/*
				 * Если одна или две карточки делаем максимальную ширину карточки 380px
				 * Последние два условия для того, чтобы максимальной ширины не было
				 * при загрузке и когда ничего не найдено
				 */
				cardsLength={cards?.length < 3 && cards?.length !== 0 && cards[0] !== "nothing"}
			>
				<Filter />
				<section className="properties__results results">
					<div className="results__container">
						<Title title="Properties" className="results__text-block">
							Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
						</Title>
						<p className="results__count">
							{cards[0] !== "nothing" && cardsLength} <span> results</span>
						</p>
						<div className="results__cards">
							{/*
							 * Пока данные приходят с сервера выводим загрузку, потом данные.
							 * Но если нет данных то выводим, что ничего не найдено
							 */}
							{cards[0] === "nothing" ? (
								<div className="results__not-found">
									<img src={requestNotFound} alt="Request Not Found" />
									<h3>
										Nothing was found for <br /> your request {"("}
									</h3>
								</div>
							) : cards?.length !== 0 ? (
								cards?.map((card) => {
									return (
										<Card
											to={token ? `/properties/${card.id}` : "/login"}
											key={card.id * Math.random()}
											address={[card.country, card.region, card.city, card.address]
												.filter((item) => item)
												.join(",")}
											title={card.name || "none"}
											image={card?.attachments[card?.attachments?.length - 1]?.imgPath}
											houseDetails={card.houseDetails}
											sale={card.salePrice}
											price={card.price}
											favourite={card.favorite}
										/>
									);
								})
							) : (
								<CardsLoading />
							)}
						</div>
					</div>
					{page.current !== page.max && page.max && (
						<Button type="primary" onClick={getCards} className="results__button">
							<p>Show More</p>
						</Button>
					)}
				</section>
			</PropertiesStyle>
		</ToBegin>
	);
};

export default memo(Properties);

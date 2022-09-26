import React, { useEffect, useState, memo, useMemo } from "react";
import { ProductViewStyle, ContainerRight, ContainerLeft } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import Photos from "./Photos";
import ProductInfo from "./ProductInfo";
import ToBegin from "../../components/ToBegin";
import SendEmail from "./SendEmail";
import Location from "./Location";
import PropertyDetails from "./PropertyDetails";
import Features from "./Features";
import { getProperty } from "../../helpers/functions/functions";

/* Страница товара */

const ProductView = () => {
	const params = useParams();
	const token = JSON.parse(localStorage.getItem("login"))?.authenticationToken;
	const navigate = useNavigate();

	/* ------------------------------------ */

	const [house, setHouse] = useState(
		useMemo(() => {
			return {
				address: "pending",
				attachments: [{ imgPath: "pending" }, { imgPath: "pending" }, { imgPath: "pending" }],
				category: { name: "pending" },
				city: "pending",
				country: "pending",
				description: "pending",
				homeAmenitiesDto: "pending",
				houseComponentsDto: "pending",
				houseDetails: {
					beds: "pending",
					bath: "pending",
					yearBuilt: "pending",
					garage: "pending",
					room: "pending",
					area: "pending",
				},
				id: "pending",
				name: "pending",
				price: "pending",
				region: "pending",
				salePrice: "pending",
				status: "pending",
				user: "pending",
				zipCode: "pending",
			};
		}, [])
	);

	/* ------------------------------------ */

	// Если пользователь вышел из аккаунта в этой странице,
	// то посылаем его на главную страницу

	useEffect(() => {
		if (!token) {
			navigate("/");
		}
	}, [navigate, token]);

	/* ------------------------------------ */

	// Запрос
	useEffect(() => {
		getProperty(params.id, setHouse);
	}, [params.id]);

	/* ------------------------------------ */

	const propsDetails = useMemo(() => {
		return {
			id: house?.id,
			price: house?.price,
			size: house?.houseDetails?.area,
			year: house?.houseDetails?.yearBuilt,
			beds: house?.houseDetails?.beds,
			bath: house?.houseDetails?.bath,
			garage: house?.houseDetails?.garage,
			type: house?.category?.name,
		};
	}, [house]);

	const locProperties = useMemo(() => {
		return {
			address: house?.address,
			city: house?.city,
			area: house?.houseDetails?.area,
			country: house?.country,
			zip: house?.zipCode,
			region: house?.region,
		};
	}, [house]);

	const latLng = useMemo(() => {
		return {
			latitude: house?.location?.latitude,
			longitude: house?.location?.longitude,
		};
	}, [house?.location]);

	const attachments = useMemo(() => {
		return house?.attachments
			?.map((img) => {
				img.id = Date.now() * Math.random();
				return img;
			})
			.reverse();
	}, [house?.attachments]);

	const user = useMemo(() => {
		return house?.user;
	}, [house]);

	return (
		<ToBegin>
			<ProductViewStyle className="product-view">
				<div className="product-view__container">
					<Photos photos={attachments} other={attachments?.slice(5)} />

					{/* -------------------------- */}

					<ContainerLeft>
						<ProductInfo house={house} />
						<span className="product-view__line"></span>
						<Location locProperties={locProperties} latLng={latLng} />
						<span className="product-view__line"></span>
						<PropertyDetails propsDetails={propsDetails} />
						{house?.componentsDto && house?.homeAmenitiesDto && (
							<>
								<span className="product-view__line"></span>
								<Features
									componentsDto={house?.componentsDto || {}}
									homeAmenitiesDto={house?.homeAmenitiesDto || {}}
								/>
							</>
						)}
					</ContainerLeft>

					{/* -------------------------- */}

					<ContainerRight>
						<SendEmail user={user} />
					</ContainerRight>
				</div>
			</ProductViewStyle>
		</ToBegin>
	);
};

export default memo(ProductView);

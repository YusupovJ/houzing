import React, { memo, useRef, useState } from "react";
import { ProductInfoStyle } from "./style";
import Title from "../../../components/Title";
import { useMatchMedia, useShowAlert } from "../../../helpers/functions/functions";
import Download from "../Download";
import Skeleton from "react-loading-skeleton";

/* ------------------------------------ */
import { ReactComponent as Favourite } from "../../../assets/svg/favourite.svg";
import { ReactComponent as Share } from "../../../assets/svg/share.svg";
import { ReactComponent as Bed } from "../../../assets/svg/bed.svg";
import { ReactComponent as Bath } from "../../../assets/svg/bath.svg";
import { ReactComponent as Car } from "../../../assets/svg/car.svg";
import { ReactComponent as Ruler } from "../../../assets/svg/rule.svg";
import { ReactComponent as Date } from "../../../assets/svg/date.svg";
import { ReactComponent as Room } from "../../../assets/svg/room.svg";

/* ------------------------------------ */

/* Информация о товаре */

const ProductInfo = ({ house }) => {
	const media768 = useMatchMedia(767.98);
	const descRef = useRef();
	const showAlert = useShowAlert();
	const [showMore, setShowMore] = useState(true);

	// Скрываем, показываем описание товара
	const hanleDescription = () => {
		const cords = descRef.current.getBoundingClientRect().top;
		setShowMore(!showMore);

		// При скрытии описания немножно скролим вверх
		if (window.scrollY > cords && !showMore && !media768) {
			window.scrollTo({
				top: descRef.current.getBoundingClientRect().top + window.scrollY - 200,
				behavior: "smooth",
			});
		}
	};

	/* ------------------------------------ */

	// Кнопка поделиться
	const copyUrl = () => {
		const location = window.location.href;

		navigator.clipboard
		.writeText(location)
		.then(() => {
			showAlert("success", "Link successfully copied!");
		})
		.catch((err) => {
			showAlert("error", err);
		});
	};

	/* ------------------------------------ */

	const getHouseDetailsIcon = (detail) => {
		switch (detail) {
			case "beds":
				return <Bed />;
			case "bath":
				return <Bath />;
			case "garage":
				return <Car />;
			case "area":
				return <Ruler />;
			case "yearBuilt":
				return <Date />;
			default:
				return <Room />;
		}
	};

	return (
		<ProductInfoStyle className="product-view__product-info product-info">
			<div className="product-info__row">
				<Title
					title={house?.name !== "pending"
						? house?.name
						: <Skeleton width={300} />
					}
					className="product-info__text-block">
					{
						!Object.values(house || {}).includes("pending") ?
							[
								house?.country,
								house?.city,
								house?.region,
								house?.address,
							].filter((item) => item).join(", ")
							: <Skeleton width={200} />
					}
				</Title>
				<div className="product-info__action">
					<button onClick={copyUrl} className="product-info__button">
						<div className="product-info__icon product-info__icon_share">
							<Share />
						</div>
						<p>Share</p>
					</button>
					<button className="product-info__button">
						<div className="product-info__icon product-info__icon_fav">
							<Favourite />
						</div>
						<p>Save</p>
					</button>
				</div>
			</div>
			<div className="product-info__row product-info__row_align-center">
				<ul className="product-info__house-details">
					{!Object.values(house?.houseDetails).includes("pending")
						? Object.entries(house?.houseDetails || {}).map((detail, index) => {
							const key = detail[0];
							const value = detail[1];

							return (
								<li className="product-info__house-detail" key={index}>
									<div className="product-info__detail-icon">{getHouseDetailsIcon(key)}</div>
									<p className="product-info__detail-text">{`${key}: ${value}`}</p>
								</li>
							);
						}) :
						<React.Fragment>
							<Skeleton width={80} />
							<Skeleton width={80} />
							<Skeleton width={80} />
							<Skeleton width={80} />
							<Skeleton width={80} />
							<Skeleton width={80} />
						</React.Fragment>
					}
				</ul>
				<div className="product-info__price">
					<del className="product-info__sale-price">
						{house?.salePrice !== "pending" ? `$${house?.salePrice}/mo` : <Skeleton width={40} />}
					</del>
					<p className="product-info__real-price">
						{house?.price !== "pending" ? `$${house?.price}/mo` : <Skeleton width={80} />}
					</p>
				</div>
			</div>
			<article ref={descRef} className="product-info__description description">
				<h3 className="description__title title">Description</h3>
				<div className={`description__text ${house?.description?.length > 696 && showMore ? "more" : ""}`}>
					<p>{
						house?.description === "pending" ?
							<>
								<Skeleton width="98%" />
								<Skeleton width="94%" />
								<Skeleton width="96%" />
								<Skeleton width="92%" />
							</> : house?.description
					}</p>
				</div>
				{house?.description?.length > 696 && (
					<button className="description__show-more" onClick={hanleDescription}>
						{showMore ? "Show more" : "Hide"}
					</button>
				)}
			</article>
			<Download />
		</ProductInfoStyle>
	);
};

export default memo(ProductInfo);

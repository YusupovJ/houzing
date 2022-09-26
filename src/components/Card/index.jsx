import React, { memo, useState } from "react";
import { CardStyle } from "./style";
import notAvalaible from "../../assets/svg/notAvalaible.svg";
import user from "../../assets/svg/user.svg";
import { ReactComponent as Zoom } from "../../assets/svg/zoom.svg";
import { ReactComponent as Favourite } from "../../assets/svg/favourite.svg";
import { ReactComponent as Bed } from "../../assets/svg/bed.svg";
import { ReactComponent as Bath } from "../../assets/svg/bath.svg";
import { ReactComponent as Car } from "../../assets/svg/car.svg";
import { ReactComponent as Rule } from "../../assets/svg/rule.svg";
import { useImgLoaded } from "../../helpers/functions/functions";
import ShowSkeleton from "../ShowSkeleton";
import Skeleton from "react-loading-skeleton";
import HouseDetails from "../../pages/Main/HouseDetails";

/* Это шаблон карточки товара */

const Card = (props) => {
	const [favourited, setFavourited] = useState(props.favourite);
	const [imgLoaded, handleImgLoad] = useImgLoaded();

	const imgErrorHandler = (e) => {
		e.target.src = notAvalaible;
		e.target.classList.add("error");
	};

	return (
		<CardStyle className="card" to={props?.to || ""}>
			<div className="card__type card__type_featured">Featured</div>
			<div className="card__type card__type_for-sale">For Sale</div>
			<div className="card__image">
				{props.image === "pending" ? (
					<Skeleton />
				) : (
					<img
						src={props.image || notAvalaible}
						onError={imgErrorHandler}
						alt="Product"
						onLoad={handleImgLoad.bind(this, props.image)}
						className={props.image ? "" : "error"}
					/>
				)}

				<ShowSkeleton className="card__image-skeleton" imgLoaded={imgLoaded} id={props.image} />
				<div className="card__ava">
					<img src={props.ava || user} alt="Author" />
				</div>
			</div>
			<div className="card__body">
				<h3 className="card__title">{props.title || <Skeleton width={160} />}</h3>
				<p className="card__address">{props.address || <Skeleton width={120} />}</p>
				<ul className="card__ownership">
					<li className="card__own">
						<HouseDetails icon={<Bed />} detail={props?.houseDetails?.beds} text="Beds" />
					</li>
					<li className="card__own">
						<HouseDetails icon={<Bath />} detail={props?.houseDetails?.bath} text="Baths" />
					</li>
					<li className="card__own">
						<HouseDetails icon={<Car />} detail={props?.houseDetails?.garage} text="Garages" />
					</li>
					<li className="card__own">
						<HouseDetails icon={<Rule />} detail={props?.houseDetails?.area} text="Sq Ft" />
					</li>
				</ul>
			</div>
			<div className="card__info">
				<div className="card__price">
					<del className="card__sale-price">
						{props.sale !== undefined ? `$${props.sale}` : <Skeleton width={40} />}
					</del>
					<p className="card__real-price">
						{props.price !== undefined ? `$${props.price}` : <Skeleton width={60} />}
					</p>
				</div>
				<div className="card__action">
					<button className="card__zoom">
						<Zoom />
					</button>
					<button
						className={`card__fav ${favourited ? "fav" : ""}`}
						onClick={() => setFavourited(!props.favourited)}
					>
						<Favourite />
					</button>
				</div>
			</div>
		</CardStyle>
	);
};

export default memo(Card);

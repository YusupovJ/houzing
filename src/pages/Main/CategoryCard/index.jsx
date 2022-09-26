import React from "react";
import { CategoryCardStyle } from "./style";
import category_1 from "../../../assets/img/category.jpg";
import { ReactComponent as Home } from "../../../assets/svg/home.svg";
import { useImgLoaded } from "../../../helpers/functions/functions";
import ShowSkeleton from "../../../components/ShowSkeleton";
import Skeleton from "react-loading-skeleton";

/* Компонент с категорией */

const CategoryCard = (props) => {
	const [imgLoaded, handleImgLoad] = useImgLoaded();

	return (
		<CategoryCardStyle to={`/properties?category_id=${props.id}`} className="category-card">
			{props.status === "pending" ? (
				<Skeleton className="category-card__loading-img" />
			) : (
				<img
					src={props.bg || category_1}
					className="category-card__bg"
					onLoad={handleImgLoad.bind(this, props.id)}
					alt="Bg"
				/>
			)}

			<ShowSkeleton className="category-card__bg-skeleton" imgLoaded={imgLoaded} id={props.id} />
			<div className="category-card__icon">
				{props.status === "pending" ? <Skeleton width={60} height={40} /> : props.icon || <Home />}
			</div>
			<p className="category-card__text">{props.text || <Skeleton h={20} width={90} />}</p>
		</CategoryCardStyle>
	);
};

export default CategoryCard;

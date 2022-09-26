import { Link } from "react-router-dom";
import styled from "styled-components";
import { em, rem } from "../../../helpers/functions/functions";

export const CategoryCardStyle = styled(Link)`
	padding: 145px 30px 93px;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	justify-content: center;
	box-shadow: 0 20px 38px rgba(0, 0, 0, 0.06), 0 7px 46px rgba(0, 0, 0, 0.06), 0 8px 15px rgba(0, 0, 0, 0.06);
	border-radius: 3px;
	height: 100%;
	.category-card__bg,
	.category-card__loading-img {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
		top: 0;
		left: 0;
		object-fit: cover;
		filter: brightness(35%);
	}

	.category-card__loading-img {
		filter: brightness(65%);
	}

	.category-card__bg-skeleton {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border-radius: 3px;
		filter: brightness(65%);
		height: 100%;
	}

	.category-card__text {
		margin: ${em(24, 18)} 0px 0px 0px;
		font-weight: 600;
		font-size: ${rem(18)};
		line-height: 156%;
		color: #ffffff;
		text-align: center;
	}

	@media only screen and (max-width: ${em(767.98)}) {
		padding: 50px;
	}
`;

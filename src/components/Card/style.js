import styled from "styled-components";
import { rem } from "../../helpers/functions/functions";
import { Link } from "react-router-dom";

export const CardStyle = styled(Link)`
	border-radius: 3px;
	overflow: hidden;
	transition: all 0.3s ease 0s;
	border: 1px solid #e6e9ec;
	position: relative;
	cursor: pointer;
	display: block;
	flex: 0 1 380px;
	&:hover {
		box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.06);
	}
	.card__type {
		position: absolute;
		top: 20px;
		padding: 7px 14px;
		text-transform: uppercase;
		color: #fff;
		border-radius: 3px;
		font-family: "Cerebri Sans", serif;
		font-style: normal;
		font-weight: 600;
		font-size: ${rem(12)};
		z-index: 3;
		line-height: ${10 / 13};
	}
	.card__type_for-sale {
		right: 20px;
		background-color: #0d263b;
	}
	.card__type_featured {
		background-color: #0061df;
		left: 20px;
	}
	.card__image {
		position: relative;
		user-select: none;
		height: 220px;
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			display: inline-block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.error {
			width: 50%;
			height: 65%;
		}
	}
	.card__image-skeleton {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 0;
	}
	.card__ava {
		position: absolute;
		bottom: 0;
		right: 20px;
		width: 42px;
		height: 42px;
		z-index: 3;
		transform: translate(0, 50%);
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid #fff;
		box-shadow: 0 0 10px rgba(13, 38, 59, 0.2);
		background-color: #fff;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	.card__body {
		border-top: 1px solid #e6e9ec;
		padding: 24px 20px 0;
	}
	.card__title {
		font-weight: 600;
		font-size: ${rem(16)};
		line-height: 150%;
		color: #0d263b;
	}
	.card__address {
		font-size: ${rem(14)};
		line-height: 143%;
		color: #696969;
	}
	.card__ownership {
		flex-wrap: wrap;
		display: flex;
		justify-content: space-between;
		gap: 15px;
		margin: 15px 0 0 0;
	}
	.card__own {
		text-align: center;
		svg {
			fill: #696969;
		}
		p {
			margin: 0;
			font-size: ${rem(14)};
			line-height: 143%;
			color: #696969;
		}
	}
	.card__info {
		border-top: 1px solid #e6e9ec;
		margin: 16px 0 0 0;
		padding: 8px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.card__price {
		margin: 0 15px 0 0;
	}
	.card__sale-price {
		font-size: ${rem(12)};
		line-height: 167%;
		text-decoration-line: line-through;
		color: #696969;
	}
	.card__real-price {
		font-weight: 600;
		font-size: ${rem(16)};
		line-height: 150%;
		color: #0d263b;
	}
	.card__action {
		display: flex;
		align-items: center;
	}
	.card__fav {
		background: #f6f8f9;
		padding: 10px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		transition: all 0.3s ease 0s;
		align-items: center;
		svg {
			fill: #696969;
			transition: all 0.3s ease 0s;
		}
		&:hover {
			svg {
				fill: red;
			}
		}
		:active {
			transform: scale(0.8);
		}
		&.fav {
			background: #cc5040;
			svg {
				fill: #fff;
			}
			&:hover {
				background: #f8432b;
			}
		}
	}
	.card__zoom {
		display: flex;
		background-color: transparent;
		justify-content: center;
		align-items: center;
		margin: 0 20px 0 0;
		transition: all 0.2s ease 0s;
		width: 35px;
		height: 35px;
		svg {
			transition: all 0.3s ease 0s;
		}
		:active {
			transform: scale(1.1);
		}
	}
	.card__zoom:hover {
		svg {
			transform: scale(1.1);
		}
	}
`;

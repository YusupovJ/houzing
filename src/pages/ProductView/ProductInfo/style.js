import styled from "styled-components";
import { rem, em } from "../../../helpers/functions/functions";

export const ProductInfoStyle = styled.section`
	.product-info__row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 7px;
		&_align-center {
			align-items: flex-end;
		}
	}
	.product-info__text-block {
		margin: 0 0 10px 0;
		> * {
			text-align: left;
		}
	}
	.product-info__action {
		display: flex;
		gap: 26px;
	}
	.product-info__button {
		display: flex;
		align-items: center;
		background-color: transparent;
		p {
			font-size: ${rem(14)};
			line-height: 143%;
			color: #696969;
		}
		&:hover {
			.product-info__icon {
				background-color: #dde2e5;
				&_fav svg {
					fill: red;
				}
			}
		}
	}
	.product-info__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 10px 0 0;
		background: #f6f8f9;
		border-radius: 50%;
		width: 35px;
		height: 35px;
		transition: all 0.3s ease 0s;
		svg {
			fill: #696969;
			width: 15px;
			height: 15px;
			transition: all 0.3s ease 0s;
		}
	}
	.product-info__price {
		text-align: right;
	}
	.product-info__sale-price {
		font-size: ${rem(12)};
		line-height: 167%;
		text-decoration-line: line-through;
		color: #696969;
	}
	.product-info__real-price {
		font-weight: 600;
		font-size: ${rem(24)};
		line-height: 133%;
		color: #0d263b;
	}
	.product-info__house-details {
		display: flex;
		flex-wrap: wrap;
		gap: 16px 24px;
	}
	.product-info__house-detail {
		display: flex;
	}
	.product-info__detail-icon {
		margin: 0 8px 0 0;
		svg {
			fill: #696969;
		}
	}
	.product-info__detail-text {
		font-size: ${rem(14)};
		line-height: 143%;
		color: #696969;
		text-transform: capitalize;
	}
	.description {
		margin: 30px 0 0 0;
	}
	.description__title {
		margin: 0 0 ${em(10, 18)} 0px;
	}
	.description__show-more {
		font-size: ${rem(14)};
		line-height: 143%;
		text-decoration-line: underline;
		color: #0061df;
		margin: ${em(14, 14)} 0px 0px 0px;
		background-color: transparent;
	}
	.description__text {
		overflow: hidden;
		position: relative;
		font-size: ${rem(14)};
		line-height: 143%;
		color: #696969;
		&.more {
			max-height: 160px;
			&::before {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
				z-index: 2;
			}
		}
	}
	@media only screen and (max-width: ${em(767.98)}) {
		.text-block__title {
			font-size: ${rem(16)};
		}
		.text-block__text {
			font-size: ${rem(14)};
		}
		.product-info__text-block {
			margin: 0 0 30px 0;
		}
		.product-info__button p {
			display: none;
		}
		.product-info__action {
			gap: 16px;
		}
		.product-info__icon {
			margin: 0;
		}
		.product-info__row_col {
			flex-direction: column;
		}
		.product-info__house-details {
			align-self: flex-start;
		}
		.product-info__price {
			text-align: left;
		}
		.product-info__row_align-center {
			align-items: flex-start;
			flex-direction: column;
		}
		.description__text.more {
			max-height: 85px;
		}
	}
`;

import styled from "styled-components";
import { rem } from "../../../helpers/functions/functions";

export const MyPropertyStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 16px 0 0 0;
	& > * {
		flex: 1 1;
		:not(:first-child) {
			text-align: center;
		}
		:last-child {
			text-align: right;
		}
	}

	.card__wrapper {
		display: flex;
	}

	.card__image {
		margin: 0 16px 0 0;
		flex: 0 0 113px;
		height: 113px;
		overflow: hidden;
		border-radius: 3px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.card__title {
		text-transform: capitalize;
	}

	.card__prices {
		margin: 21px 0 0 0;
	}

	.card__sale-price {
		font-size: ${rem(14)};
		line-height: 167%;
		text-decoration-line: line-through;
		color: #696969;
	}

	.card__price {
		font-weight: 600;
		font-size: 1rem;
		line-height: 150%;
		color: #0d263b;
	}

	.card__actions {
		display: flex;
		gap: 32px;
		flex: 0 1 20%;
		justify-content: flex-end;
	}

	.card__info {
		flex: 0 1 20%;
	}

	.card__button {
		background-color: transparent;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		transition: all 0.2s;
		svg {
			transition: all 0.2s;
			fill: #696969;
		}
		&:hover {
			box-shadow: 0 0 0 10px #f6f8f9;
			svg {
				background-color: #f6f8f9;
			}
		}
	}
`;

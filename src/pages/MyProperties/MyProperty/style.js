import styled from "styled-components";
import { em, rem } from "../../../helpers/functions/functions";

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
		overflow: hidden;
		flex: 0 0 113px;
		max-height: 113px;
		border-radius: 3px;
		img {
			height: 100%;
			width: 100%;
			max-width: 113px;
			object-fit: cover;
		}
	}

	.card__title {
		text-transform: capitalize;
	}

	.card__sale-price {
		font-size: ${rem(12)};
		line-height: 167%;
		text-decoration-line: line-through;
		color: #696969;
	}

	.card__body {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex: 1 1 auto;
		> .card__title {
			flex: 0 0;
		}
	}

	.card__price {
		font-weight: 600;
		font-size: 1rem;
		line-height: 100%;
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

	.card__body-row {
		display: flex;
		margin: 10px 0 0 0;
		justify-content: space-between;
		align-items: flex-end;
		flex: 1 1 auto;
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

	@media only screen and (max-width: ${em(767.98)}) {
		.card__prices {
			margin: 0;
		}
	}

	@media only screen and (max-width: ${em(424.98)}) {
		.card__actions {
			gap: 20px;
		}
	}
`;

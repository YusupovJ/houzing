import styled from "styled-components";
import { em, rem } from "../../helpers/functions/functions";

export const MyPropertiesStyle = styled.main`
	background: #f5f5f5;
	.my-properties__container {
		padding: 34px 15px 70px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.my-properties__search input {
		background-color: transparent;
	}

	.my-properties__text {
		font-weight: 400;
		font-size: ${rem(14)};
		text-transform: capitalize;
		line-height: 143%;
		color: #696969;
	}

	.my-properties__title {
		font-weight: 600;
		font-size: ${rem(28)};
		margin: 0 0 ${em(32, 28)} 0;
		line-height: 129%;
		letter-spacing: -0.02em;
		color: #0d263b;
	}

	.my-properties__wrapper {
		background: #ffffff;
		border: 1px solid #e6e9ec;
		flex: 1 1 100%;
		padding: 24px 30px;
		box-shadow: 0 10px 30px rgba(13, 38, 59, 0.05);
		border-radius: 3px;
	}

	.my-properties__titles {
		display: flex;
		justify-content: space-between;
	}

	.my-properties__subtitle {
		font-weight: 600;
		font-size: ${rem(18)};
		line-height: 156%;
		color: #0d263b;
		flex: 1 1;
		&:not(:first-child) {
			text-align: center;
			flex: 0 1 20%;
		}
		&:last-child {
			text-align: right;
		}
	}

	@media only screen and (max-width: ${em(767.98)}) {
		.my-properties__wrapper {
			padding: 24px 16px;
		}
		.my-properties__subtitle_no-tablet,
		.card__info {
			display: none;
		}
	}

	@media only screen and (max-width: ${em(424.98)}) {
		.my-properties__subtitle_no-mobile {
			display: none;
		}
	}
`;

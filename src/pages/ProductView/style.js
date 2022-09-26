import styled from "styled-components";
import { em, rem } from "../../helpers/functions/functions";

export const ProductViewStyle = styled.main`
	padding: 24px 0 96px 0;
	.product-view__container {
		flex-wrap: wrap;
		display: flex;
	}
	.product-view__line {
		display: block;
		height: 1px;
		background: #e6e9ec;
		margin: 48px 0;
	}
	
	@media only screen and (max-width: ${em(767.98)}) {
		.product-view__line {
			margin: 32px 0;
		}
	}
`;

export const ContainerLeft = styled.div`
	flex: 1 1 660px;
	margin: 0 20px 0 0;
	padding: 0;
	min-height: 335px;
	.title {
		font-weight: 600;
		font-size: ${rem(18)};
		line-height: 156%;
		color: #0d263b;
	}
	.list {
		margin: 24px 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 24px 60px;
	}
	.list__property {
		display: flex;
		align-items: center;
		flex: 0 1 auto;
		text-transform: capitalize;
		span {
			font-size: ${rem(14)};
			line-height: 143%;
			color: #696969;
		}
		strong {
			font-weight: 600;
			margin: 0 8px 0 0;
			font-size: ${rem(14)};
			line-height: 143%;
			color: #0d263b;
		}
	}
	.list__icon {
		width: 35px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: #f6f8f9;
		svg {
			fill: #696969;
			width: 16px;
			height: 16px;
		}
	}
	@media only screen and (max-width: ${em(991.98)}) {
		margin: 0;
	}
`;

export const ContainerRight = styled.div`
	flex: 0 0 280px;
	padding: 0;
	@media only screen and (max-width: ${em(991.98)}) {
		flex: 0 0 0;
	}
`;

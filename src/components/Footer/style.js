import styled from "styled-components";
import { em, rem } from "../../helpers/functions/functions";

export const FooterStyle = styled.footer`
	background: #0d263b;
	.footer__top {
		padding: 48px 0 24px;
		display: flex;
		justify-content: space-between;
		gap: 48px 172px;
		width: 100%;
		flex-wrap: wrap;
	}
	.footer__col {
		flex: 1 1 auto;
		max-width: 289px;
	}
	.footer__title {
		font-weight: 600;
		font-size: 1rem;
		line-height: 150%;
		color: #ffffff;
		margin: 0 0 ${em(32, 16)} 0px;
	}
	.footer__texts {
		a:hover {
			color: #fff;
			text-decoration: underline;
		}
	}
	.footer__text {
		margin: 0 0 20px 0;
		display: flex;
		color: #ffffff;
		a {
			cursor: pointer;
		}
		p,
		a {
			font-weight: 400;
			font-size: ${rem(14)};
			line-height: 143%;
			color: #ffffff;
		}
		svg {
			fill: #fff;
			flex: 0 0 18px;
			margin: 0 21px 0 0;
			height: 18px;
		}
	}
	.footer__bottom {
		position: relative;
		display: flex;
		align-items: center;
		border-top: 1px solid rgba(255, 255, 255, 0.15);
		padding: 16px 0;
		flex-wrap: wrap;
		gap: 24px 0;
		justify-content: space-between;
		small {
			font-size: ${rem(14)};
			line-height: 143%;
			color: #ffffff;
			text-align: center;
		}
	}
	.footer__logo {
		display: flex;
		color: #fff;
		align-items: center;
		position: relative;
		margin: 0 20px 0 0;
		z-index: 10;
		p {
			transition: all 0.4s ease 0s;
			font-size: ${rem(20)};
			font-weight: 600;
			margin: 0 0 0 11.62px;
		}
		svg {
			transition: all 0.4s ease 0s;
			fill: #ffffff;
			height: 36px;
			width: 30.38785743713379px;
		}
		&:hover {
			& > svg {
				fill: #bbbaba;
			}
			color: #bbbaba;
		}
	}
	.footer__up {
		width: 45px;
		height: 45px;
		background: #0061df;
		border-radius: 3px;
		margin: 0 0 0 10px;
		&:active {
			transform: scale(0.95);
		}
		&:hover {
			background-color: #1053a9;
		}
		svg {
			transform: rotate(90deg);
			fill: #ffffff;
		}
	}
	@media only screen and (max-width: ${em(767.98)}) {
		.footer__bottom {
			flex-direction: column;
		}
	}
`;

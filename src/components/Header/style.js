import styled, { keyframes } from "styled-components";
import { rem, em } from "../../helpers/functions/functions";

/*------------------------------------*/

/* Анимация открытия и закрытия меню бургер */

const burgtop = keyframes`
	0% {
	}
	20% {
		margin-top: 0;
		transform: rotate(0deg);
	}
	60% {
		margin-top: 0;
		transform: rotate(55deg);
	}
	100% {
		margin-top: 0;
		transform: rotate(45deg);
	}
`;

const burgbottom = keyframes`
	0% {
	}
	20% {
		margin-top: 0;
		transform: rotate(0deg);
	}
	60% {
		margin-top: 0;
		transform: rotate(-55deg);
	}
	100% {
		margin-top: 0;
		transform: rotate(-45deg);
	}
`;

const burgtopReset = keyframes`
	0% {
		margin-top: 0;
		transform: rotate(45deg);
	}
	20% {
		transform: rotate(0deg);
	}
	60% {
		margin-top: 12px;
		transform: rotate(0deg);
	}
	100% {
		margin-top: 10px;
		transform: rotate(0deg);
	}
`;

const burgbottomReset = keyframes`
	0% {
		margin-top: 0;
		transform: rotate(-45deg);
	}
	20% {
		transform: rotate(0deg);
	}
	60% {
		margin-top: -12px;
		transform: rotate(0deg);
	}
	100% {
		margin-top: -10px;
		transform: rotate(0deg);
	}
`;

/*------------------------------------*/

export const HeaderStyle = styled.header`
	background-color: #0d263b;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
	max-width: 100vw;
	.header__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 16px;
		gap: ${rem(20)};
		min-height: 64px;
		position: relative;
		&::before {
			width: 100%;
			height: 100%;
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			background-color: #0d263b;
			z-index: 9;
		}
	}
	.header__logo {
		display: flex;
		color: #fff;
		align-items: center;
		position: relative;
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
	
	.header__nav-body {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.header__link {
		color: #fff;
		margin: 0 ${rem(32, 16)};
		line-height: ${24 / 16};
		transition: all 0.3s ease 0s;
		position: relative;
		z-index: 10;
		&::before {
			content: "";
			display: inline-block;
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 0;
			transform: translate(-50%, 0);
			background-color: #fff;
			height: 2px;
			transition: all 0.4s ease 0s;
			border-radius: 2px;
		}
		&:hover {
			color: #bbbaba;
			&::before {
				background-color: #bbbaba;
			}
		}
		&.active {
			&::before {
				width: 100%;
			}
		}
	}
	.header__login-icon {
		display: none;
	}
	@media only screen and (max-width: ${em(767.98)}) {
		.header__logo {
			order: 2;
		}
		.header__navigator {
			order: 1;
			&.toggled {
				.header__nav-body {
					transform: translate(0, 0%);
					visibility: visible;
					opacity: 1;
				}
			}
			&.unToggled {
				.header__nav-body {
					transform: translate(0, -100%);
					visibility: hidden;
					opacity: 0;
				}
			}
		}
		.header__login-icon {
			display: block;
			min-width: 16px;
			min-height: 16px;
		}
		.header__login {
			padding: 10px;
			order: 3;
			border: none;
			width: 30px;
			&::before {
				display: none;
			}
			p {
				display: none;
			}
			svg {
				margin: 0;
			}
		}
		
		.header__nav-body {
			position: absolute;
			overflow: auto;
			z-index: 5;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			background-color: #0d263b;
			display: flex;
			padding: 90px 16px;
			flex-direction: column;
			flex-wrap: nowrap;
			transition: all 0.4s ease 0s;
		}
		.header__link {
			margin: 0 0 ${em(15, 30)} 0px;
			font-size: ${rem(30)};
		}
		.header__burger {
			position: relative;
			display: inline-block;
			background-color: #0d263b;
			z-index: 10;
			cursor: pointer;
			padding: 18px 10px;
			& > div {
				width: 30px;
				height: 3px;
				background: #f0ffff;
				&::before,
				&::after {
					transition: font-size 0s;
					content: "";
					display: block;
					position: absolute;
					width: 30px;
					height: 3px;
					background: #f0ffff;
				}
				&::before {
					margin-top: -10px;
				}
				&::after {
					margin-top: 10px;
				}
			}
			& > div {
				transition: background 0.6s, font-size 0s;
				&::before,
				&::after {
					transition: font-size 0s;
					transform-origin: center center;
				}
			}
			&.toggled {
				& > div::before {
					animation: ${burgtop} 0.6s linear forwards;
				}
				& > div {
					background: transparent;
				}
				& > div::after {
					animation: ${burgbottom} 0.6s linear forwards;
				}
			}
			&.unToggled {
				& > div::before {
					animation: ${burgtopReset} 0.6s linear forwards;
				}
				& > div {
					background: #f0ffff;
				}
				& > div::after {
					animation: ${burgbottomReset} 0.6s linear forwards;
				}
			}
		}
	}
`;

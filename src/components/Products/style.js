import styled from "styled-components";
import { em } from "../../helpers/functions/functions";

export const ProductsStyle = styled.section`
	padding: 96px 0 96px;
	background-color: ${(props) => props.bg};
	.swiper-pagination-bullet {
		background: #0061df;
		border: 2px solid #fff;
		box-sizing: content-box;
		opacity: 1;
		transition: border 0.3s ease 0s;
		transform: scale(1);
		margin: 0 13px 0 0 !important;
		&:last-child {
			margin: 0 !important;
		}
	}
	.swiper-pagination-bullet-active {
		border: 2px solid #0061df;
		background-color: #fff;
	}
	
	.swiper {
		padding: 0 0 65px 0;
		display: flex;
		position: relative;
		&::before,
		&::after {
			content: "";
			width: 100vw;
			height: 100%;
			position: absolute;
			background-color: ${(props) => props.bg};
			top: -30px;
		}
		&::before {
			z-index: 10;
			left: 0;
			transform: translate(-100%, 0);
		}
		&::after {
			transform: translate(100%, 0);
			z-index: 10;
			right: 0;
		}
	}
	.swiper-wrapper {
		align-items: stretch;
	}
	.swiper-slide {
		height: auto;
	}
	.swiper-button-prev,
	.swiper-button-next {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
		transition: all 0.2s ease 0s;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: #ffffff;
		border: 1px solid #e6e9ec;
		box-shadow: 0 10px 50px rgba(13, 38, 59, 0.1);
		z-index: 11;
		top: 98%;
		transform: translate(0, -50%);
		&:hover {
			box-shadow: 0 0 0 5px rgba(181, 178, 178, 0.2);
		}
		&:active {
			transform: translate(-5px, 0);
		}
		&::after {
			transform: translate(-1px, 0);
			font-size: 16px;
			font-weight: 700;
			color: #000;
			opacity: 1;
		}
	}
	.swiper-button-prev {
		left: 9px;
		&:active {
			transform: translate(-5px, -50%);
		}
	}
	.swiper-button-next {
		right: 10px;
		&:active {
			transform: translate(5px, -50%);
		}
		&::after {
			transform: translate(1px, 0);
		}
	}
	@media only screen and (min-width: ${em(1439.98)}) {
		.swiper-pagination {
			display: ${(props) => (props.pagination === false ? "none" : "block")};
		}
	}
	@media only screen and (max-width: ${em(1023.98)}) {
		padding: 32px 0 32px;
	}
	@media only screen and (max-width: ${em(992.98)}) {
		padding: 64px 0 64px;
	}
`;

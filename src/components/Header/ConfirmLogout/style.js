import styled, { keyframes } from "styled-components";
import { rem } from "../../../helpers/functions/functions";

const openWindow = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const closeWindow = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}	
`;

const fadeBG = keyframes`
	0% {
		background-color: rgba(0,0,0,0.8);
	}
	100% {
		background-color: transparent;
	}
`;

const unfadeBG = keyframes`
	0% {
		background-color: transparent;
	}
	100% {
		background-color: rgba(0,0,0,0.8);
	}
`;

export const ConfirmLogoutStyle = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	cursor: default;
	transition: all 1s ease 0s;
	overflow-y: auto;
	display: flex;
	animation: ${unfadeBG} 0.3s forwards;
	justify-content: center;
	padding: 90px 10px;
	align-items: center;
	z-index: 10;
	.confirm-logout__wrapper {
		transition: all 0.3s ease 0s;
		background-color: #fff;
		padding: 20px 25px;
		animation: ${openWindow} 0.3s forwards;
		opacity: 0;
		border-radius: 3px;
	}
	.confirm-logout__text {
		color: #0d263b;
		font-size: ${rem(17)};
		font-weight: 600;
	}
	.confirm-logout__buttons {
		margin: 20px 0px 0px 0px;
		display: flex;
		justify-content: flex-end;
		button {
			padding: 10px 30px;
			margin: 0px 0px 0px 10px;
		}
	}
	&.closing {
		animation: ${fadeBG} 0.3s forwards;
		.confirm-logout__wrapper {
			animation: ${closeWindow} 0.3s forwards;
		}
	}
`;

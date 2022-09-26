import styled, { css, keyframes } from "styled-components";
import { rem } from "../../helpers/functions/functions";

const PrimaryButton = css`
	background: #0061df;
	border: 1px solid #0061df;
	p {
		color: #ffffff;
	}
	&:hover {
		background-color: #1053a9;
	}
`;

const SecondaryButton = css`
	border: 1px solid #e6e9ec;
	background-color: transparent;
	p {
		color: #0d263b;
	}
	&:hover {
		background-color: #fdf3f3;
	}
`;

const DefaultButton = css`
	border: 1px solid #ffffff;
	background-color: transparent;
	p {
		color: #fff;
	}
	&::before {
		content: "";
		display: inline-block;
		position: absolute;
		top: 0;
		transition: all 0.6s ease 0s;
		left: 0;
		transform: skew(-20deg) translate(-120%, 0);
		width: 120%;
		height: 100%;
		background-color: #fff;
	}
	&:hover {
		p {
			color: #0d263b;
		}
		&::before {
			transform: translate(0, 0);
		}
	}
`;

const pending = keyframes`
	0% {
		left: 0;
	}
	100% {
		left: 100%;
		transform: translate(50%, 0);
	}
`;

export const ButtonStyle = styled.button`
	border-radius: 2px;
	padding: 12px 40px;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	transition: all 0.2s ease 0s;
	user-select: none;
	cursor: pointer;
	&:active {
		transform: scale(0.95);
	}
	svg {
		margin: 0 8px 0 0;
		min-width: 18px;
		min-height: 18px;
	}
	p {
		transition: all 0.4s ease 0s;
		margin: 0;
		font-size: ${rem(14)};
		line-height: 143%;
		position: relative;
		z-index: 1;
	}
	
	&.pending::before {
		animation: ${pending} 1s infinite;
		content: "";
		display: inline-block;
		position: absolute;
		bottom: 0;
		left: 0;
		transform: translate(-100%, 0);
		height: 2px;
		width: 50%;
		background-color: #fff;
	}
	${(props) => {
		if (props.type === "primary") {
			return PrimaryButton;
		} else if (props.type === "secondary") {
			return SecondaryButton;
		} else {
			return DefaultButton;
		}
	}}
`;

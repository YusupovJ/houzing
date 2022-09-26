import styled, { keyframes } from "styled-components";
import { rem } from "../../helpers/functions/functions";

// Определяем цвет
const color = ({ type }, opacity = 1) => {
	if (type === "success") {
		return `rgba(54, 155, 54, ${opacity})`;
	} else if (type === "warning") {
		return `rgba(247, 168, 24, ${opacity})`;
	} else {
		return `rgba(143, 0, 0, ${opacity})`;
	}
};

/* ------------------------------------ */

// Появление алерта
const hello = keyframes`
	0% {
		transform: translate(-50%, 200%);
	}
	100% {
		transform: translate(-50%, 0%);
	}
`;

// Уход алерта
const bye = keyframes`
	0% {
		transform: translate(-50%, 0%);
	}
	100% {
		transform: translate(-50%, 200%);
	}
`;

/* ------------------------------------ */

export const AlertStyle = styled.div`
	display: flex;
	align-items: center;
	position: fixed;
	z-index: 998;
	background-color: #fff;
	bottom: 0;
	animation: ${hello} 0.4s cubic-bezier(0.3, 0.53, 0.32, 1.1) 0s 1 forwards;
	left: 50%;
	transform: translate(-50%, 200%);
	max-width: 600px;
	margin: 16px 0;
	border: 1px solid ${color};
	border-radius: 5px;
	border-left: 15px solid ${color};
	width: 94%;
	min-width: 100px;
	&.closing {
		animation: ${bye} 0.4s cubic-bezier(0.3, 0.53, 0.32, 1.1) 0s 1 forwards;
	}
	.alert__icon {
		width: 20px;
		margin: 0 0 0 10px;
		height: 20px;
		svg {
			fill: ${color};
		}
	}
	.alert__text {
		color: ${color};
		flex: 1 1 auto;
		font-size: ${rem(15)};
		font-weight: 600;
		margin: 10px 0 10px 10px;
	}
	.alert__close {
		align-self: stretch;
		display: flex;
		background-color: ${(props) => color(props, 0.3)};
		border-left: 1px solid ${color};
		align-items: center;
		padding: 0 10px;
		cursor: pointer;
		&:active {
			.alert__close-icon {
				transform: scale(0.9);
			}
		}
		&:hover {
			.alert__close-icon {
				opacity: 0.9;
			}
		}
	}
	.alert__close-icon {
		transition: all 0.3s ease 0s;
		border: 2px solid ${color};
		border-radius: 50%;
		width: 20px;
		height: 20px;
		padding: 5px;
		position: relative;
		svg {
			stroke: ${color};
			width: 13px;
			height: 13px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;

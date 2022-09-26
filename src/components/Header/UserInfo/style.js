import styled from "styled-components";
import { rem, em } from "../../../helpers/functions/functions";

export const UserInfoStyle = styled.div`
	cursor: pointer;
	z-index: 1000;
	position: relative;
	.user-info__ava {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		border: 2px solid #fff;
		overflow: hidden;
		svg {
			fill: #fff;
		}
	}
	.user-info__button {
		display: flex;
		align-items: center;
		background-color: transparent;
		& > svg {
			fill: #fff;
			transition: all 0.3s ease 0s;
			margin: 0 0 0 10px;
			transform: rotate(270deg);
			&.open {
				transform: rotate(90deg);
			}
		}
	}
	.user-info__popover {
		position: absolute;
		bottom: 0;
		right: 0;
		transform: translate(0, 120%);
		padding: 10px 0 0 0;
		min-width: 280px;
		transition: all 0.3s ease 0s;
		visibility: hidden;
		opacity: 0;
		&.open {
			visibility: visible;
			opacity: 1;
			transform: translate(0, 100%);
		}
	}
	.user-info__wrapper {
		background-color: #fff;
		border-radius: 5px;
		padding: 20px 15px;
		cursor: default;
		border: 1px solid #e6e9ec;
		hr {
			width: 100%;
			height: 1px;
			background-color: #e6e9ec;
			margin: 20px 0;
		}
	}
	.user-info__link {
		display: block;
		color: #0d263b;
		font-size: ${rem(17)};
		margin: 0 0 5px 0;
		transition: all 0.3s ease 0s;
		:hover {
			color: #5e6d78;
		}
	}
	.user-info__name {
		font-size: ${rem(20)};
		font-weight: 600;
	}
	.user-info__logout {
		display: flex;
		align-items: center;
		background-color: transparent;
		transition: all 0.3s ease 0s;
		p {
			font-size: ${rem(16)};
			font-weight: 600;
		}
		svg {
			fill: #0d263b;
		}
		&:hover {
			transform: translate(2px, 0);
		}
	}
	@media only screen and (max-width: ${em(767.98)}) {
		order: 3;
		.user-info__user {
			flex: 0 0 35px;
			height: 35px;
			margin: 0;
		}
	}
`;

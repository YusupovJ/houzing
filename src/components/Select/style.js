import styled from "styled-components";
import { rem } from "../../helpers/functions/functions";

export const SelectStyle = styled.div`
	position: relative;
	.select__input {
		position: relative;
		z-index: 4;
		background-color: #fff;
		& > input:disabled {
			cursor: pointer;
			text-transform: capitalize;
		}
	}
	.select__text {
		border-bottom: 1px solid #e6e9ec;
		padding: 0px 0px ${rem(28)} 0px;
		font-size: ${rem(14)};
		line-height: 143%;
		max-height: 100px;
		overflow: auto;
		width: 100%;
		color: #0d263b;
		transition: border-bottom 0.1s ease 0s;
		cursor: pointer;
		span {
			display: inline-block;
			color: #696969;
			transition: all 0.2s ease 0s;
			position: absolute;
			top: 4px;
			left: 0;
		}
		&_err {
			border-bottom: 1px solid red;
		}
		&.focus {
			border-bottom: 1px solid #0061df;
			padding: 4px 0;
			span {
				top: -20px;
				font-weight: 600;
				color: #0d263b;
			}
		}
	}
	.select__arrow {
		fill: #696969;
		position: absolute;
		bottom: 11px;
		right: 16px;
		transform: rotate(-90deg);
		cursor: pointer;
		z-index: 4;
		transition: all 0.3s ease 0s;
	}
	.select__options {
		max-height: 200px;
		overflow-y: auto;
		position: absolute;
		background-color: #f5f5f5;
		width: 100%;
		height: fit-content;
		z-index: 3;
		border: 1px solid #ccc;
		border-top: none;
		bottom: 30px;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease 0s, bottom 0.2s ease 0s;
		left: 0;
		transform: translate(0, 100%);
		pointer-events: none;
	}

	.select__option {
		cursor: pointer;
		text-transform: capitalize;
		padding: 0 15px;
		transition: all 0.3s ease 0s;
		user-select: none;
		&:hover {
			background-color: #fff;
		}
	}

	&.open {
		.select__arrow {
			transform: rotate(90deg);
		}
		.select__option {
			padding: 10px 15px;
		}
		.select__options {
			pointer-events: all;
			bottom: 0;
			visibility: visible;
			opacity: 1;
		}
	}
`;

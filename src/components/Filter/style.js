import styled from "styled-components";
import { em, rem } from "../../helpers/functions/functions";
import houses from "../../assets/svg/houses.svg";

export const FilterStyle = styled.section`
	.filter__container {
		display: flex;
		padding: 10px 16px;
		align-items: center;
		gap: 20px 15px;
		position: relative;
	}
	.filter__input {
		border: 1px solid #e6e9ec;
		border-radius: 2px;
		flex: 6 1 auto;
		padding: 12px 12px 12px 44px;
		font-size: ${rem(14)};
		line-height: 143%;
		color: #0d263b;
		position: relative;
		transition: all 0.4s ease 0s;
		background: url(${houses}) 16px 50% / 20px 14.59px no-repeat;
		&:focus {
			box-shadow: 0 3px 4px 0 #d3d1d1;
		}
	}
	.filter__advanced {
		flex: 1 1;
		overflow: visible;
		position: relative;
	}
	.filter__submit {
		flex: 1 1 auto;
	}
	
	.popover {
		bottom: 0;
		position: absolute;
		max-width: 100%;
		margin: 0 16px;
		padding: 13px 0 0 0;
		right: 0;
		transform: translate(0, 100%);
		z-index: 10;
		visibility: hidden;
		opacity: 0;
		transition: all 0.3s ease 0s;
		&.open {
			visibility: visible;
			opacity: 1;
		}
	}
	.popover__body {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border: 1px solid #e6e9ec;
		border-bottom: none;
		padding: 10px 10px 20px 30px;
		background-color: #fff;
	}
	.popover__title {
		font-weight: 600;
		font-size: ${rem(16)};
		line-height: 150%;
		color: #0d263b;
		margin: ${em(20, 16)} 0px 0px;
	}
	.popover__inputs {
		display: flex;
		flex-wrap: wrap;
		gap: 10px 20px;
		input {
			flex: 1 1 200px;
			border: 1px solid #e6e9ec;
			padding: 12px 16px;
			background: transparent;
			border-radius: 5px;
			transition: all 0.3s ease 0s;
			font-size: ${rem(14)};
			line-height: 143%;
			color: #0d263b;
			&:focus {
				box-shadow: 0 3px 4px 0 #d3d1d1;
			}
		}
	}
	.popover__buttons {
		display: flex;
		justify-content: flex-end;
		padding: 20px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		background: #f6f8f9;
		border: 1px solid #e6e9ec;
		border-top: none;
	}
	
	.popover__button {
		margin: 0 0 0 20px;
	}
	
	@media only screen and (max-width: ${em(767.98)}) {
		position: absolute;
		z-index: 2;
		bottom: 62px;
		left: 50%;
		margin: 0 auto;
		gap: 24px 21px;
		transform: translate(-50%, 0);
		max-width: 600px;
		width: 100%;
		.filter__container {
			border-radius: 3px;
			flex-wrap: wrap;
			background-color: #fff;
			box-sizing: content-box;
			margin: 0 10px;
		}
		.filter__input {
			flex: 1 1 100%;
			background: url(${houses}) 0 50% / 35px 14.59px no-repeat;
			border: none;
			padding: 10px 7px 10px 32px;
			border-bottom: 1px solid #e6e9ec;
		}
		.popover {
			margin: 0;
			padding: 5px 0 0 0;
		}
		.popover__body {
			padding: 1px 10px 10px 10px;
		}
		.popover__title {
			margin: ${em(10, 16)} 0px 0px;
		}
		.popover__buttons {
			padding: 10px;
		}
		.filter__submit {
			flex: 1 1 25%;
		}
		.filter__filter {
			flex: 1 1 25%;
		}
		.filter__button {
			width: 100%;
			padding: 12px 18px;
		}
	}
`;

import styled from "styled-components";
import { rem, em } from "../../../helpers/functions/functions";

export const InputsStyle = styled.section`
	padding: 24px 30px 48px;
	background-color: #fff;
	border: 1px solid #e6e9ec;
	box-shadow: 0 10px 30px rgba(13, 38, 59, 0.05);
	border-radius: 3px;
	margin: 0 0 32px 0;
	
	.inputs__title {
		font-weight: 600;
		margin: 0 0 ${em(45, 18)} 0px;
		font-size: ${rem(18)};
		line-height: 156%;
		color: #0d263b;
	}
	
	.inputs__row {
		display: flex;
		flex-wrap: wrap;
		gap: 45px 20px;
	}
	
	.inputs__input {
		flex: 1 1 400px;
		
		&_textarea {
			flex: 1 1 100%;
		}
	}
	
	.amenities__checkbox {
		flex: 0 1 208px;
	}
	
	.inputs__map {
		flex: 1 1 100%;
	}
	
	&.cols_30 {
		.inputs__row {
			display: grid;
			grid-template: 1fr / repeat(auto-fit, minmax(270px, 1fr));
		}
	}
	
	.inputs__remove-img {
		position: absolute;
		z-index: 10;
		top: 13px;
		right: 13px;
		padding: 7px;
		border-radius: 4px;
		background-color: #2a2a2a;
		visibility: hidden;
		transition: all 0.4s ease 0s;
		opacity: 0;
		
		svg {
			fill: #fff;
		}
		
		&.touch {
			visibility: visible;
			opacity: 1;
		}
	}
	
	.inputs__image {
		background: #c4c4c4;
		border-radius: 3px;
		overflow: hidden;
		position: relative;
		cursor: pointer;
		
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		
		&_new {
			position: relative;
			cursor: pointer;
			transition: all 0.3s ease 0s;
			
			&::before {
				content: "+";
				position: absolute;
				transition: all 0.4s ease 0s;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: ${rem(80)};
				color: #f5f5f5;
				background-color: rgba(0, 0, 0, 0.415);
			}
			
			&:hover::before {
				box-shadow: 0 5px 10px 8px rgba(34, 60, 80, 0.2) inset;
			}
			
			&:active {
				transform: scale(0.9);
			}
		}
		
		&.err {
			box-shadow: 0 0 15px #ff1e1e;
		}
		
		&:hover .inputs__remove-img {
			visibility: visible;
			opacity: 1;
		}
	}
	
	.inputs__upload {
		flex: 0 1 auto;
		position: relative;
		padding: 12px 50px;
		border: 1px solid #0061df;
		overflow: hidden;
		border-radius: 2px;
		cursor: pointer;
		transition: all 0.3s ease 0s;
		
		p {
			font-size: ${rem(14)};
			line-height: 143%;
			color: #0061df;
			position: relative;
			z-index: 2;
			cursor: pointer;
			transition: all 0.3s ease 0s;
		}
		
		input {
			cursor: pointer;
			position: absolute;
			top: 0;
			width: 180%;
			height: 100%;
			left: 0;
			margin: 0 0 0px -120px;
			opacity: 0;
			z-index: 3;
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
			background-color: #0061df;
		}
		
		&:hover {
			p {
				color: #fff;
			}
			
			&::before {
				transform: translate(0, 0);
			}
		}
		
		&:active {
			transform: scale(0.9);
		}
	}
	
	@media only screen and (max-width: ${em(767.98)}) {
		padding: 24px 15px 48px;
		.inputs__title {
			margin: 0 0 ${em(35, 18)} 0px;
		}
		
		.inputs__row {
			gap: 35px 20px;
		}
		
		.amenities__checkbox {
			flex: 1 1 200px;
		}
	}
`;

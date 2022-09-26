import styled from "styled-components";
import { rem } from "../../helpers/functions/functions";

export const InputStyle = styled.div`
	position: relative;
	height: 30px;
	transition: all 0.2s ease 0s;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	.input__placeholder {
		position: absolute;
		top: 45%;
		transform: translate(0, -50%);
		left: 0;
		user-select: none;
		font-size: 14px;
		line-height: 143%;
		color: #696969;
		transition: all 0.2s ease 0s;
		display: inline-block;
		cursor: text;
	}
	&.focus {
		height: ${({ textArea }) => textArea && "75px"};
		.input__field {
			border-bottom: 1px solid #0061df;
			&_err {
				border-bottom: 1px solid red;
			}
		}
		.input__placeholder {
			top: -7px;
			color: #0d263b;
			font-weight: 600;
		}
	}
	.input__field {
		border-bottom: 1px solid #e6e9ec;
		padding: 4px 0;
		font-size: ${rem(14)};
		line-height: 143%;
		max-height: 100px;
		overflow: auto;
		width: 100%;
		color: #0d263b;
		transition: all 0.1s ease 0s;
		&_err {
			border-bottom: 1px solid red;
		}
		&_textarea {
			max-height: 100%;
			height: 75px;
		}
		&:disabled + .input__placeholder {
			cursor: pointer;
		}
	}
`;

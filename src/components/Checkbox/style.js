import styled from "styled-components";
import { rem } from "../../helpers/functions/functions";

export const CheckboxStyle = styled.div`
	display: flex;
	align-items: center;
	.checkbox__field {
		position: absolute;
		z-index: -1;
		opacity: 0;
		transition: all 0.3s ease 0s;
	}
	.checkbox__label {
		font-size: ${rem(14)};
		cursor: pointer;
		width: 100%;
		line-height: 143%;
		color: #696969;
		user-select: none;
		display: flex;
		align-items: center;
	}
	.checkbox__label::before {
		content: "";
		display: inline-block;
		flex: 0 0 18px;
		margin: 0 12px 0 0;
		height: 18px;
		transition: all 0.2s;
		border: 2px solid #adb5bd;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 10px 10px;
	}
	
	.checkbox__field:checked + .checkbox__label::before {
		border-color: #0b76ef;
		background-color: #0b76ef;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
	}
`;

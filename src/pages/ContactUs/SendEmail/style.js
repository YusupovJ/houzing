import styled from "styled-components";
import { em } from "../../../helpers/functions/functions";

export const SendEmailStyle = styled.section`
	.send-email__title {
		margin: 100px 0px 64px 0px;
	}
	.email__inputs {
		display: flex;
		flex-wrap: wrap;
		gap: 35px 24px;
	}
	.email__input {
		flex: 1 1 40%;
		&_textarea {
			flex: 1 1 100%;
		}
	}
	.email__button {
		margin: 30px 0px 0px 0px;
	}

	@media only screen and (max-width: ${em(767.98)}) {
		.send-email__title {
			margin: 50px 0px 30px 0px;
		}
		.email__input {
			flex: 1 1 100%;
		}
	}
`;

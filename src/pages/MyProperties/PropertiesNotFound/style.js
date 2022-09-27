import styled from "styled-components";
import { em } from "../../../helpers/functions/functions";

export const PropertiesNotFoundStyle = styled.div`
	display: flex;
	align-items: center;
	text-align: left !important;
	justify-content: center;
	img {
		margin: 0 10px 0 0;
		height: 100px;
	}

	@media only screen and (max-width: ${em(424.98)}) {
		flex-direction: column;
	}
`;

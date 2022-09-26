import styled from "styled-components";
import { rem } from "../../../helpers/functions/functions";

export const BulletsStyle = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0 0 0;
	gap: 10px;
	.bullets__button {
		padding: 7px;
		min-width: 35px;
		svg {
			fill: #0d263b;
			margin: 0;
		}
		&_reverse {
			svg {
				transform: rotate(180deg);
			}
		}
		p {
			font-size: ${rem(18)};
		}
	}
	
	.bullets__button.current {
		box-shadow: 0 0 10px #ccc;
	}
`;
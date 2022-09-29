import styled from "styled-components";
import { rem, em } from "../../../helpers/functions/functions";

export const InfoStyle = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 20px;
	margin: 0px 0px 53px 0px;
	align-items: flex-start;
	.contact-us__info {
		display: flex;
		align-items: flex-start;
		flex: 0 1 355px;
	}
	.contact-us__info-icon {
		background: rgba(0, 97, 223, 0.2);
		border-radius: 50%;
		margin: 0px 20px 0px 0px;
		padding: 20px;
		svg {
			fill: #0061df;
			width: 30px;
			height: 30px;
		}
	}
	.contact-us__subtitle {
		font-weight: 600;
		font-size: 1rem;
		line-height: 150%;
		color: #0d263b;
		margin: 0px 0px 6px 0px;
	}
	.contact-us__text {
		font-weight: 400;
		font-size: ${rem(14)};
		color: #696969;
		span {
			margin: 0px 0px 5px 0px;
			display: inline-block;
		}
		a {
			color: inherit;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	@media only screen and (max-width: ${em(767.98)}) {
		gap: 15px;
		.contact-us__info-icon {
			margin: 0px 10px 0px 0px;
			padding: 15px;
			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
`;

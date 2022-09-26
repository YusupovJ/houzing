import styled from "styled-components";
import { rem, em } from "../../helpers/functions/functions";

export const AddPropertyStyle = styled.main`
	padding: 34px 0 96px 0;
	background: #f5f5f5;
	
	.add-property__title {
		font-weight: 600;
		font-size: ${rem(28)};
		line-height: 129%;
		letter-spacing: -0.02em;
		color: #0d263b;
		margin: 0 0 ${em(32, 28)} 0px;
	}
	
	.add-property__button {
		margin-left: auto;
		padding: 12px 114px;
	}
	
	.inputs__images {
		flex: 1 1 100%;
		display: grid;
		grid-template: 200px / repeat(auto-fit, minmax(200px, ${(props) => (props.filesLength < 3 ? "200px" : "1fr")}));
		gap: 20px;
		grid-auto-rows: 200px;
	}
	
	@media only screen and (max-width: ${em(767.98)}) {
		.add-property__title {
			margin: 0 0 ${em(20, 28)} 0px;
		}
		
		.inputs__images {
			grid-template: 200px / repeat(
					auto-fit,
					minmax(200px, ${(props) => (props.filesLength === 0 ? "200px" : "1fr")})
				);
		}
	}
	@media only screen and (max-width: ${em(424.98)}) {
		.inputs__images {
			grid-template: 200px / repeat(auto-fit, minmax(200px, 1fr));
		}
	}
`;

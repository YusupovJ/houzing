import styled from "styled-components";
import { em, rem } from "../../helpers/functions/functions";

export const TitleStyled = styled.div`
	margin: 0 0 32px 0;
	.text-block__title {
		font-weight: 600;
		font-size: ${rem(28)};
		line-height: 129%;
		text-align: center;
		letter-spacing: -0.02em;
		color: #0d263b;
		margin: 0 0 ${em(8, 28)} 0;
	}
	.text-block__text {
		font-size: ${rem(16)};
		line-height: 150%;
		text-align: center;
		color: #696969;
	}
`;

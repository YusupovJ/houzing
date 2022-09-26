import styled from "styled-components";
import { em, rem } from "../../../helpers/functions/functions";

export const ChooseUsStyle = styled.section`
	padding: 48px 0;
	background: #f5f7fc;
	
	.chooseus__row {
		display: flex;
		justify-content: space-between;
		gap: 32px 30px;
		flex-wrap: wrap;
	}
	
	.chooseus__item {
		flex: 1 1 235px;
		text-align: center;
	}
	
	.chooseus__item-title {
		font-weight: 600;
		font-size: ${rem(18)};
		margin: ${em(24, 18)} 0 ${em(8, 18)} 0;
		line-height: 156%;
		color: #0d263b;
	}
	
	.chooseus__text {
		font-size: ${rem(14)};
		line-height: 143%;
		color: #696969;
	}
`;

import styled from "styled-components";
import { rem, em } from "../../../helpers/functions/functions";

export const DownloadStyle = styled.div`
	margin: 48px 0 0 0;
	.download__files {
		display: flex;
		margin: 16px 0 0 0;
		gap: 15px 48px;
		flex-wrap: wrap;
	}
	.download__file {
		flex: 0 1 auto;
		display: flex;
		align-items: center;
		span {
			margin: 0 ${em(24, 14)} 0 ${em(8, 14)};
			font-size: ${rem(14)};
			line-height: 143%;
			color: #696969;
		}
	}
	.download__link {
		font-weight: 600;
		font-size: ${rem(12)};
		line-height: 167%;
		letter-spacing: 0.01em;
		text-decoration-line: underline;
		text-transform: uppercase;
		color: #0061df;
	}
`;

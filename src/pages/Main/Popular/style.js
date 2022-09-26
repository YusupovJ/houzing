import styled from "styled-components";
import { em, rem } from "../../../helpers/functions/functions";

export const PopularStyle = styled.section`
	position: relative;
	.popular__bg,
	.popular__bg-skeleton {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(35%);
	}
	.popular__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 2;
		position: relative;
		min-height: 571px;
	}
	.popular__title {
		font-weight: 600;
		max-width: 567px;
		font-size: ${rem(28)};
		line-height: 129%;
		text-align: center;
		letter-spacing: -0.02em;
		color: #ffffff;
		margin: 0 0 ${em(48, 28)} 0;
	}
`;

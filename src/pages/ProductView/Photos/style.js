import styled, { css } from "styled-components";
import { rem, em } from "../../../helpers/functions/functions";

/* ------------------------------------ */

// Общий адаптив сетки
const gridMedia = css`
	@media only screen and (max-width: ${em(767.98)}) {
		grid-template: repeat(2, 130px) / repeat(auto-fit, minmax(191px, 1fr));
		grid-auto-rows: 130px;
	}
	@media only screen and (max-width: ${em(434.98)}) {
		grid-template: repeat(2, 90px) / repeat(auto-fit, minmax(130px, 1fr));
		grid-auto-rows: 110px;
		gap: 10px;
	}
`;

/* ------------------------------------ */

// Основная сетка
const grid = css`
	grid-template: repeat(2, 180px) / repeat(auto-fit, minmax(223.5px, 1fr));
	${gridMedia}
`;

/* ------------------------------------ */

// Сетка для двуч фотографий
const gridTwo = css`
	grid-template: 270px / repeat(auto-fit, minmax(320px, 1fr));
	grid-auto-rows: 270px;
	> span:first-child, .photos__photo_big {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}
	@media only screen and (max-width: ${em(767.98)}) {
		grid-template: 170px / repeat(auto-fit, minmax(190px, 1fr));
		grid-auto-rows: 170px;
		gap: 10px;
	}
`;

/* ------------------------------------ */

// Сетка для трех фотографий
const gridThree = css`
	grid-template: repeat(2, 180px) / repeat(auto-fit, minmax(290px, 1fr));
	grid-auto-rows: 180px;
	${gridMedia}
`;

/* ------------------------------------ */

// Сетка для четырех фотографий
const gridFour = css`
	grid-template: repeat(2, 180px) / repeat(auto-fit, minmax(223.5px, 1fr));
	grid-auto-flow: column;
	${gridMedia};
	@media only screen and (max-width: ${em(767.98)}) {
		grid-auto-flow: dense;
	}
	@media only screen and (min-width: ${em(991.98)}) {
		.photos__photo_last, > span[aria-live]:nth-child(4) {
			grid-row: 1 / 3;
		}
	}
`;

/* ------------------------------------ */

export const PhotosStyle = styled.section`
	display: grid;
	gap: 20px;
	flex: 1 1 100%;
	margin: 0 0 24px 0;
	span {
		height: 100%;
	}
	.photos__photo {
		position: relative;
		border-radius: 5px;
		display: inline-block;
		cursor: pointer;
		overflow: hidden;
		user-select: none;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&.err {
			border: 2px solid #0d263b;
			padding: 0 0 32% 0;
			img {
				width: 25%;
				height: 56%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
	> span:first-child, .photos__photo_big {
		grid-row: 1 / 3;
		grid-column: 1 / 3;
	}
	.photos__other {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.657);
		font-weight: 600;
		font-size: ${rem(36)};
		line-height: 122%;
		letter-spacing: -0.02em;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease 0s;
		user-select: none;
		&:hover {
			background-color: rgba(0, 0, 0, 0.8);
		}
		&:active {
			background-color: rgba(0, 0, 0, 0.9);
		}
	}
	
	${(props) => {
		if (props.photosCount === 2) {
			return gridTwo;
		} else if (props.photosCount === 3) {
			return gridThree;
		} else if (props.photosCount === 4) {
			return gridFour;
		} else {
			return grid;
		}
	}};
	@media only screen and(max-width: ${em(767.98)}) {
		.photos__other {
			font-size: ${rem(25)};
		}
	}
`;

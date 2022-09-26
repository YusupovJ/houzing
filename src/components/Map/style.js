import styled from "styled-components";

export const GoogleMapStyle = styled.div`
	height: calc(300px + 116 * ((100vw - 320px) / (1280 - 320)));
	div {
		cursor: ${(props) => props.markerDraggable && "pointer"};
	}
	
	/* Саму ссылку затемняем, чтобы хорошо было видно */
	a {
		filter: brightness(50%);
	}
	
	/* Скрываем элементы управления */
	.gmnoprint:not(:last-child) {
		display: none;
	}
	
	/* Скрываем alert вначале */
	> div > div:nth-child(2),
	> div > div:nth-child(3) {
		display: none;
	}
`;

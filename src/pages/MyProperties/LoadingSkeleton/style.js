import styled from "styled-components";

export const LoadingSkeletonStyle = styled.div`
	.loading__wrapper {
		display: flex;
		justify-content: space-between;
	}
	.loading__titles {
		display: flex;
		justify-content: space-between;
		> span {
			flex: 0 0 25%;
		}
		.loading__skeleton {
			float: right;
			height: 20px;
			width: 150px;
			transform: translate(0, 0);
			margin: 0px 0px 16px 0px;
		}

		> span:first-child .loading__skeleton {
			float: left;
		}
	}
	.loading__skeleton {
		width: 108px;
		margin: 0px 0px 109px 0px;
		transform: translate(-18px, 46px);
	}
	.loading__element {
		display: flex;
		margin: 0px 0px 20px 0px;
	}
	.loading__image {
		height: 113px;
		width: 113px;
		margin: 0px 16px 0px 0px;
	}
`;

import styled from "styled-components";
import { em } from "../../../helpers/functions/functions";

export const LoadingSkeletonStyle = styled.div`
	.loading__wrapper {
		display: flex;
		justify-content: space-between;
	}
	.loading__title {
		height: 20px;
		width: 120px;
		margin: 0px 0px 16px 0px;
	}

	.loading__skeleton {
		width: 90px;
		margin: 0px 0px 109px 0px;
		transform: translate(0, 46px);
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
	.loading__column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.loading__action {
		display: none;
	}
	.loading__actions {
		display: flex;
		justify-content: space-between;
	}
	.loading__body {
		flex: 1 1 auto;
	}
	.loading__name {
		width: 110px;
	}
	.loading__address {
		width: 90px;
	}
	@media only screen and (max-width: ${em(767.98)}) {
		.loading__column_no-tablet {
			display: none;
		}
	}
	@media only screen and (max-width: ${em(424.98)}) {
		.loading__column_no-mobile {
			display: none;
		}
		.loading__elements {
			width: 100%;
		}
		.loading__action {
			display: inline-block;
			float: right;
		}
		.loading__name {
			width: 87%;
		}
		.loading__address {
			width: 70%;
		}
	}
`;

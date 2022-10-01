import styled from "styled-components";
import { em, rem } from "../../helpers/functions/functions";

export const AuthStyle = styled.main`
	.auth__container {
		height: 100%;
		display: flex;
		padding: 64px 15px;
	}

	.auth__wrapper {
		padding: 24px 30px 48px;
		background: #ffffff;
		border: 1px solid #e6e9ec;
		box-shadow: 0 10px 30px rgba(13, 38, 59, 0.05);
		border-radius: 3px;
		margin: 0 auto;
		flex: 0 1 580px;
		position: relative;
	}

	.auth__body {
		display: flex;
		flex-direction: column;
	}

	.auth__title {
		font-weight: 600;
		font-size: ${rem(18)};
		line-height: 156%;
		color: #0d263b;
		text-indent: 25px;
	}

	.auth__prev-page {
		position: absolute;
		top: 28px;
		left: 16px;
		background-color: transparent;
		transition: all 0.3s;
		svg {
			fill: #0d263b;
			width: 40px;
			height: 20px;
		}
		&:hover {
			transform: translate(-2px, 0);
		}
		&:active {
			transform: translate(-4px, 0);
		}
	}

	.auth__button {
		width: 100%;
		margin: 20px 0 32px 0;
	}

	.auth__error {
		color: red;
		font-size: ${rem(17)};
		z-index: 10;
		margin: 0 0 10px;
	}

	.auth__input {
		margin: 30px 0 0 0;
		.input__placeholder {
			font-family: Montserrat, serif;
			-webkit-text-security: none;
		}
		&_password {
			font-family: text-security-disc, serif;
			color: #818f9b;
			-webkit-text-security: disc;
		}
	}

	.auth__action {
		display: flex;
		justify-content: space-between;
		margin: 16px 0 10px 0;
	}

	.auth__info {
		font-size: ${rem(14)};
		line-height: 143%;
		color: #696969;
		margin: 20px 0 0 0;
	}

	.auth__remember {
		display: flex;
		align-items: center;
		input {
			margin: 0 10px 0 0;
			cursor: pointer;
		}
		label {
			font-size: ${rem(14)};
			line-height: 143%;
			color: #696969;
			user-select: none;
			white-space: nowrap;
			cursor: pointer;
		}
	}

	.auth__link {
		font-size: ${rem(16)};
		line-height: 150%;
		text-decoration-line: underline;
		color: #0061df;
		cursor: pointer;
		:hover {
			color: #3d84e1;
		}
	}

	.auth__have-not-acc {
		display: flex;
		margin: 0 auto;
		align-items: center;
		transition: all 0.3s ease 0s;
		p {
			text-align: center;
			margin-right: 4px;
			font-size: 1rem;
			line-height: 150%;
			color: #696969;
		}
	}

	.auth__next-button {
		margin: 30px 0 0 0;
	}

	.auth__inputs {
		display: grid;
		grid-template: 1fr / repeat(auto-fit, minmax(30px, 1fr));
		gap: 10px;
		margin: 20px 0 0 0;
		height: 80px;
	}

	@media only screen and (max-width: ${em(767.98)}) {
		.auth__wrapper {
			padding: 30px 15px;
		}

		.auth__prev-page {
			top: 34px;
			left: 6px;
		}
	}

	@media only screen and (max-width: ${em(499.98)}) {
		.auth__inputs {
			height: 60px;
		}
		.auth__code {
			font-size: 25px;
		}
	}

	@media only screen and (max-width: ${em(424.98)}) {
		.auth__inputs {
			height: 40px;
			gap: 5px;
		}
		.auth__code {
			font-size: 20px;
			text-indent: 17px;
		}
	}

	@media only screen and (max-width: ${em(354.98)}) {
		.auth__code {
			text-indent: 13px;
		}
	}

	@media only screen and (max-width: ${em(424.98)}) {
		.auth__have-not-acc {
			flex-direction: column;
		}
	}
`;

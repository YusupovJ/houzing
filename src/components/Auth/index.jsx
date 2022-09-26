import React, { memo } from "react";
import { AuthStyle } from "./style";
import { ReactComponent as Prev } from "../../assets/svg/prev.svg";

/* Шаблон для регистарции и логина */

const Auth = (props) => {
	const navigateToPrevPage = (e) => {
		const prevPage = window.history;
		prevPage.back();
	};

	return (
		<AuthStyle className="auth" method="post">
			<div className="auth__container">
				<div className="auth__wrapper">
					<h1 className="auth__title">{props?.title}</h1>
					<div className="auth__body">{props?.children}</div>
					<button onClick={navigateToPrevPage} className="auth__prev-page">
						<Prev />
					</button>
				</div>
			</div>
		</AuthStyle>
	);
};

export default memo(Auth);

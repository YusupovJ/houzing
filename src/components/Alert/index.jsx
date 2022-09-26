import React, { memo, useEffect, useState } from "react";
import { AlertStyle } from "./style";

/* Компонент всплывающего окна */

import { ReactComponent as Success } from "../../assets/svg/success.svg";
import { ReactComponent as Error } from "../../assets/svg/error.svg";
import { ReactComponent as Warning } from "../../assets/svg/warning.svg";
import { ReactComponent as X } from "../../assets/svg/x.svg";

const Alert = ({ type, children }) => {
	const [closing, setClosing] = useState(false);

	const closeAlert = () => {
		setClosing(true);
	};

	useEffect(() => {
		setTimeout(() => {
			closeAlert();
		}, 3500);
	}, []);

	return (
		<AlertStyle type={type} className={`alert ${closing ? "closing" : ""} ${type}`}>
			<div className="alert__icon">
				{type === "error" ? <Error/> : type === "warning" ? <Warning/> : <Success/>}
			</div>
			<p className="alert__text">{children}</p>
			<div className="alert__close" onClick={closeAlert}>
				<div className="alert__close-icon">
					<X/>
				</div>
			</div>
		</AlertStyle>
	);
};

export default memo(Alert);

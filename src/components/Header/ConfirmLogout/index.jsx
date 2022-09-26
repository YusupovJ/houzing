import React, { memo, useState } from "react";
import { ConfirmLogoutStyle } from "./style";
import Button from "../../Button";

const ConfirmLogout = ({ setModalWindow, logout }) => {
	const [closing, setClosing] = useState(false);

	const closeModalWindow = () => {
		setClosing(true);
		setTimeout(() => {
			setModalWindow(false);
			setClosing(false);
		}, 300);
	};

	const closeOnClickOut = (e) => {
		if (e.target.closest(".confirm-logout") === e.target) {
			closeModalWindow();
		}
	};

	const confirmClass = `confirm-logout${closing ? " closing" : ""}`;

	return (
		<ConfirmLogoutStyle onClick={closeOnClickOut} className={confirmClass}>
			<div className="confirm-logout__wrapper">
				<p className="confirm-logout__text">
					Are you sure you want to log out <br /> of your account?
				</p>
				<div className="confirm-logout__buttons">
					<Button onClick={logout} type="secondary">
						<p>Yes</p>
					</Button>
					<Button onClick={closeModalWindow} type="secondary">
						<p>No</p>
					</Button>
				</div>
			</div>
		</ConfirmLogoutStyle>
	);
};

export default memo(ConfirmLogout);

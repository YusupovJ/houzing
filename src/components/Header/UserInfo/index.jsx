import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserInfoStyle } from "./style";

import { ReactComponent as Arrow } from "../../../assets/svg/arrow.svg";
import { ReactComponent as Logout } from "../../../assets/svg/logout.svg";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import ConfirmLogout from "../ConfirmLogout";
import { bodyToggle } from "../../../helpers/functions/functions";

/* Дополнительная информация о пользователе */

const UserInfo = ({ popover, logout }) => {
	const [modalWindow, setModalWindow] = useState(false);
	const [userData, setUserData] = useState({
		authorities: [{ name: null }],
	});
	const token = JSON.parse(localStorage.getItem("login")).authenticationToken;

	useEffect(() => {
		const request = fetch(`https://houzing-app.herokuapp.com/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((res) => res.json());

		request.then((res) => {
			setUserData(res || {});
		});
	}, [token]);

	const confirmLogout = () => {
		setModalWindow(!modalWindow);
	};

	useEffect(() => {
		bodyToggle(modalWindow);
	}, [modalWindow]);

	return (
		<UserInfoStyle className="header__user-info user-info">
			<div className="user-info__button">
				<div className="user-info__ava">{<User />}</div>
				<Arrow className={`${popover ? "open" : ""}`} />
			</div>
			<div className={`user-info__popover ${popover ? "open" : ""}`}>
				<div className="user-info__wrapper">
					<h3 className="user-info__name">{userData?.authorities[0]?.name}</h3>
					<hr />
					<Link className="user-info__link" to={"/favourite"}>
						Favourite
					</Link>
					<Link className="user-info__link" to={"/my-properties?page=1"}>
						My properties
					</Link>
					<Link className="user-info__link" to={"/add-property"}>
						Add new property
					</Link>
					<hr />
					<button onClick={confirmLogout} className="user-info__logout">
						<Logout />
						<p>Logout</p>
					</button>
				</div>
			</div>
			{modalWindow && <ConfirmLogout logout={logout} setModalWindow={setModalWindow} />}
		</UserInfoStyle>
	);
};

export default memo(UserInfo);

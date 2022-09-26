import React, { memo, useState, useRef } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { HeaderStyle } from "./style";

/*------------------------------------*/

import { ReactComponent as Login } from "../../assets/svg/login.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

/*------------------------------------*/

import { navbar } from "../../helpers/utils/navbar";
import Button from "../Button";
import UserInfo from "./UserInfo";

const URL = process.env.REACT_APP_PUBLIC_URL;

const Header = () => {
	const header = useRef();

	const navigate = useNavigate();
	const location = useLocation();

	const [burger, setBurger] = useState(false);
	const [popover, setPopover] = useState(false);

	const userInfo = JSON.parse(localStorage.getItem("login")) || {};

	/*------------------------------------*/

	/* 
        Если высота устройства меньше 768px, а ширина больше 768px,
	    то если меню будет открыто в вертикальном положении и пользователь перевернет
	    телефон на горизонтальное положение, то у body останется класс lock
    */
	if (document.documentElement.clientWidth > 768 && burger) {
		setBurger(false);
		document.body.classList.remove("lock");
	}

	/*------------------------------------*/

	const closeBurgerOnRedirect = () => {
		setBurger(false);
		document.body.classList.remove("lock");
	};

	const toggleBurger = () => {
		setBurger(!burger);
		if (burger === true) document.body.classList.remove("lock");
		else document.body.classList.add("lock");
	};

	/*------------------------------------*/

	const togglePopover = (e) => {
		if (e.target.closest(".user-info__button")) {
			setPopover(!popover);
		} else if (!e.target.closest(".user-info__button")) {
			setPopover(false);
		}
	};

	document.body.addEventListener("click", togglePopover);

	/*------------------------------------*/

	const logout = async () => {
		await fetch(`${URL}/public/logout`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				refreshToken: userInfo?.refreshToken,
				username: userInfo?.username,
			}),
		});

		localStorage.setItem(
			"login",
			JSON.stringify({
				username: userInfo?.username,
				checked: userInfo?.checked || false,
			}),
		);

		window.location.href = location.pathname;
	};

	return (
		<HeaderStyle ref={header} className="header">
			<div className="header__container">
				<Link onClick={closeBurgerOnRedirect} to="/" className="header__logo">
					<Logo/>
					<p>Houzing</p>
				</Link>
				<nav className={`header__navigator ${burger === true ? "toggled" : "unToggled"}`}>
					<div className="header__nav-body">
						{navbar.map((link) => {
							return (
								<NavLink
									onClick={closeBurgerOnRedirect}
									className="header__link"
									key={link.id}
									to={link.path}
								>
									{link.text}
								</NavLink>
							);
						})}
					</div>
					<div
						onClick={toggleBurger}
						className={`header__burger ${burger === true ? "toggled" : "unToggled"}`}
					>
						<div></div>
					</div>
				</nav>

				{/* Если пользователь вошел в аккаунт, то показываем его информацию, иначе кнопку Login */}

				{userInfo?.authenticationToken ? (
					<UserInfo setPopover={setPopover} popover={popover} logout={logout}/>
				) : (
					<Button onClick={() => navigate("/login")} className="header__login">
						<p>Login</p>
						<Login className="header__login-icon"/>
					</Button>
				)}
			</div>
		</HeaderStyle>
	);
};

export default memo(Header);

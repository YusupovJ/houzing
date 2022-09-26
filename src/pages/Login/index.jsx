import React, { memo, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserData, useShowAlert } from "../../helpers/functions/functions";
import Auth from "../../components/Auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ToBegin from "../../components/ToBegin";
import Checkbox from "../../components/Checkbox";

const URL = process.env.REACT_APP_PUBLIC_URL;

const Login = () => {
	const navigate = useNavigate();

	// Реферал для галочки "сохранения почты"
	const checkRef = useRef();

	const showAlert = useShowAlert();
	const login = JSON.parse(localStorage.getItem("login"));

	// Данные с полей ввода
	const [userData, setUserData] = useState({
		email: login?.checked ? login?.username : "",
		password: "",
	});

	// Разрешение на отправку
	const [access, setAccess] = useState({
		email: true,
		password: true,
	});

	/*------------------------------------*/

	// Валидация
	const validate = () => {
		let emailReg = /.+@.+\.\w+/;

		let emailCondition = emailReg.test(userData.email);
		let passwordCondition = userData.password.length > 0;

		return { emailCondition, passwordCondition };
	};

	/* ------------------------------------ */

	// Если уже вошли в аккаунт, выкидываем на главную страницу
	useEffect(() => {
		if (login?.authenticationToken) {
			navigate("/");
		}
	});

	/*------------------------------------*/

	const loginHandler = async () => {
		if (validate().emailCondition && validate().passwordCondition) {
			try {
				const request = await fetch(`${URL}/public/auth/login`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(userData),
				});
				statusHandler(request);

				const response = await request.json();
				saveToLocalStorage(response, checkRef);
				showAlert("success", `You have successfully logged`);
			} catch (error) {
				showAlert("error", error.toString());
			}
		} else {
			setAccess({
				email: validate().emailCondition,
				password: validate().passwordCondition,
			});
		}
	};

	function saveToLocalStorage(response, checkRef = {}) {
		const saved = Object.assign({}, response, { checked: true });
		localStorage.setItem("login", JSON.stringify(checkRef?.current?.checked ? saved : response));
	}

	// Проверка на ошибку
	function statusHandler(request) {
		if (request.status >= 500) {
			throw new Error(`${request.status}: Internal server error`);
		} else if (request.status === 401) {
			throw new Error(`Password or login entered incorrectly`);
		}
	}

	/*------------------------------------*/

	return (
		<ToBegin>
			<Auth title="Sign in">
				<Input
					type="email"
					placeholder="Email"
					err={!access.email}
					id="email"
					className={`auth__input`}
					defaultValue={login?.checked ? login?.username : ""}
					onBlur={(e) => {
						getUserData(e, userData, setUserData);
						setAccess({ email: true, password: access.email });
					}}
				/>
				<Input
					type="text"
					id="password"
					err={!access.password}
					className={`auth__input auth__input_password`}
					placeholder="Password"
					onBlur={(e) => {
						getUserData(e, userData, setUserData);
						setAccess({ email: access.email, password: true });
					}}
				/>
				<div className="auth__action">
					<Checkbox id="remember" ref={checkRef} className="auth__remember">
						Remember me
					</Checkbox>
					<Link to="/forgot-pass/send-key" className="auth__link">Forgot</Link>
				</div>
				<Button onClick={loginHandler} type="primary" className="auth__button">
					<p>Login</p>
				</Button>
				<div className="auth__have-not-acc">
					<p>Don't have an account?</p>
					<Link to="/register" className="auth__link">
						Register
					</Link>
				</div>
			</Auth>
		</ToBegin>
	);
};

export default memo(Login);

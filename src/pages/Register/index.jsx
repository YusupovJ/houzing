import React, { memo, useState } from "react";
import { useNavigate } from "react-router";
import Auth from "../../components/Auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ToBegin from "../../components/ToBegin";
import { getUserData, useShowAlert } from "../../helpers/functions/functions";

const URL = process.env.REACT_APP_PUBLIC_URL;

const Register = () => {
	const showAlert = useShowAlert();
	const navigate = useNavigate();

	const [userData, setUserData] = useState({
		email: "",
		firstname: "",
		lastname: "",
		password: "",
		reEnterPassword: "",
		roleIdSet: [0],
	});

	const [access, setAccess] = useState({
		firstName: true,
		lastName: true,
		email: true,
		password: true,
		reEnterPassword: true,
	});

	/* ------------------------------------ */

	// Валидация
	const validate = () => {
		let emailReg = /.+@.+\.\w+/;

		let emailCondition = emailReg.test(userData.email);
		let passwordCondition = userData.password.length > 5;
		let firstNameCondition = userData.firstname.length > 0;
		let lastNameCondition = userData.lastname.length > 0;
		let reEnterPasswordCondition =
			userData.password === userData.reEnterPassword && userData.reEnterPassword.length > 0 && passwordCondition;

		return {
			emailCondition,
			passwordCondition,
			firstNameCondition,
			lastNameCondition,
			reEnterPasswordCondition,
			status:
				emailCondition &&
				passwordCondition &&
				firstNameCondition &&
				lastNameCondition &&
				reEnterPasswordCondition,
		};
	};

	/* ------------------------------------ */

	// Получаем токен
	const login = async (email, password) => {
		const body = JSON.stringify({ email, password });

		const request = await fetch(`${URL}/public/auth/login`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body,
		});

		const response = await request.json();

		if (request.ok) {
			showAlert("success", "You have successfully registered!");
			return response;
		} else {
			showAlert("error", response.error);
		}
	};

	const accVerification = async (token) => {
		const request = await fetch(`${URL}/public/verification/${token}`);
		return request.status;
	};

	const registerHandler = async () => {
		if (validate().status) {
			const body = Object.assign({}, userData);
			delete body.reEnterPassword;

			try {
				const request = await fetch(`${URL}/public/auth/register`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(body),
				});

				if (request.ok) {
					const response = await request.text();
					const verification = await accVerification(response);

					if (verification) {
						const response = await login(body.email, body.password);

						localStorage.setItem("login", JSON.stringify(response));
						navigate("/");
						showAlert("success", "You have succecfully registered!");
					} else {
						throw new Error("Verification failed!");
					}
				} else {
					const error = await request.json();
					throw new Error(error.message);
				}
			} catch (error) {
				showAlert("error", error.message);
			}
		} else {
			setAccess({
				firstName: validate().firstNameCondition,
				lastName: validate().lastNameCondition,
				email: validate().emailCondition,
				password: validate().passwordCondition,
				reEnterPassword: validate().reEnterPasswordCondition,
			});
		}
	};

	return (
		<ToBegin>
			<Auth title="Registration">
				<Input
					err={!access.firstName}
					id="firstname"
					type="text"
					placeholder="First name"
					className={`auth__input`}
					onBlur={(e) => {
						getUserData(e, userData, setUserData);
						setAccess({ ...access, firstName: true });
					}}
				/>
				<Input
					err={!access.lastName}
					id="lastname"
					type="text"
					placeholder="Last name"
					className={`auth__input`}
					onBlur={(e) => {
						getUserData(e, userData, setUserData);
						setAccess({ ...access, lastName: true });
					}}
				/>
				<Input
					err={!access.email}
					id="email"
					type="email"
					placeholder="Email"
					className={`auth__input`}
					onBlur={(e) => {
						getUserData(e, userData, setUserData);
						setAccess({ ...access, email: true });
					}}
				/>
				<Input
					id="password"
					type="text"
					className={`auth__input auth__input_password`}
					placeholder="Password"
					err={!access.password}
					onBlur={(e) => {
						getUserData(e, userData, setUserData);
						setAccess({ ...access, password: true });
					}}
				/>
				<Input
					id="reEnterPassword"
					type="text"
					className={`auth__input auth__input_password`}
					placeholder="Re-enter Password"
					err={!access.reEnterPassword}
					onBlur={(e) => {
						getUserData(e, userData, setUserData);
						setAccess({ ...access, reEnterPassword: true });
					}}
				/>
				<Button onClick={registerHandler} type="primary" className="auth__button">
					<p>Register</p>
				</Button>
			</Auth>
		</ToBegin>
	);
};

export default memo(Register);

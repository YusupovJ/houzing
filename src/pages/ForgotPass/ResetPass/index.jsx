import React, { useContext, useEffect, useState } from "react";
import Auth from "../../../components/Auth";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Global } from "../../../helpers/context/store";
import { useShowAlert } from "../../../helpers/functions/functions";
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_PUBLIC_URL;

const ResetPass = () => {
	const [newPass, setNewPass] = useState("");
	const { resetPass } = useContext(Global);
	const [err, setErr] = useState({
		newPass: false,
		reenterPass: false,
	});
	const showAlert = useShowAlert();
	const navigate = useNavigate();

	const validate = (e) => {
		const reenterPass = e.target.previousElementSibling.children[0];

		const newPassCondition = newPass.length > 5;
		const reenterPassCondition = reenterPass.value === newPass && reenterPass.value !== "";

		return {
			newPassCondition,
			status: reenterPassCondition && newPassCondition,
		};
	};

	const changePass = async (e) => {
		if (validate(e).status) {
			try {
				const requestUrl = `${URL}/public/reset-password?password=${newPass}&token=${resetPass.token}`;

				const request = await fetch(requestUrl, {
					method: "PUT",
					headers: {
						"Content-type": "application/json",
					},
				});
				const response = await request.json();

				if (request.ok) {
					showAlert("success", response.message);
					navigate("/login");
				} else {
					throw new Error(response.error);
				}
			} catch (err) {
				showAlert("error", err.message);
			}
		} else {
			setErr({
				newPass: !validate(e).newPassCondition,
				reenterPass: !validate(e).status,
			});
		}
	};

	useEffect(() => {
		if (!resetPass.token && !resetPass.key) {
			navigate("/login");
		}
	}, []);

	return (
		<Auth title="New password">
			<p className="auth__info">Enter a new password</p>
			<Input
				type="text"
				placeholder="New password"
				value={newPass}
				onChange={(e) => setNewPass(e.target.value)}
				id="password"
				err={err.newPass}
				className="auth__input auth__input_password"
			/>
			<Input
				type="text"
				placeholder="Reenter password"
				id="reenter-password"
				err={err.reenterPass}
				className="auth__input auth__input_password"
			/>
			<Button type="primary" onClick={changePass} className="auth__next-button">
				<p>Change</p>
			</Button>
		</Auth>
	);
};

export default ResetPass;
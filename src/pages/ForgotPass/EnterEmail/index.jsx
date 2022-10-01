import React, { memo, useContext, useState } from "react";
import { useShowAlert } from "../../../helpers/functions/functions";
import ToBegin from "../../../components/ToBegin";
import Auth from "../../../components/Auth";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { Global } from "../../../helpers/context/store";

const TEMPLATE_ID = "template_cv0avo8";
const URL_EMAIL_JS = "https://api.emailjs.com/api/v1.0/email/send";
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const PUBLIC_ID = process.env.REACT_APP_PUBLIC_ID;
const URL = process.env.REACT_APP_PUBLIC_URL;

const EnterEmail = () => {
	const [email, setEmail] = useState("");
	const [err, setErr] = useState(false);
	const [status, setStatus] = useState("");
	const showAlert = useShowAlert();
	const navigate = useNavigate();
	const { setResetPass } = useContext(Global);

	const generateKey = () => {
		let key = (Math.random() * 100_000_000).toString().slice(0, 6);
		return key;
	};

	const validate = () => /.+@.+\.\w+/.test(email);

	const getToken = async () => {
		const request = await fetch(`${URL}/public/forgot-password?email=${email}`, {
			headers: {
				"Content-type": "application/json",
			},
			method: "POST",
		});

		const response = await request.json();

		return response.message;
	};

	const sendKey = async () => {
		if (validate()) {
			setErr(false);
			const key = generateKey();
			try {
				setStatus(true);

				const request = await fetch(URL_EMAIL_JS, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify({
						service_id: SERVICE_ID,
						template_id: TEMPLATE_ID,
						user_id: PUBLIC_ID,
						template_params: { email, key },
					}),
				});

				if (!request.ok) {
					throw new Error(`Erorr ${request.status}: ${request.statusText}`);
				} else {
					const token = await getToken();
					setResetPass({
						key,
						token,
						navigate() {
							navigate("/forgot-pass/reset-pass");
						},
					});
					setStatus(false);
					navigate(`/forgot-pass/verificate`);
				}
			} catch (err) {
				showAlert("error", err.message);
			}
		} else {
			setErr(true);
		}
	};

	return (
		<ToBegin>
			<Auth title="Write your email">
				<p className="auth__info">Enter the email you want to recover</p>
				<Input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					value={email}
					placeholder="Email"
					id="email"
					err={err}
					className="auth__input"
				/>
				<Button status={status} onClick={sendKey} type="primary" className="auth__next-button">
					<p>Next</p>
				</Button>
			</Auth>
		</ToBegin>
	);
};

export default memo(EnterEmail);

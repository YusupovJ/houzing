import React, { memo, useState } from "react";
import { useShowAlert } from "../../helpers/functions/functions";
import Button from "../Button";
import Input from "../Input";
// import { SendEmailStyle } from "./style";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_ID = process.env.REACT_APP_PUBLIC_ID;
const URL = "https://api.emailjs.com/api/v1.0/email/send";

const SendMessage = ({ user }) => {
	const showAlert = useShowAlert();

	const [emailData, setEmailData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [success, setSuccess] = useState({
		name: true,
		email: true,
		message: true,
	});

	/* ------------------------------------ */

	const changeEmailData = (e) => {
		setEmailData({
			...emailData,
			[e.target.id]: e.target.value,
		});
	};

	/* ------------------------------------ */

	const validate = () => {
		const { name, email, message } = emailData;

		let emailReg = /.+@.+\.\w+/;

		const nameCondition = name.length > 0;
		const emailCondition = emailReg.test(email);
		const messageCondition = message.length > 0;

		return {
			nameCondition,
			emailCondition,
			messageCondition,
			status: nameCondition && emailCondition && messageCondition,
		};
	};

	/* ------------------------------------ */

	// Отправляем сообщение на email
	const submit = async (e) => {
		e.preventDefault();

		if (validate().status) {
			try {
				const request = await fetch(URL, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify({
						service_id: SERVICE_ID,
						template_id: TEMPLATE_ID,
						user_id: PUBLIC_ID,
						template_params: { ...emailData, send_to: user },
					}),
				});

				if (!request.ok) {
					throw new Error(`Erorr ${request.status}: ${request.statusText}`);
				} else {
					showAlert("success", "Message sended succesfully!");
				}
			} catch (err) {
				showAlert("error", err.message);
			}
		} else {
			setSuccess({
				name: validate().nameCondition,
				email: validate().emailCondition,
				message: validate().messageCondition,
			});
		}
	};
	return (
		<form onSubmit={submit} className="email__form" action="#">
			<div className="email__inputs">
				<Input
					err={!success.name}
					type="text"
					id="name"
					className="email__input"
					placeholder="Name"
					onChange={changeEmailData}
					onBlur={() =>
						setSuccess({
							...success,
							name: true,
						})
					}
				/>
				<Input
					err={!success.email}
					type="text"
					id="email"
					className="email__input"
					placeholder="Email"
					onChange={changeEmailData}
					onBlur={() =>
						setSuccess({
							...success,
							email: true,
						})
					}
				/>
				<Input
					err={!success.message}
					placeholder="Message"
					textArea={true}
					onChange={changeEmailData}
					id="message"
					className="email__input email__input_textarea"
					onBlur={() =>
						setSuccess({
							...success,
							message: true,
						})
					}
				/>
			</div>
			<Button className="email__button" type="primary">
				<p>Send request</p>
			</Button>
		</form>
	);
};

export default memo(SendMessage);

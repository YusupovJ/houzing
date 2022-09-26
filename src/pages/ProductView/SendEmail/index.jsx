import React, { memo, useEffect, useRef, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { SendEmailStyle, OpenModalWindow } from "./style";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import { useMatchMedia, useShowAlert, bodyToggle } from "../../../helpers/functions/functions";
import { ReactComponent as Message } from "../../../assets/svg/message.svg";
import { ReactComponent as X } from "../../../assets/svg/x.svg";
import Skeleton from "react-loading-skeleton";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_ID = process.env.REACT_APP_PUBLIC_ID;
const URL = "https://api.emailjs.com/api/v1.0/email/send";

/* Компонент для отправки сообщения на почту */

const SendEmail = ({ user }) => {
	const emailRef = useRef();
	const showAlert = useShowAlert();
	const media992 = useMatchMedia(991.98);

	const [emailVisible, setEmailVisible] = useState(false);
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
			send_to: user?.email,
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
						template_params: emailData,
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

	/* ------------------------------------ */

	const toggleEmailVisible = () => {
		setEmailVisible(!emailVisible);
	};

	// Даём паддинги body когда скрываем скролл, чтобы контент не двигался
	useEffect(() => {
		bodyToggle(emailVisible);
	}, [emailVisible]);

	return (
		<>
			<OpenModalWindow onClick={toggleEmailVisible} className="email__show-form-btn">
				<Message />
			</OpenModalWindow>

			<SendEmailStyle ref={emailRef} className={`email${emailVisible ? " open" : ""}`}>
				<div className="email-wrapper">
					{!media992 && <X onClick={toggleEmailVisible} className="email__close-modal-window" />}
					<div className="email__user">
						{user !== "pending"
							? <>
								<div className="email__user-ava">
									<User />
								</div>
								<div className="email__user-name">
									{user?.firstname || "Null"} <br /> {user?.lastname}
								</div>
							</>
							: <>
								<Skeleton circle width={56} height={56} />
								<div style={{ marginLeft: 8 }}>
									<Skeleton width={80} />
									<Skeleton width={120} />
								</div>
							</>
						}
					</div>
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
								className="email__input"
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
				</div>
			</SendEmailStyle>
		</>
	);
};

export default memo(SendEmail);

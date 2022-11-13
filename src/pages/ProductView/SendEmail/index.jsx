import React, { memo, useEffect, useRef, useState } from "react";
import { SendEmailStyle, OpenModalWindow } from "./style";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import { useMatchMedia, bodyToggle } from "../../../helpers/functions/functions";
import { ReactComponent as Message } from "../../../assets/svg/message.svg";
import { ReactComponent as X } from "../../../assets/svg/x.svg";
import Skeleton from "react-loading-skeleton";
import SendMessage from "../../../components/SendMessage";

/* Компонент для отправки сообщения на почту */

const SendEmail = ({ user }) => {
	const media992 = useMatchMedia(991.98);
	const emailRef = useRef();
	const [emailVisible, setEmailVisible] = useState(false);

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
						{user !== "pending" ? (
							<>
								<div className="email__user-ava">
									<User />
								</div>
								<div className="email__user-name">
									{user?.firstname || "Null"} <br /> {user?.lastname}
								</div>
							</>
						) : (
							<>
								<Skeleton circle width={56} height={56} />
								<div style={{ marginLeft: 8 }}>
									<Skeleton width={80} />
									<Skeleton width={120} />
								</div>
							</>
						)}
					</div>
					<SendMessage user={user.email} />
				</div>
			</SendEmailStyle>
		</>
	);
};

export default memo(SendEmail);

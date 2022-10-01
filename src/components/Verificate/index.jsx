import React, { memo, useEffect, useState } from "react";
import Auth from "../Auth";
import Button from "../Button";
import ToBegin from "../ToBegin";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import { useShowAlert } from "../../helpers/functions/functions";

const Verificate = ({ access, action }) => {
	const [key, setKey] = useState("");
	const [attempts, setAttempts] = useState(0);
	const navigate = useNavigate();
	const showAlert = useShowAlert();

	const verificate = () => {
		if (access?.key === key) {
			action();
		} else {
			showAlert("error", "Key entered incorrectly");
			setAttempts((attempts) => attempts + 1);
		}
	};

	useEffect(() => {
		if (attempts > 5) {
			navigate("/");
			showAlert("warning", "Too many tries!");
		}
	}, [attempts, showAlert, navigate]);

	return (
		<ToBegin>
			<Auth title="Please enter a key">
				<p className="auth__info">We sent you a message by email, please enter the key</p>
				<Input
					className="auth__input"
					type="number"
					id="key"
					placeholder="Verification key"
					onChange={(e) => setKey(e.target.value)}
				/>
				<Button onClick={verificate} type="primary" className="auth__next-button">
					<p>Next</p>
				</Button>
			</Auth>
		</ToBegin>
	);
};

export default memo(Verificate);

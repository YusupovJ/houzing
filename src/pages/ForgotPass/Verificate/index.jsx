import React, { useContext, useEffect, useRef, useState } from "react";
import Auth from "../../../components/Auth";
import Button from "../../../components/Button";
import ToBegin from "../../../components/ToBegin";
import { Global } from "../../../helpers/context/store";
import { useNavigate } from "react-router-dom";
import { useShowAlert } from "../../../helpers/functions/functions";

// Это просто для map
const count = [0, 0, 0, 0, 0, 0];

const Verificate = () => {
	const [key, setKey] = useState([]);
	const [attempts, setAttempts] = useState(0);
	const { resetPass } = useContext(Global);
	const inputRef = useRef();
	const navigate = useNavigate();
	const showAlert = useShowAlert();

	const handleChange = (e, index) => {
		// Всегда один символ
		e.target.value = e.nativeEvent.data || null;

		// Меняем элемент массива по нужному индексу
		key[index] = e.nativeEvent.data || 0;
		setKey(key);

		const siblings = e.target.closest(".auth__inputs").children;

		// Управляем фокусом при вводе
		if (e.target.value === "" && index !== 0) {
			siblings[index - 1].children[0].focus();
		} else if (e.target.value !== "" && index !== siblings.length - 1) {
			siblings[index + 1].children[0].focus();
		}
	};

	// При входе фокусируемся на первом инпуте
	useEffect(() => {
		inputRef.current.closest(".auth__inputs").children[0].children[0].focus();
	}, []);

	const verificate = () => {
		if (resetPass.key === key.join("")) {
			navigate("/forgot-pass/reset-pass");
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
				<div className="auth__inputs">
					{count.map((input, index) => {
						return (
							<div key={index} className="auth__key">
								<input
									ref={inputRef}
									tabIndex={index + 1}
									type="number"
									onChange={(e) => handleChange(e, index)}
								/>
								<span className="auth__key-pipe"></span>
							</div>
						);
					})}
				</div>
				<Button onClick={verificate} type="primary" className="auth__next-button">
					<p>Next</p>
				</Button>
			</Auth>
		</ToBegin>
	);
};

export default Verificate;
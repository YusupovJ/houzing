import React, { useEffect, useRef, useState, memo } from "react";
import { useCallback } from "react";
import { InputStyle } from "./style";

const Input = (props) => {
	const [correctToSlide, setCorrectToSlide] = useState(false);
	const [inputValue, setInputValue] = useState(props.value || "");
	const inputRef = useRef();

	useEffect(() => {
		new Promise((resolve) => {
			if (props.status) {
				resolve();
			}
		}).then(() => {
			setInputValue(props.value || "");
		});
	}, [props]);

	const slideUpPlaceholder = useCallback((e) => {
		if (e.target.value) {
			setCorrectToSlide(true);
		} else {
			setCorrectToSlide(false);
		}
	}, []);

	const changeHandler = useCallback(
		(e) => {
			e.preventDefault();

			console.log("render");

			slideUpPlaceholder(e);
			setInputValue(e.target.value);

			if (props?.onChange) {
				props?.onChange(e);
			}
		},
		[props, slideUpPlaceholder]
	);

	// Поднимаем вверх label и убираем ошибки, если есть внутри данные
	useEffect(() => {
		if (inputValue) {
			setCorrectToSlide(true);

			// Если у инпута нет id "email", тогда убираем, а то когда юзер введет неправильно email,
			// тогда красная линия не появится, потому что в инпуте есть данные
			if (inputRef?.current?.id !== "email" && inputRef?.current?.id !== "password") {
				inputRef?.current?.classList.remove("input__field_err");
			}
		}
	}, [setCorrectToSlide, changeHandler, inputValue]);

	return (
		<InputStyle textArea={props?.textArea} className={`${props?.className} input${correctToSlide ? " focus" : ""}`}>
			{props?.textArea ? (
				<textarea
					name={props?.name}
					id={props?.id}
					ref={inputRef}
					maxLength={props?.max}
					onBlur={props?.onBlur}
					onChange={changeHandler}
					value={inputValue}
					required={props?.required}
					className={`input__field input__field_textarea${props?.err ? " input__field_err" : ""}`}
				></textarea>
			) : (
				<input
					value={inputValue}
					ref={inputRef}
					onChange={changeHandler}
					autoComplete="off"
					id={props?.id}
					type={props?.type}
					disabled={props?.disabled}
					tabIndex={props?.tabIndex}
					required={props?.required}
					onBlur={props?.onBlur}
					name={props?.name}
					className={`input__field${props?.err ? " input__field_err" : ""}`}
				/>
			)}
			<label htmlFor={props?.id} className="input__placeholder">
				{props?.placeholder}
			</label>
		</InputStyle>
	);
};

export default memo(Input);

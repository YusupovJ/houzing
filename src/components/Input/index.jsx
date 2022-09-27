import React, { useEffect, useRef, useState, memo } from "react";
import { useCallback } from "react";
import { InputStyle } from "./style";

const Input = (props) => {
	const [correctToSlide, setCorrectToSlide] = useState(false);
	const [inputValue, setInputValue] = useState(props.value || "");
	const inputRef = useRef();

	useEffect(() => {
		setInputValue(props.value || "");
	}, [props.value]);

	const slideUpPlaceholder = useCallback((e) => {
		if (e.target.value) {
			return setCorrectToSlide(true);
		}

		setCorrectToSlide(false);
	}, []);

	const setLimit = useCallback(
		(e) => {
			if (+e.target.value < props.min || +e.target.value > props.max) {
				e.target.classList.add("input__field_err");
			} else {
				e.target.classList.remove("input__field_err");
			}
		},
		[props.max, props.min]
	);

	const changeHandler = useCallback(
		(e) => {
			e.preventDefault();

			slideUpPlaceholder(e);
			setInputValue(e.target.value);
			e.target.classList.remove("input__field_err");

			if (props.max || props.min) {
				setLimit(e);
			}

			if (props?.onChange) {
				props?.onChange(e);
			}
		},
		[props, slideUpPlaceholder, setLimit]
	);

	// Поднимаем вверх label, если есть внутри данные
	useEffect(() => {
		if (inputValue) {
			setCorrectToSlide(true);
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

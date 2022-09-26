import React, { memo, useState } from "react";
import { SelectStyle } from "./style";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

/* Компонент селекта */

const Select = (props) => {
	const [selectOpened, setSelectOpened] = useState(false);
	const [selectValue, setSelectValue] = useState("");

	const toggleSelect = () => {
		setSelectOpened(!selectOpened);
	};

	// При выборе option
	const selectValueHandler = (title, id) => {
		setSelectValue(title);
		props.changeHouseInfo("categoryId", id);
	};

	return (
		<SelectStyle className={`${props.className} select${selectOpened ? " open" : ""}`} onClick={toggleSelect}>
			<p className={`select__text${selectValue || props.defaultValue ? " focus" : ""}`}>
				{selectValue || props.defaultValue}
				<span>{props.placeholder}</span>
			</p>
			<Arrow className="select__arrow" />
			<div className="select__options">
				{props.options.map((option) => (
					<div
						className="select__option"
						key={option.id}
						onClick={() => selectValueHandler(option.name, option.id)}
					>
						{option.name}
					</div>
				))}
			</div>
		</SelectStyle>
	);
};

export default memo(Select);

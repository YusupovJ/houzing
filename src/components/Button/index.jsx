import React, { memo } from "react";
import { ButtonStyle } from "./style";

/* Это шаблон для трех типов кнопок */

const Button = (props) => {
	return (
		<ButtonStyle
			className={`${props.className} ${props.status ? "pending" : ""}`}
			onClick={props.onClick}
			type={props.type}
		>
			{props.children}
		</ButtonStyle>
	);
};

export default memo(Button);

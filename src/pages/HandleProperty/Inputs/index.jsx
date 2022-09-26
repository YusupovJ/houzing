import React, { memo } from "react";
import { InputsStyle } from "./style";

/* Компонент с блоком полей ввода */

const Inputs = (props) => {
	return (
		<InputsStyle className={`add-property__inputs inputs`}>
			<h2 className="inputs__title">{props.title}</h2>
			<div className="inputs__row">{props.children}</div>
		</InputsStyle>
	);
};

export default memo(Inputs);

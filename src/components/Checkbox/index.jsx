import React, { forwardRef, memo } from "react";
import { CheckboxStyle } from "./style";

/* Компонент галочки */

const Checkbox = memo(forwardRef((props, ref) => {
	return (
		<CheckboxStyle className={`${props.className} checkbox`}>
			<input ref={ref} onChange={props?.onChange} type="checkbox" className="checkbox__field" id={props.id}/>
			<label htmlFor={props.id} className="checkbox__label">
				{props.children}
			</label>
		</CheckboxStyle>
	);
}));

export default Checkbox;

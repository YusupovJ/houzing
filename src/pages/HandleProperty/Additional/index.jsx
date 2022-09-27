import React, { memo } from "react";
import Input from "../../../components/Input";
import Inputs from "../Inputs";
import { additional } from "../../../helpers/utils/additional";

/* Компонент для ввода дополнительной информации */

const Additional = (props) => {
	return (
		<Inputs title="Additional">
			{additional.map((additional) => {
				return (
					<Input
						onChange={(e) =>
							props.changeHouseInfo(additional.id, parseFloat(e.target.value), additional.parent)
						}
						type="number"
						required
						min={additional?.min}
						max={additional?.max}
						value={props.defaultAdditional[additional.id]}
						status={props.status}
						placeholder={additional.placeholder}
						id={additional.id}
						key={additional.id}
						className="inputs__input"
					/>
				);
			})}
		</Inputs>
	);
};

export default memo(Additional);

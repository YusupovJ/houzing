import React, { memo, useEffect, useState } from "react";
import Inputs from "../Inputs";
import Input from "../../../components/Input";
import Select from "../../../components/Select";

const URL = process.env.REACT_APP_PUBLIC_URL;

/* Компонент для указания контактной информации */

const Contact = (props) => {
	const [categories, setCategories] = useState([]);

	// Получаем массив категорий для отображения в select
	useEffect(() => {
		const request = fetch(`${URL}/v1/categories/list`).then((data) => data.json());

		request.then((categories) => {
			setCategories(categories.data || []);
		});
	}, []);

	return (
		<Inputs title="Contact information">
			<Input
				onChange={(e) => props.changeHouseInfo("name", e.target.value)}
				type="text"
				placeholder="Property title*"
				id="title"
				value={props.defaultContact.title}
				className="inputs__input"
				status={props.status}
				required
			/>
			<Select
				placeholder="Type*"
				id="type"
				options={categories}
				changeHouseInfo={props.changeHouseInfo}
				defaultValue={props.defaultContact.type}
				className="inputs__input"
				required
			/>
			<Input
				onChange={(e) => props.changeHouseInfo("description", e.target.value)}
				type="text"
				max={255}
				placeholder="Property Description*"
				id="desc"
				textArea
				value={props.defaultContact.description}
				status={props.status}
				className="inputs__input inputs__input_textarea"
				required
			/>
		</Inputs>
	);
};

export default memo(Contact);

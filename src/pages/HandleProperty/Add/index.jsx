import React, { memo, useState } from "react";
import Button from "../../../components/Button";
import { handleProperty, useShowAlert } from "../../../helpers/functions/functions";

const Add = ({ houseInfo }) => {
	const [status, setStatus] = useState("");
	const showAlert = useShowAlert();

	const submit = async () => {
		handleProperty("add", houseInfo, setStatus, showAlert);
	};

	return (
		<Button onClick={submit} status={status} className="add-property__button" type="primary">
			<p>Add</p>
		</Button>
	);
};

export default memo(Add);

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { handleProperty, useShowAlert } from "../../../helpers/functions/functions";

const Change = ({ houseInfo }) => {
	const [status, setStatus] = useState("");
	const showAlert = useShowAlert();
	const { id } = useParams();

	const submit = () => {
		handleProperty("change", houseInfo, setStatus, showAlert, id);
	};

	return (
		<Button status={status} onClick={submit} className="add-property__button" type="primary">
			<p>Change</p>
		</Button>
	);
};

export default Change;

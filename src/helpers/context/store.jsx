import React, { createContext, useState } from "react";

export const Global = createContext("context");

const GlobalContext = (props) => {
	const [alerts, setAlerts] = useState([]);
	const [resetPass, setResetPass] = useState({
		token: "",
		key: "",
	});
	const [registerVerif, setRegisterVerif] = useState({
		key: "",
	});

	return (
		<Global.Provider value={{ alerts, setAlerts, resetPass, setResetPass, registerVerif, setRegisterVerif }}>
			{props.children}
		</Global.Provider>
	);
};

export default GlobalContext;

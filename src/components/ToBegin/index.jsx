import { useEffect } from "react";

/* Компонент высшего порядка, чтобы при переходе на страницу оказываться наверху */

const ToBegin = ({ children }) => {
	useEffect(() => {
		document.documentElement.scrollTo({
			top: 0,
		});
	}, []);

	return children;
};

export default ToBegin;

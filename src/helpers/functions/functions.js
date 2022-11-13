import { useContext, useEffect, useRef, useState } from "react";
import { Global } from "../context/store";

/*------------------------------------*/

// Конвертация из px в rem em и %
export function rem(num) {
	return num / 16 + "rem";
}

export function em(num, fz = 16) {
	return num / fz + "em";
}

export function per(num, parent) {
	return (num * 100) / parent + "%";
}

/*------------------------------------*/

// Проверка на тачскрин
export let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	},
};

/*------------------------------------*/

// Медиа запросы
export const useMatchMedia = (width = 768) => {
	const [toggleChange, setToggleChange] = useState(false);
	const matchMediaRef = useRef(null);

	useEffect(() => {
		matchMediaRef.current = window.matchMedia(`(min-width: ${width}px)`);

		const initialMatch = matchMediaRef.current.matches;

		if (initialMatch) {
			setToggleChange(true);
		} else {
			setToggleChange(false);
		}

		const test = (event) => {
			if (event.matches) {
				setToggleChange(true);
			} else {
				setToggleChange(false);
			}
		};

		matchMediaRef.current.addListener(test);
		return () => {
			matchMediaRef.current.removeListener(test);
		};
	}, [width]);

	return toggleChange;
};

/* ------------------------------------ */

// Вызов алерта
export const useShowAlert = () => {
	const { alerts, setAlerts } = useContext(Global);

	return (type, text) => {
		setAlerts([
			...alerts,
			{
				type,
				text,
				id: Math.random() * 10000000000000 - Math.random() * 10000000000000,
			},
		]);
	};
};

/* ------------------------------------ */

// Скрываем полосу прокрутки и даем паддинги, чтобы контент не шатался
export const bodyToggle = (state) => {
	const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
	const headerContainer = document.querySelector(".header__container");
	const headerContainerMarginRight = window.getComputedStyle(headerContainer)["margin-right"];

	const bodyLock = () => {
		document.body.classList.add("lock");
		headerContainer.style.marginRight = `${parseFloat(headerContainerMarginRight) + scrollWidth}px`;
		document.body.style.marginRight = `${scrollWidth}px`;
	};

	const bodyUnlock = () => {
		document.body.classList.remove("lock");
		headerContainer.style.marginRight = `auto`;
		document.body.style.marginRight = `0px`;
	};

	if (state) return bodyLock();
	bodyUnlock();
};

/* ------------------------------------ */

// Получаем данные с инпутов для логина и авторизации
export const getUserData = (e, userData, setUserData) => {
	let userDataClone = Object.assign({}, userData);

	userDataClone[e.target.id] = e.target.value;
	setUserData(userDataClone);
};

/* ------------------------------------ */

// Хук для загрузки фотографий
export const useImgLoaded = () => {
	const [imgLoaded, setImgLoaded] = useState([]);

	const handleImgLoad = (id) => {
		setImgLoaded((imgLoaded) => [...imgLoaded, id]);
	};

	return [imgLoaded, handleImgLoad];
};

/* ------------------------------------ */

// Получение одного домика
export const getProperty = (id, setState) => {
	const token = JSON.parse(localStorage.getItem("login"))?.authenticationToken;
	const URL = process.env.REACT_APP_PUBLIC_URL;

	const request = fetch(`${URL}/v1/houses/id/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((res) => res.json());

	request.then((res) => {
		setState(res.data);
	});
};

/* ------------------------------------ */

// Проверяем, заполнил ли пользователь все поля
const checkInputs = () => {
	const inputs = [...document.querySelectorAll("[required],.input__field_err")];
	// Получаем не заполненные поля ввода
	const notFilled = inputs.filter((input) => !input.value || input.classList.contains("input__field_err"));

	// Если такие есть, то добавляем им класс
	if (notFilled.length) {
		notFilled.forEach((input) => {
			input.classList.add("input__field_err");
		});
	}

	return !notFilled.length;
};

// Проверяем на наличие картинок
const checkImages = (houseInfo) => {
	const imagesLength = houseInfo?.attachments?.length;
	const imageLabel = document.querySelector(".inputs__image_new");

	if (!imagesLength) {
		imageLabel.classList.add("err");
	}

	return !!imagesLength;
};

const URL = process.env.REACT_APP_PUBLIC_URL;

// Добавление или изменение дома
export const handleProperty = async (action, houseInfo, setStatus, showAlert, id) => {
	const inputsSuccess = checkInputs();
	const imagesSuccess = checkImages(houseInfo);
	const token = JSON.parse(localStorage.getItem("login"))?.authenticationToken;

	// Если заполнены все поля, то отправляем запрос
	if (inputsSuccess && imagesSuccess) {
		setStatus("pending");

		// Удаляем id у картинок
		const body = JSON.parse(JSON.stringify(houseInfo));
		body.attachments.forEach((image) => {
			delete image.id;
		});

		const request = await fetch(`${URL}/v1/houses/${action === "change" ? id : ""}`, {
			method: action === "change" ? "PUT" : "POST",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(body),
		});

		const response = await request.json();

		if (request.ok) {
			showAlert("success", action === "change" ? "House changed!" : "House added!");
		} else {
			showAlert("error", `Error ${response?.status}: ${response?.error}`);
		}

		setStatus("");
	} else {
		showAlert("warning", "Fill all fields");
	}
};

import React, { memo, useState } from "react";
import { FilterStyle } from "./style";
import Button from "../Button";
import { popoverData } from "../../helpers/utils/popoverData";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import { ReactComponent as Advanced } from "../../assets/svg/advanced.svg";

/* Это компонент фильтра */

const Filter = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [popover, setPopover] = useState(false);
	const [searchKeys, setSearchKeys] = useState({});

	/* -------------------------------- */

	// Очистка url после перезагрузки страницы
	window.onload = function () {
		let loaded = sessionStorage.getItem("loaded");
		if (loaded && window.location.pathname === "/properties") {
			reloaded();
		} else {
			sessionStorage.setItem("loaded", "true");
		}
	};

	const reloaded = () => {
		navigate(`/properties`);
	};

	/* -------------------------------- */

	// Открытие поповера
	const togglePopover = (e) => {
		if (e.target.closest(".filter__button")) {
			setPopover(!popover);
		} else if (e.target.closest(".popover") && !e.target.closest(".popover__button_cansel")) {
			setPopover(true);
		} else if (e.target.closest(".popover__button_cansel")) {
			setPopover(false);
		} else {
			setPopover(false);
		}
	};
	document.body.addEventListener("click", togglePopover);

	/* -------------------------------- */
	// Поиск

	// Формируем объект из name и value
	const getURLSearch = (e) => {
		const { value, name } = e.target;
		setSearchKeys({ ...searchKeys, [name]: value });
	};

	// Переводим в такую запись ?name=value&name2=value2
	const urlSearchToString = (obj) => {
		let urlString = "?";
		for (let key in obj) {
			if (obj[key] !== "") {
				urlString += `${key}=${obj[key]}&`;
			}
		}
		return urlString.slice(0, -1);
	};

	// Отправляем данные на сервер
	const submit = () => {
		if (location.pathname === "/") {
			navigate(`/properties${urlSearchToString(searchKeys)}`);
		} else {
			navigate(`${location.pathname}${urlSearchToString(searchKeys)}`);
		}
	};

	/* -------------------------------- */

	return (
		<FilterStyle className="filter">
			<div className="filter__container">
				<input
					type="text"
					className="filter__input"
					placeholder="Enter a name"
					name="house_name"
					onChange={getURLSearch}
					autoComplete="off"
					onKeyDown={(e) => {
						if (e.code === "Enter") {
							submit();
						}
					}}
				/>
				<div className="filter__advanced">
					<Button type="secondary" className="filter__button">
						<Advanced />
						<p>Advanced</p>
					</Button>
				</div>
				<Button type="primary" onClick={submit} className="filter__submit">
					<SearchIcon />
					<p>Search</p>
				</Button>
				<div className={`popover ${popover ? "open" : ""}`}>
					<div className="popover__body">
						{popoverData.map((item) => {
							return (
								<React.Fragment key={item.id}>
									<h3 className="popover__title">{item.title}</h3>
									<div className="popover__inputs">
										{item.inputs.map((input) => {
											return (
												<input
													type="text"
													key={input.id}
													autoComplete="off"
													name={input.name}
													onChange={getURLSearch}
													placeholder={input.placeholder}
													onKeyDown={(e) => {
														if (e.code === "Enter") {
															submit();
														}
													}}
												/>
											);
										})}
									</div>
								</React.Fragment>
							);
						})}
					</div>
					<div className="popover__buttons">
						<Button type="secondary" className="popover__button popover__button_cansel">
							<p>Cancel</p>
						</Button>
						<Button onClick={submit} type="primary" className="popover__button">
							<p>Submit</p>
						</Button>
					</div>
				</div>
			</div>
		</FilterStyle>
	);
};

export default memo(Filter);

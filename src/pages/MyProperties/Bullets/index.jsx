import React, { memo, useEffect, useMemo, useState } from "react";
import { BulletsStyle } from "./style";
import Button from "../../../components/Button";
import { ReactComponent as Arrow } from "../../../assets/svg/arrow.svg";
import { useNavigate } from "react-router-dom";

const Bullets = ({ pages, setPages }) => {
	const [arrayOfPages, setArrayOfNumbers] = useState([]);
	const navigate = useNavigate();
	// eslint-disable-next-line
	const searchParams = useMemo(() => new URLSearchParams(window.location.search), [window.location.search]);

	useEffect(() => {
		const stack = [];

		for (let i = 0; i < pages.max; i++) {
			stack.push(i);
		}

		// Выводим в конце последние четыре номера страницы
		if (pages.current + 3 >= pages.max) {
			return setArrayOfNumbers(stack.slice(-4));
		}

		/*
		 * Если страница первая отображаем от первой позиции
		 * Если номер страницы больше чем 1, то показываем от второй позиции,
		 * то есть текущая страница среди кнопок в bullet будет стоять на втором месте
		 */
		const fromSlice = !pages.current ? 0 : pages.current - 1;

		/*
		 * Если страница первая, то показываем от 1 до 4 страницы
		 * Если станица не первая, то показываем номер предыдущей страницы
		 * и от текущей еще 2 страницы, вообщем всегда будет показываться 4 страницы
		 */
		const toSlice = !pages.current ? 4 : pages.current + 3;

		setArrayOfNumbers(stack.slice(fromSlice, toSlice));
	}, [pages]);

	const setSearchPage = (value) => {
		searchParams.set("page", value);
		window.scrollTo({ top: 0 });
		navigate(`?${searchParams.toString()}`);
	};

	const setCurrentPage = (direction, num) => {
		if (direction === "prev") {
			setSearchPage(pages.current);
			return setPages((pages) => ({ ...pages, current: pages.current - 1 }));
		}

		if (direction === "next") {
			setSearchPage(pages.current + 2);
			return setPages((pages) => ({ ...pages, current: pages.current + 1 }));
		}

		setSearchPage(num + 1);
		setPages((pages) => ({ ...pages, current: num }));
	};

	return (
		<BulletsStyle className="bullets">
			{pages.current !== 0 && (
				<Button onClick={setCurrentPage.bind(null, "prev")} className="bullets__button" type="secondary">
					<Arrow />
				</Button>
			)}
			{arrayOfPages.map((num) => {
				const current = pages.current === num ? " current" : "";

				return (
					<Button
						key={num}
						onClick={setCurrentPage.bind(null, "", num)}
						className={`bullets__button${current}`}
						type="secondary"
					>
						<p>{num + 1}</p>
					</Button>
				);
			})}
			{pages.current + 1 !== pages.max && (
				<Button
					onClick={setCurrentPage.bind(null, "next")}
					className="bullets__button bullets__button_reverse"
					type="secondary"
				>
					<Arrow />
				</Button>
			)}
		</BulletsStyle>
	);
};

export default memo(Bullets);

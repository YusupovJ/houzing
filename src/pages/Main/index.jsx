import React, { memo, useCallback, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { useMatchMedia } from "../../helpers/functions/functions";
import Filter from "../../components/Filter";
import About from "./About";
import Products from "../../components/Products";
import ChooseUs from "./ChooseUs";
import CategoryCard from "./CategoryCard";
import Popular from "./Popular";
import ToBegin from "../../components/ToBegin";
import Recommended from "./Recommended";

/* Главная страница */

const URL = process.env.REACT_APP_PUBLIC_URL;

const Main = () => {
	const media768 = useMatchMedia();
	const [categoryList, setCategoryList] = useState([{ status: "pending" }, { status: "pending" }]);

	const getRandomProperties = useCallback(async (setState, size = 3, pages) => {
		let maxPages = 100;
		const randomPage = (Math.random() * (pages || maxPages)).toFixed();

		const request = await fetch(`${URL}/v1/houses/list?size=${size}&page=${randomPage}`);
		const response = await request.json();

		if (request.ok) {
			setState((slides) => response.data || slides);
			maxPages = response.map.total_pages;
		}

		// Если рандомной страницы нет до 1000, тогда вызываем заново, но указываем total_pages
		// которые приходят с сервера
		if (!response?.data) {
			getRandomProperties(setState, size, maxPages);
		}
	}, []);

	// Список категорий
	useEffect(() => {
		const request = fetch(`${URL}/v1/categories/list`).then((res) => res.json());
		request.then((res) => {
			setCategoryList(res.data || []);
		});
	}, []);

	return (
		<ToBegin>
			<main className="main">
				{media768 ? <Filter /> : null}
				<About getRandomProperties={getRandomProperties} />
				<Recommended getRandomProperties={getRandomProperties} />
				<ChooseUs />
				<Products
					title="Category"
					text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
					elemCount={4}
				>
					{categoryList.map((item, index) => {
						return (
							<SwiperSlide key={item?.id || index}>
								<CategoryCard status={item?.status} id={item?.id} text={item?.name} />
							</SwiperSlide>
						);
					})}
				</Products>
				<Popular />
			</main>
		</ToBegin>
	);
};

export default memo(Main);

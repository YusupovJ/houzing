import React, { memo } from "react";
import { ProductsStyle } from "./style";
import Title from "../Title";

/* Шаблон слайдера */

/*------------------------------------*/

/* Swiper */

import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

/*------------------------------------*/

const Products = (props) => {
	return (
		<ProductsStyle bg={props.bg || "white"} pagination={props.pagination} className="products">
			<div className="products__container">
				<Title className="products__text-block" title={props.title}>{props.text}</Title>
				<Swiper className="products__slider"
					loop={true}
					navigation={true}
					spaceBetween={20}
					initialSlide={0}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					modules={[Pagination, Navigation]}
					breakpoints={{
						0: {
							slidesPerView: props.elemCount === 4 ? 2 : 1,
						},
						640: {
							slidesPerView: props.elemCount === 4 ? 3 : 2,
						},
						1024: {
							slidesPerView: props.elemCount === 4 ? 4 : 3,
						},
					}}
				>
					{props.children}
				</Swiper>
			</div>
		</ProductsStyle>
	);
};

export default memo(Products);

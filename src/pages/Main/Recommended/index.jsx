import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import Card from "../../../components/Card";
import Products from "../../../components/Products";

const Recommended = ({ getRandomProperties }) => {
	const [recommended, setRecommended] = useState([{ attachments: { imgPath: "" } }]);

	useEffect(() => {
		getRandomProperties(setRecommended, 5);
	}, [getRandomProperties]);

	return (
		<Products title="Recommended" text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.">
			{recommended.map((item) => {
				const address = [item.country, item.city, item.region, item.address]
					.filter((address) => address)
					.join(", ");

				return (
					<SwiperSlide key={item?.id || 1}>
						<Card
							title={item?.name}
							to={item?.id ? `/properties/${item?.id}` : false}
							address={address}
							image={item?.attachments[0]?.imgPath || "pending"}
							ava={item?.ava}
							price={item?.price}
							sale={item?.salePrice}
							houseDetails={item?.houseDetails}
						/>
					</SwiperSlide>
				);
			})}
		</Products>
	);
};

export default Recommended;

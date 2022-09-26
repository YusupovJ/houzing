import React, { memo } from "react";
import { ChooseUsStyle } from "./style";
import Title from "../../../components/Title";
import { chooseUs } from "../../../helpers/utils/chooseUs";

/* Компонент с причинами, почему стоит нас выбрать */

const ChooseUs = () => {
	return (
		<ChooseUsStyle className="chooseus">
			<div className="chooseus__container">
				<Title title="Why Choose Us?" className="chooseus__text-block">
					Nulla quis curabitur velit volutpat auctor bibendum
					consectetur sit.
				</Title>
				<ul className="chooseus__row">
					{chooseUs.map((item) => {
						return (
							<li key={item.id} className="chooseus__item">
								<div className="chooseus__icon">
									{item.icon}
								</div>
								<h4 className="chooseus__item-title">
									{item.title}
								</h4>
								<p className="chooseus__text">{item.text}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</ChooseUsStyle>
	);
};

export default memo(ChooseUs);

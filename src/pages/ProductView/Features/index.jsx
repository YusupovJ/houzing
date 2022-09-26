import React, { memo } from "react";

import { ReactComponent as AirCondition } from "../../../assets/svg/features/airCondition.svg";
import { ReactComponent as BusStop } from "../../../assets/svg/features/busStop.svg";
import { ReactComponent as Furniture } from "../../../assets/svg/features/furniture.svg";
import { ReactComponent as Garden } from "../../../assets/svg/features/garden.svg";
import { ReactComponent as GasStove } from "../../../assets/svg/features/gasStove.svg";
import { ReactComponent as CourtYard } from "../../../assets/svg/features/courtYard.svg";
import { ReactComponent as Market } from "../../../assets/svg/features/market.svg";
import { ReactComponent as Park } from "../../../assets/svg/features/park.svg";
import { ReactComponent as Parking } from "../../../assets/svg/features/parking.svg";
import { ReactComponent as School } from "../../../assets/svg/features/school.svg";
import { ReactComponent as Stadium } from "../../../assets/svg/features/stadium.svg";
import { ReactComponent as Subway } from "../../../assets/svg/features/subway.svg";
import { ReactComponent as SuperMarket } from "../../../assets/svg/features/superMarket.svg";
import { ReactComponent as TV } from "../../../assets/svg/features/tv.svg";
import { ReactComponent as Wifi } from "../../../assets/svg/features/wifi.svg";

/* Компонент с особбеностями товара */

const Features = (props) => {
	const componentsDto = Object.entries(props?.componentsDto);
	const homeAmenitiesDto = Object.entries(props?.homeAmenitiesDto);

	// Получаем список особенностей дома
	const featuresList = [...componentsDto, ...homeAmenitiesDto];

	return (
		<main className="features">
			<h2 className="features__title title">Features</h2>
			<ul className="features__list list">
				{featuresList.map((feature, index) => {
					if (feature[1]) {
						const featureLetters = feature[0].split("");

						// Получаем все большие буквы
						const featureBigLetters = featureLetters
						.filter((letter, index, array) => {
							return array[index] === array[index].toUpperCase();
						})
						.join("");

						// Ставим пробел перед большими буквами
						const featureName = feature[0].replace(/[A-Z]/, ` ${featureBigLetters}`);

						/* ------------------------------------ */

						// Выбираем иконку
						const getIcon = () => {
							switch (feature[0]) {
								case "airCondition":
									return <AirCondition/>;
								case "busStop":
									return <BusStop/>;
								case "furniture":
									return <Furniture/>;
								case "garden":
									return <Garden/>;
								case "gasStove":
									return <GasStove/>;
								case "courtyard":
									return <CourtYard/>;
								case "market":
									return <Market/>;
								case "park":
									return <Park/>;
								case "parking":
									return <Parking/>;
								case "school":
									return <School/>;
								case "stadium":
									return <Stadium/>;
								case "subway":
									return <Subway/>;
								case "superMarket":
									return <SuperMarket/>;
								case "tv":
									return <TV/>;
								case "internet":
									return <Wifi/>;
								default:
									return null;
							}
						};

						return (
							<li key={index} className="list__property">
								<div className="list__icon">{getIcon()}</div>
								<span>{featureName}</span>
							</li>
						);
					}

					return null;
				})}
			</ul>
		</main>
	);
};

export default memo(Features);

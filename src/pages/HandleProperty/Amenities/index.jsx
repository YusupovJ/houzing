import React, { memo } from "react";
import Inputs from "../Inputs/";
import Checkbox from "../../../components/Checkbox";
import { amenities } from "../../../helpers/utils/amenities";

/* Компонент с галочками */

const Amenities = ({ changeHouseInfo }) => {

	const amenityHandler = (e, id, deepKey) => {
		const { checked } = e.target;
		changeHouseInfo(id, checked, deepKey);
	};

	return (
		<Inputs className="amenities" title="Amenities">
			{amenities.map((amenity) => {
				return (
					<Checkbox
						id={amenity.id}
						onChange={(e) => amenityHandler(e, amenity.id, amenity.parent)}
						key={amenity.id}
						className="amenities__checkbox"
					>
						{amenity.label}
					</Checkbox>
				);
			})}
		</Inputs>
	);
};

export default memo(Amenities);

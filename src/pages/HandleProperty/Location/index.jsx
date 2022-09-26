import React, { memo, useCallback, useEffect, useState } from "react";
import Input from "../../../components/Input";
import Map from "../../../components/Map";
import Inputs from "../Inputs";
import { location } from "../../../helpers/utils/location";

/* Компонент для указания локации */

const Location = (props) => {
	// Координаты маркера
	const [latLng, setLatLng] = useState({});

	useEffect(() => {
		props.changeHouseInfo("locations", latLng);
	}, [latLng, props]);

	/* ------------------------------------ */

	const locationChangeHandler = useCallback(
		(e, key) => {
			setLatLng({ ...latLng, [key]: parseFloat(e.target.value) });
		},
		[latLng]
	);

	return (
		<Inputs title="Location">
			{location.map((loc) => {
				return (
					<Input
						onChange={(e) => props.changeHouseInfo(loc.id, e.target.value)}
						type="text"
						placeholder={loc.placeholder}
						id={loc.id}
						status={props.status}
						key={loc.id}
						value={props.defaultLocations[loc.id]}
						required
						className="inputs__input"
					/>
				);
			})}
			<div className="inputs__map">
				<Map
					zoom={1.9}
					defaultPos={props.defaultLocations.location}
					setLatLng={setLatLng}
					latLng={latLng}
					markerDraggable
				/>
			</div>
			<Input
				type="number"
				placeholder="Latitude"
				value={latLng.latitude ?? props.defaultLocations.location.latitude}
				onChange={(e) => locationChangeHandler(e, "latitude")}
				status={props.status}
				required
				id="lat"
				className="inputs__input"
			/>
			<Input
				type="number"
				value={latLng.longitude ?? props.defaultLocations.location.longitude}
				status={props.status}
				onChange={(e) => locationChangeHandler(e, "longitude")}
				required
				placeholder="Longitude"
				id="lng"
				className="inputs__input"
			/>
		</Inputs>
	);
};

export default memo(Location);

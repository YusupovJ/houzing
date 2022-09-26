import React, { useMemo } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { GoogleMapStyle } from "./style";
import Skeleton from "react-loading-skeleton";
import markerIcon from "../../assets/svg/marker.svg";

/* Компонент карты */

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API;

const Map = (props) => {
	const loading = useJsApiLoader({
		id: "product-location",
		googleMapsApiKey: apiKey,
	});

	/* ------------------------------------ */

	// Двигаем маркер
	const markerPositionHandler = (e) => {
		const latLng = {
			latitude: e.latLng.lat(),
			longitude: e.latLng.lng(),
		};

		props?.setLatLng(latLng);
	};

	/* ------------------------------------ */

	const center = useMemo(() => {
		return {
			lat: props?.markerDraggable ? 0 : props.latLng.latitude,
			lng: props?.markerDraggable ? 0 : props.latLng.longitude,
		};
		// eslint-disable-next-line
	}, []);

	if (loading.isLoaded) {
		return (
			<GoogleMapStyle markerDraggable={props?.markerDraggable}>
				<GoogleMap
					onClick={props?.markerDraggable && markerPositionHandler}
					center={center}
					zoom={props?.zoom || 14}
					mapContainerStyle={{
						width: "100%",
						height: "100%",
					}}
				>
					<MarkerF
						position={{
							lat: props.latLng.latitude || props.defaultPos.latitude || 0,
							lng: props.latLng.longitude || props.defaultPos.longitude || 0,
						}}
						icon={markerIcon}
					/>
				</GoogleMap>
			</GoogleMapStyle>
		);
	}

	return (
		<GoogleMapStyle>
			<Skeleton height="100%" />
		</GoogleMapStyle>
	);
};

export default Map;

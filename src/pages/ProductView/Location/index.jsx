import React, { memo } from "react";
import Map from "../../../components/Map";
import Skeleton from "react-loading-skeleton";

/* Компонент с местоположением товара */

const Location = (props) => {
	return (
		<section className="location">
			<h3 className="location__title title">Location</h3>
			<ul className="location__info list">
				<li className="list__property">
					{props?.locProperties?.address !== "pending"
						? <>
							<strong>Address: </strong>
							<span>{props?.locProperties?.address || "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{props?.locProperties?.country !== "pending"
						? <>
							<strong>Country: </strong>
							<span>{props?.locProperties?.country || "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{props?.locProperties?.city !== "pending"
						? <>
							<strong>City: </strong>
							<span>{props?.locProperties?.city || "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{props?.locProperties?.region !== "pending"
						? <>
							<strong>Region: </strong>
							<span>{props?.locProperties?.region || "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{props?.locProperties?.zip !== "pending"
						? <>
							<strong>Zip: </strong>
							<span>{props?.locProperties?.zip || "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
			</ul>
			{props?.latLng?.latitude && props?.latLng?.longitude && (
				<div className="location__map">
					<Map latLng={props?.latLng} center={props?.latLng} />
				</div>
			)}
		</section>
	);
};

export default memo(Location);

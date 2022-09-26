import React, { memo } from "react";
import Skeleton from "react-loading-skeleton";

/* Подробные детали о товаре */

const PropertyDetails = ({ propsDetails }) => {
	return (
		<section className="product-view__property-details property-details">
			<h2 className="property-details__title title">Property Details</h2>
			<ul className="property-details__list list">
				<li className="list__property">
					{propsDetails?.id !== "pending"
						? <>
							<strong>Property ID:</strong>
							<span>{propsDetails?.id ?? "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{propsDetails?.price !== "pending"
						? <>
							<strong>Price:</strong>
							<span>{propsDetails?.price ?? "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{propsDetails?.size !== "pending"
						? <>
							<strong>Property Size:</strong>
							<span>{propsDetails?.size ?? "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{propsDetails?.year !== "pending"
						? <>
							<strong>Year Built:</strong>
							<span>{propsDetails?.year ?? "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{propsDetails?.beds !== "pending"
						? <>
							<strong>Beds:</strong>
							<span>{propsDetails?.beds ?? "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{propsDetails?.bath !== "pending"
						? <>
							<strong>Baths:</strong>
							<span>{propsDetails?.bath ?? "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{propsDetails?.garage !== "pending"
						? <>
							<strong>Garage:</strong>
							<span>{propsDetails?.garage ?? "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
				<li className="list__property">
					{propsDetails?.type !== "pending"
						? <>
							<strong>Type:</strong>
							<span>{propsDetails?.type ?? "null"}</span>
						</>
						: <Skeleton width={200} className="list__property-skeleton" />
					}
				</li>
			</ul>
		</section>
	);
};

export default memo(PropertyDetails);

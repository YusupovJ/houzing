import React from "react";
import Skeleton from "react-loading-skeleton";

const HouseDetails = (props) => {
	return props.detail !== undefined ? (
		<>
			{props.icon}
			<p>
				{props.detail || 0} {props.text}
			</p>
		</>
	) : (
		<>
			<Skeleton width={45} height={13} />
			<Skeleton width={50} height={10} />
		</>
	);
};

export default HouseDetails;

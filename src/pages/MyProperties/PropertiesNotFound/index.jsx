import React, { memo } from "react";
import { PropertiesNotFoundStyle } from "./style";
import requestNotFound from "../../../assets/img/requestNotFound.png";
import { Link } from "react-router-dom";

const PropertiesNotFound = () => {
	return (
		<PropertiesNotFoundStyle className="my-properties__not-defined my-properties__subtitle">
			<img src={requestNotFound} alt="Not Found" />
			<span>
				You have no listings( <br />
				You can add a new ad <Link to="/add-property">here</Link>
			</span>
		</PropertiesNotFoundStyle>
	);
};

export default memo(PropertiesNotFound);
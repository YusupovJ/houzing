import React, { memo } from "react";
import Card from "../../../components/Card";

const CardsLoading = () => {
	const count = [1, 2, 3, 4, 5, 6];

	return count.map((count) => {
		return <Card key={count} image="pending" />;
	});
};

export default memo(CardsLoading);

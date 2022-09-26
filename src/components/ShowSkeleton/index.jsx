import React from "react";
import Skeleton from "react-loading-skeleton";

/* Показываем скелет страницы во время загрузки */

const ShowSkeleton = ({ imgLoaded, className, id }) => {
	return imgLoaded.indexOf(id) < 0 && <Skeleton className={className} />;
};

export default ShowSkeleton;
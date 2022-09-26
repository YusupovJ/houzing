import React, { memo } from "react";
import { PopularStyle } from "./style";
import Button from "../../../components/Button";
import popBg from "../../../assets/img/popBg.jpg";
import { useImgLoaded } from "../../../helpers/functions/functions";
import ShowSkeleton from "../../../components/ShowSkeleton";

/* Популярный дом за неделю */

const Popular = () => {
	const [imgLoaded, handleImgLoad] = useImgLoaded();

	return (
		<PopularStyle className="popular">
			<img src={popBg} alt="Bg" className="popular__bg" onLoad={handleImgLoad.bind(this, 1)} />
			<ShowSkeleton className="popular__bg-skeleton" id={1} imgLoaded={imgLoaded} />
			<div className="popular__container">
				<h2 className="popular__title">
					Vermont Farmhouse With Antique Jail Is the Week's Most
					Popular Home
				</h2>
				<Button type="primary" className="popular__button">
					<p>Read more</p>
				</Button>
			</div>
		</PopularStyle>
	);
};

export default memo(Popular);

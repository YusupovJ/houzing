import React, { memo, useEffect, useState } from "react";
import { AboutStyle } from "./style";
import { isMobile, useImgLoaded, useMatchMedia } from "../../../helpers/functions/functions";
import Filter from "../../../components/Filter";
import Button from "../../../components/Button";
import "react-loading-skeleton/dist/skeleton.css";
import { ReactComponent as Bed } from "../../../assets/svg/bed.svg";
import { ReactComponent as Bath } from "../../../assets/svg/bath.svg";
import { ReactComponent as Car } from "../../../assets/svg/car.svg";
import { ReactComponent as Rule } from "../../../assets/svg/rule.svg";
import ShowSkeleton from "../../../components/ShowSkeleton";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import HouseDetails from "../HouseDetails";
import notAvalaible from "../../../assets/svg/notAvalaible.svg";

/* Компонент со слайдами в начале */

/*------------------------------------*/

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

const About = ({ getRandomProperties }) => {
	const media768 = useMatchMedia();
	const [imgLoaded, handleImgLoad] = useImgLoaded();
	const [slides, setSlides] = useState([{ attachments: { imgPath: "pending" } }]);

	useEffect(() => {
		getRandomProperties(setSlides, 3);
	}, [getRandomProperties]);

	const handleImgError = (e) => {
		e.target.src = notAvalaible;
	};

	return (
		<AboutStyle className="about">
			<div className="about__wrapper">
				<Swiper
					pagination={{
						clickable: true,
					}}
					loop={true}
					navigation={!isMobile.any()}
					modules={[Pagination, Navigation, Autoplay]}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					className="about__slider"
				>
					{slides.map((slide) => {
						const address = [slide.country, slide.city, slide.region, slide.address]
							.filter((address) => address)
							.join(", ");

						return (
							<SwiperSlide key={slide.id || 1} className="about__slide-item">
								<div className="about__bg">
									<img
										onLoad={handleImgLoad.bind(this, slide.id)}
										onError={handleImgError}
										src={slide?.attachments[0]?.imgPath}
										alt="BG"
									/>
									<ShowSkeleton imgLoaded={imgLoaded} id={slide?.id} className="about__bg-skeleton" />
								</div>
								<div className="about__container">
									<h1 className="about__title">{slide?.name || <Skeleton width={280} />}</h1>
									<p className="about__text">{address || <Skeleton width={200} height={20} />}</p>
									<ul className="about__ownerships">
										<li className="about__own">
											<HouseDetails
												icon={<Bed />}
												detail={slide?.houseDetails?.beds}
												text="Beds"
											/>
										</li>
										<li className="about__own">
											<HouseDetails
												icon={<Bath />}
												detail={slide?.houseDetails?.bath}
												text="Baths"
											/>
										</li>
										<li className="about__own">
											<HouseDetails
												icon={<Car />}
												detail={slide?.houseDetails?.garage}
												text="Garages"
											/>
										</li>
										<li className="about__own">
											<HouseDetails
												icon={<Rule />}
												detail={slide?.houseDetails?.area}
												text="Sq Ft"
											/>
										</li>
									</ul>
									<p className="about__price">
										{slide?.price !== undefined ? (
											`$${slide?.price || 0}`
										) : (
											<Skeleton width={50} height={20} />
										)}
									</p>
									{slide.id ? (
										<Link to={`/properties/${slide?.id}`}>
											<Button className="about__button">
												<p>Read more</p>
											</Button>
										</Link>
									) : (
										<Button className="about__button">
											<p>Read more</p>
										</Button>
									)}
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				{media768 ? null : <Filter />}
			</div>
		</AboutStyle>
	);
};

export default memo(About);

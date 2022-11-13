import React, { memo, useEffect, useState } from "react";
import { bodyToggle, useMatchMedia } from "../../../helpers/functions/functions";
import { PhotosStyle } from "./style";
import Gallery from "../../../components/Gallery";
import notAvalaible from "../../../assets/svg/notAvalaible.svg";
import Skeleton from "react-loading-skeleton";

/* Компонент с фотографиями товара */

const Photos = (props) => {
	const media992 = useMatchMedia(991.98);
	const [gallery, setGallery] = useState({ opened: false, index: 0 });
	const [imgError, setImgError] = useState([]);
	const [photos, setPhotos] = useState([...props?.photos]);

	/* ------------------------------------ */

	// Обрабатываем ошибки
	const imgErrorHandler = (e, id) => {
		e?.target?.closest(".photos__photo").classList.add("err");
		e.target.src = notAvalaible;
		setImgError((imgError) => [...imgError, id]);
	};

	// Исключаем ошибочные фотографии для галлерии
	useEffect(() => {
		if (imgError.length > 0) {
			const excludedError = photos.filter((photo) => !imgError.includes(photo.id));
			if (excludedError.length > 0) {
				setPhotos(excludedError);
			}
		}
	}, [imgError, photos]);

	// Почему-то state не обновляеться когда приходит props
	useEffect(() => {
		setPhotos([...props.photos]);
	}, [props]);

	/* ------------------------------------ */

	// Открытие и закрытие галлерии
	const openGallery = (index, id) => {
		if (!imgError.includes(id)) {
			setGallery({ opened: true, index });
		}
	};

	const closeGallery = () => {
		setTimeout(() => {
			setGallery({ ...gallery, opened: false });
		}, 400);
	};

	useEffect(() => {
		bodyToggle(gallery.opened);
	}, [gallery]);

	/* ------------------------------------ */

	// Добавляем номер если фотографий много
	const addOtherList = (index) => {
		let condtition = index === 4 && photos.length > 5;
		let otherLength = props?.other?.length;

		if (!media992) {
			otherLength = photos.length - 3;
			condtition = index === 2 && photos.length > 3;
		}

		if (condtition) {
			return <p className="photos__other">+{otherLength}</p>;
		}

		return null;
	};

	/* ------------------------------------ */

	if (props.photos.length > 0) {
		return (
			<PhotosStyle galleryClass="product-view__gallery" photosCount={photos.length}>
				{photos.slice(0, !media992 ? 3 : 5).map((photo, index, arr) => {
					/*
					 * Если картинка еще не загружена показываем скелет,
					 * там в ProducrtView, я указал изначальный imgPath как "skeleton"
					 */

					if (photo.imgPath === "pending") {
						return <Skeleton key={photo.id} />;
					}

					const big = index === 0 ? "photos__photo_big" : "";
					const last = index === arr.length - 1 ? "photos__photo_last" : "";
					const err = !photo.imgPath ? "err" : "";

					return (
						<div
							key={photo.id}
							onClick={!err ? openGallery.bind(null, index, photo.id) : () => {}}
							className={`photos__photo ${last} ${big} ${err}`}
						>
							<img
								src={photo.imgPath || notAvalaible}
								onError={(e) => imgErrorHandler(e, photo.id)}
								alt="House"
							/>
							{addOtherList(index)}
						</div>
					);
				})}

				{gallery.opened && <Gallery index={gallery.index} photos={photos} closeGallery={closeGallery} />}
			</PhotosStyle>
		);
	}
	return null;
};

export default memo(Photos);

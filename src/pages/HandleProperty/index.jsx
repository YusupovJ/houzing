import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddPropertyStyle } from "./style";
import { bodyToggle, getProperty } from "../../helpers/functions/functions";

import Media from "./Media";
import ToBegin from "../../components/ToBegin";
import Gallery from "../../components/Gallery";
import Contact from "./Contact";
import Additional from "./Additional";
import Location from "./Location";
import Amenities from "./Amenities";
import Add from "./Add";
import Change from "./Change";

const HandleProperty = (props) => {
	const { id } = useParams();

	const [houseInfo, setHouseInfo] = useState({
		address: "",
		attachments: [{ imgPath: "" }],
		categoryId: "",
		city: "",
		componentsDto: {
			additional: "",
			airCondition: false,
			courtyard: false,
			furniture: false,
			gasStove: false,
			internet: false,
			tv: false,
		},
		country: "",
		description: "",
		homeAmenitiesDto: {
			additional: "",
			busStop: false,
			garden: false,
			market: false,
			park: false,
			parking: false,
			school: false,
			stadium: false,
			subway: false,
			superMarket: false,
		},
		houseDetails: {
			area: "",
			bath: "",
			beds: "",
			garage: "",
			room: "",
			yearBuilt: "",
		},
		location: {
			latitude: "",
			longitude: "",
		},
		name: "",
		price: "",
		region: "",
		salePrice: "",
		status: false,
		zipCode: "",
	});

	useEffect(() => {
		if (props.change) {
			getProperty(id, setHouseInfo);
		}
	}, [id, props.change]);

	/* ------------------------------------ */

	// Все значения по умолчанию

	const defaultLocations = useMemo(() => {
		return {
			location: houseInfo?.location,
			country: houseInfo?.country,
			city: houseInfo?.city,
			region: houseInfo?.region,
			address: houseInfo?.address,
			zipCode: houseInfo?.zipCode,
		};
	}, [
		houseInfo?.country,
		houseInfo?.city,
		houseInfo?.region,
		houseInfo?.address,
		houseInfo?.zipCode,
		houseInfo?.location,
	]);

	const defaultAttachments = useMemo(() => houseInfo?.attachments, [houseInfo?.attachments]);

	const defaultContact = useMemo(() => {
		return {
			title: houseInfo?.name,
			type: houseInfo?.category?.name,
			description: houseInfo?.description,
		};
	}, [houseInfo?.name, houseInfo?.category?.name, houseInfo?.description]);

	const defaultAdditional = useMemo(() => {
		return {
			price: houseInfo?.price,
			sale_price: houseInfo?.salePrice,
			...houseInfo?.houseDetails,
		};
	}, [houseInfo?.price, houseInfo?.salePrice, houseInfo?.houseDetails]);

	const defaultAmenities = useMemo(
		() => ({ ...houseInfo?.componentsDto, ...houseInfo?.homeAmenitiesDto }),
		[houseInfo?.componentsDto, houseInfo?.homeAmenitiesDto]
	);

	/* ------------------------------------ */

	// Функция для изменения объекта с информацией о продукте, который будем отправлять на сервер
	const changeHouseInfo = useCallback((key, value, deepKey = false) => {
		// Если есть вложенный объект, то засовываем в него
		if (deepKey) {
			return setHouseInfo((prevState) => ({
				...prevState,
				[deepKey]: {
					...prevState[deepKey],
					[key]: value,
				},
			}));
		}

		// Иначе просто вставляем в объект
		setHouseInfo((prevState) => ({
			...prevState,
			[key]: value,
		}));
	}, []);

	/* ------------------------------------ */

	// Если пользователь не вошел в аккаунт, то посылаем его на главную страницу
	const navigate = useNavigate();

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("login")).authenticationToken;

		if (!token) {
			navigate("/");
		}
	});

	/* ------------------------------------ */

	// Загруженные картинки
	const [files, setFiles] = useState([]);

	// При каждой загрузке картинок отправляем в объект houseInfo
	useEffect(() => {
		changeHouseInfo("attachments", files);
	}, [files, changeHouseInfo]);

	useEffect(() => {
		new Promise((resolve) => {
			if (houseInfo.status) {
				resolve();
			}
		}).then(() => {
			for (let img of defaultAttachments) {
				img.id = Date.now() * Math.random();
			}

			setFiles(defaultAttachments);
		});
	}, [houseInfo, defaultAttachments]);

	/* ------------------------------------ */

	// Отображение тех картинок в галлерии
	const [gallery, setGallery] = useState({ opened: false, index: 0 });

	// Открытие и закрытие галлерии
	const openGallery = (index) => {
		setGallery({ opened: true, index });
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

	return (
		<ToBegin>
			<AddPropertyStyle filesLength={files.length} className="add-property">
				<div className="add-property__container">
					<h1 className="add-property__title">Add new property</h1>
					<Contact
						status={houseInfo.status}
						defaultContact={defaultContact}
						changeHouseInfo={changeHouseInfo}
					/>
					<Additional
						status={houseInfo.status}
						defaultAdditional={defaultAdditional}
						changeHouseInfo={changeHouseInfo}
					/>
					<Location
						status={houseInfo.status}
						defaultLocations={defaultLocations}
						changeHouseInfo={changeHouseInfo}
					/>
					<Media
						changeHouseInfo={changeHouseInfo}
						files={files}
						setFiles={setFiles}
						openGallery={openGallery}
						defaultAttachments={defaultAttachments}
						status={houseInfo.status}
					/>
					<Amenities
						status={houseInfo.status}
						defaultAmenities={defaultAmenities}
						changeHouseInfo={changeHouseInfo}
					/>
					{props.add ? <Add houseInfo={houseInfo} /> : <Change houseInfo={houseInfo} />}
				</div>
			</AddPropertyStyle>
			{gallery.opened && (
				<Gallery
					index={gallery.index}
					photos={files}
					className="add-property__gallery"
					closeGallery={closeGallery}
					defaultAttachments={defaultAttachments}
				/>
			)}
		</ToBegin>
	);
};

export default memo(HandleProperty);

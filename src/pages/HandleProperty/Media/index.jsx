import React, { memo, useRef } from "react";
import { init } from "filestack-js";
import { ReactComponent as Trash } from "../../../assets/svg/trash.svg";
import { isMobile } from "../../../helpers/functions/functions";
import Inputs from "../Inputs";
import Skeleton from "react-loading-skeleton";

/* Компонент для выбора картинок */

const client = init(process.env.REACT_APP_FILESTACK_API);

const Media = ({ files, setFiles, openGallery, defaultAttachments }) => {
	const newImageRef = useRef();

	const uploadImage = async (file) => {
		const response = await client.upload(file, {}, { filename: file.name }, {});
		return response.url;
	};

	// Загрузка картинок
	const selectFile = async (e) => {
		e.stopPropagation();
		// Пока идет загрузка ставим skeleton
		setFiles((files) => [...files, { id: Date.now() * Math.random(), imgPath: "pending" }]);

		const imgPath = await uploadImage(e.target.files[0]);

		setFiles((files) => {
			// Получаем первый попавший загружающийся файл после загрузки
			const replaceIndex = files.findIndex((file) => file.imgPath === "pending");
			// И удаляем его
			const newFiles = files.filter((file, index) => index !== replaceIndex);
			return [...newFiles, { id: Date.now() * Math.random(), imgPath }];
		});

		// Если у label есть класс err, то удаляем его при выборе картинки
		if (newImageRef.current.classList.contains("err")) {
			newImageRef.current.classList.remove("err");
		}
	};

	/* ------------------------------------ */

	// Удаляем картинки
	const removeImg = (e, id) => {
		setFiles(files.filter((photo) => photo.id !== id));
		e.stopPropagation();
	};

	return (
		<Inputs title="Media">
			<div className="inputs__images">
				{files.map((photo, index) => {
					if (photo.imgPath === "pending") {
						return <Skeleton key={photo.id} width="100%" height="100%" />;
					}

					return (
						<div className="inputs__image" onClick={openGallery.bind(null, index)} key={photo.id}>
							<img src={photo.imgPath} alt="UploadedImg" />
							<button
								onClick={(e) => removeImg(e, photo.id)}
								className={`inputs__remove-img ${isMobile.any() ? "touch" : ""}`}
							>
								<Trash />
							</button>
						</div>
					);
				})}
				<label ref={newImageRef} htmlFor="upload" className="inputs__image inputs__image_new"></label>
			</div>
			<div className="inputs__upload">
				<p>Upload</p>
				<input
					id="upload"
					onClick={(e) => {
						e.target.value = "";
					}}
					type="file"
					onChange={selectFile}
				/>
			</div>
		</Inputs>
	);
};

export default memo(Media);

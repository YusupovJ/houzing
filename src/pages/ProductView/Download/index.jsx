import React, { memo } from "react";
import { DownloadStyle } from "./style";
import { ReactComponent as DownloadIcon } from "../../../assets/svg/download.svg";
import pdf from "../../../assets/docs/test_property.pdf";

/* Компонент для скачивания файлов */

const Download = () => {
	const getFileName = (file) => {
		let name = file.slice(pdf.lastIndexOf("/") + 1).split(".");
		name.splice(1, 1);
		name = name.join(".");
		return name;
	};

	return (
		<DownloadStyle className="download">
			<h3 className="download__title title">Download</h3>
			<ul className="download__files">
				<li className="download__file">
					<DownloadIcon></DownloadIcon>
					<span>{getFileName(pdf)}</span>
					<a href={pdf} download={getFileName(pdf)} className="download__link">
						Download
					</a>
				</li>
				<li className="download__file">
					<DownloadIcon></DownloadIcon>
					<span>{getFileName(pdf)}</span>
					<a href={pdf} download={getFileName(pdf)} className="download__link">
						Download
					</a>
				</li>
				<li className="download__file">
					<DownloadIcon></DownloadIcon>
					<span>{getFileName(pdf)}</span>
					<a href={pdf} download={getFileName(pdf)} className="download__link">
						Download
					</a>
				</li>
			</ul>
		</DownloadStyle>
	);
};

export default memo(Download);

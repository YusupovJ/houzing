import React, { memo } from "react";
import { InfoStyle } from "./style";
import { ReactComponent as Pin } from "../../../assets/svg/pin.svg";
import { ReactComponent as Phone } from "../../../assets/svg/phone.svg";
import { ReactComponent as Clock } from "../../../assets/svg/clock.svg";

const Info = () => {
	return (
		<InfoStyle className="contact-us__info-list">
			<li className="contact-us__info">
				<div className="contact-us__info-icon">
					<Pin />
				</div>
				<div className="contact-us__info-body">
					<h3 className="contact-us__subtitle">Address</h3>
					<p className="contact-us__text">Uzb, Xorezm, Xonqa street, House 13</p>
				</div>
			</li>
			<li className="contact-us__info">
				<div className="contact-us__info-icon">
					<Phone />
				</div>
				<div className="contact-us__info-body">
					<h3 className="contact-us__subtitle">Contact</h3>
					<p className="contact-us__text">
						<span>
							Mobile: <a href="tel:998906493166">+998 (90) 726-61-72</a>
						</span>{" "}
						<br />
						Telegram:{" "}
						<a rel="noreferrer" target="_blank" href="https://t.me/jamshudanamana">
							@jamshudanamana
						</a>
					</p>
				</div>
			</li>
			<li className="contact-us__info">
				<div className="contact-us__info-icon">
					<Clock />
				</div>
				<div className="contact-us__info-body">
					<h3 className="contact-us__subtitle">Hour of operation</h3>
					<p className="contact-us__text">
						<span>Monday - Saturday: 19:00 - 00:00</span> <br />
						Sunday: 10:30 - 20:00
					</p>
				</div>
			</li>
		</InfoStyle>
	);
};

export default memo(Info);

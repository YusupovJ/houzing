import React, { memo } from "react";
import { ContactUsStyle } from "./style";
import Title from "../../components/Title";
import Map from "../../components/Map";
import ToBegin from "../../components/ToBegin";
import Info from "./Info";
import SendEmail from "./SendEmail";

const ContactUs = () => {
	const pos = {
		longitude: 60.64651711235911,
		latitude: 41.536796534121684,
	};

	return (
		<ToBegin>
			<ContactUsStyle className="contact-us">
				<div className="contact-us__container">
					<Title className="contact-us__text-block" title="Contact Us">
						We're always eager to hear from you!
					</Title>
					<Info />
					<Map center={pos} latLng={pos} zoom={17} />
					<SendEmail />
				</div>
			</ContactUsStyle>
		</ToBegin>
	);
};

export default memo(ContactUs);

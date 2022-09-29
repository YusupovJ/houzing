import React, { memo } from "react";
import SendMessage from "../../../components/SendMessage";
import Title from "../../../components/Title";
import { SendEmailStyle } from "./style";

const SendEmail = () => {
	return (
		<SendEmailStyle className="send-email">
			<Title className="send-email__title" title="Send Us An Email" />
			<SendMessage user="jamshudanamana@gmail.com" />
		</SendEmailStyle>
	);
};

export default memo(SendEmail);

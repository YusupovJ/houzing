import React, { memo } from "react";
import { TitleStyled } from "./style";

/* Шаблон для заголовка */

const Title = (props) => {
	return (
		<TitleStyled className={`${props.className} text-block`}>
			<h2 className={`text-block__title`}>{props.title}</h2>
			<p className={`text-block__text`}>{props.children}</p>
		</TitleStyled>
	);
};

export default memo(Title);

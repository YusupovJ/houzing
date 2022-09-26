/* Библиотеки */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";

/*------------------------------------*/

import Root from "./root";
import GlobalContext from "./helpers/context/store";
import "./assets/styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<GlobalContext>
			<Root />
		</GlobalContext>
	</BrowserRouter>
);

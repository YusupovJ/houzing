import React, { memo, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Global } from "../helpers/context/store";
import Header from "../components/Header";
import Main from "../pages/Main";
import Footer from "../components/Footer";
import Properties from "../pages/Properties";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductView from "../pages/ProductView";
import HandleProperty from "../pages/HandleProperty";
import Alert from "../components/Alert";
import EnterEmail from "../pages/ForgotPass/EnterEmail";
import Verificate from "../pages/ForgotPass/Verificate";
import ResetPass from "../pages/ForgotPass/ResetPass";
import MyProperties from "../pages/MyProperties";
import ContactUs from "../pages/ContactUs";

const Root = () => {
	const { alerts } = useContext(Global) || [];

	// Очищаем массив сплывающих окон спустя 2 секунды
	const clearAlertList = (array) => {
		setTimeout(() => array.shift(), 2000);
		return array;
	};

	/* ------------------------------------ */

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/properties" element={<Properties />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/properties/:id" element={<ProductView />} />
				<Route path="/add-property" element={<HandleProperty add />} />
				<Route path="/change-property/:id" element={<HandleProperty change />} />
				<Route path="/forgot-pass/send-key" element={<EnterEmail />} />
				<Route path="/forgot-pass/verificate" element={<Verificate />} />
				<Route path="/forgot-pass/reset-pass" element={<ResetPass />} />
				<Route path="/my-properties" element={<MyProperties />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			{/*
			 * Показываем все сплывающие окна здесь, чтобы
			 * при переходе на другую страницу они оставались
			 */}
			<div className="alerts-wrapper">
				{clearAlertList(alerts)?.map((alert) => {
					return (
						<Alert key={alert?.id} type={alert?.type}>
							{alert?.text}
						</Alert>
					);
				})}
			</div>
		</>
	);
};

export default memo(Root);

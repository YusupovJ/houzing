import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FooterStyle } from "./style";
import { footer } from "../../helpers/utils/footer";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

/* Подвал */

const Footer = () => {
	return (
		<FooterStyle className="footer">
			<div className="footer__container">
				<div className="footer__top">
					{footer.map((col) => {
						return (
							<div className="footer__col" key={col.id}>
								<div className="footer__cell">
									<h3 className="footer__title">{col.title}</h3>
									<ul className="footer__texts">
										{col.cells.map((item) => {
											if (item.link) {
												return (
													<a href={item.href} className="footer__text" key={item.id}>
														{item.icon || null}
														<p>{item.text}</p>
													</a>
												);
											}
											return (
												<li className="footer__text" key={item.id}>
													{item.icon || null}
													<p>{item.text}</p>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
				<div className="footer__bottom">
					<Link to="/" className="footer__logo">
						<Logo/>
						<p>Houzing</p>
					</Link>
					<small>
						Copyright © 2021 CreativeLayers. All Right Reserved.
						<button
							onClick={() => {
								document.documentElement.scrollTo({
									top: 0,
									behavior: "smooth",
								});
							}}
							className="footer__up"
						>
							<Arrow/>
						</button>
					</small>
				</div>
			</div>
		</FooterStyle>
	);
};

export default memo(Footer);

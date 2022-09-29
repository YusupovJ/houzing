import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FooterStyle } from "./style";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as Pin } from "../../assets/svg/pin.svg";
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";
import { ReactComponent as Email } from "../../assets/svg/email.svg";

/* Подвал */

const URL = process.env.REACT_APP_PUBLIC_URL;

const Footer = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchRequest = async () => {
			const request = await fetch(`${URL}/v1/categories/list`);
			const response = await request.json();

			if (request.ok) {
				setCategories(response.data || []);
			}
		};

		fetchRequest();
	}, []);

	console.log(categories);

	return (
		<FooterStyle className="footer">
			<div className="footer__container">
				<div className="footer__top">
					<div className="footer__col">
						<div className="footer__cell">
							<h3 className="footer__title">Contact us</h3>
							<ul className="footer__texts">
								<li className="footer__text">
									<Pin />
									<p>
										Uzb, Xorezm, Xonqa street, <br /> House 13
									</p>
								</li>
								<li className="footer__text">
									<Phone />
									<a href="tel:998906493166">+998 (90) 649-31-66</a>
								</li>
								<li className="footer__text">
									<Email />
									<a href="mailto:jamshudanamana@gmail.com">jamshudanamana@gmail.com</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer__col">
						<div className="footer__cell">
							<h3 className="footer__title">Lists by Category</h3>
							<ul className="footer__texts">
								{categories.map((category) => (
									<li key={category.id} className="footer__text">
										<Link to={`/properties?category_id=${category.id}`}>{category.name}</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="footer__col">
						<div className="footer__cell">
							<h3 className="footer__title">Discover</h3>
							<ul className="footer__texts">
								<li className="footer__text">
									<Link to="/properties?country=Uzbekistan">Uzbekistan</Link>
								</li>
								<li className="footer__text">
									<Link to="/properties?country=Russia">Russia</Link>
								</li>
								<li className="footer__text">
									<Link to="/properties?country=Kazakhstan">Kazakhstan</Link>
								</li>
								<li className="footer__text">
									<Link to="/properties?country=USA">USA</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer__col">
						<div className="footer__cell">
							<h3 className="footer__title">Quick Links</h3>
							<ul className="footer__texts">
								<li className="footer__text">
									<Link to="/contact">Contact Us</Link>
								</li>
								<li className="footer__text">
									<Link to="/about">About Us</Link>
								</li>
								<li className="footer__text">
									<Link to="/terms">Terms & Conditions</Link>
								</li>
								<li className="footer__text">
									<Link to="/faq">FAQ</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer__bottom">
					<Link to="/" className="footer__logo">
						<Logo />
						<p>Houzing</p>
					</Link>
					<small>
						Copyright © 2022 Houzing App. All Right Reserved.
						<button
							onClick={() => {
								document.documentElement.scrollTo({
									top: 0,
									behavior: "smooth",
								});
							}}
							className="footer__up"
						>
							<Arrow />
						</button>
					</small>
				</div>
			</div>
		</FooterStyle>
	);
};

export default memo(Footer);

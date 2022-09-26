import React, { memo } from "react";
import { MyPropertyStyle } from "./style";
import { Link } from "react-router-dom";
import { ReactComponent as Trash } from "../../../assets/svg/trash.svg";
import { ReactComponent as Edit } from "../../../assets/svg/edit.svg";
import { useMatchMedia } from "../../../helpers/functions/functions";

const MyProperty = (props) => {
	const media992 = useMatchMedia(991.98);
	const media425 = useMatchMedia(424.98);

	const setMaxText = (text, max) => {
		return `${text.slice(0, max)}${text.length > max ? "..." : ""}`;
	};

	return (
		<MyPropertyStyle {...props} className="my-properties__card card">
			<div className="card__wrapper">
				<Link to={`/properties/${props.id}`} className="card__image">
					<img src={props.image} alt="My Property" />
				</Link>
				<div className="card__body">
					<h3 className="card__title my-properties__subtitle">
						{setMaxText(props.name, media992 ? 25 : 15)}
					</h3>
					<p className="card__address my-properties__text">{setMaxText(props.address, 20)}</p>
					<div className="card__body-row">
						<div className="card__prices">
							<p className="card__sale-price my-properties__text">${props.salePrice || 0}</p>
							<p className="card__price">${props.price || 0}</p>
						</div>
						{!media425 && (
							<div className="card__actions">
								<Link to={`/change-property/${props.id}`} className="card__button">
									<Edit />
								</Link>
								<button onClick={props?.deleteProperty?.bind(null, props.id)} className="card__button">
									<Trash />
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="card__info my-properties__text">
				<span>{props.category || <i>Not selected</i>}</span>
			</div>
			<div className="card__info my-properties__text">
				<span>{props.room || <i>0</i>}</span>
			</div>
			{media425 && (
				<div className="card__actions">
					<Link to={`/change-property/${props.id}`} className="card__button">
						<Edit />
					</Link>
					<button onClick={props?.deleteProperty?.bind(null, props.id)} className="card__button">
						<Trash />
					</button>
				</div>
			)}
		</MyPropertyStyle>
	);
};

export default memo(MyProperty);

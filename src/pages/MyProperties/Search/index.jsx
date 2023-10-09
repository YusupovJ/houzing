import React, { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";

const Search = ({ setSearchValue }) => {
	const navigate = useNavigate();
	// eslint-disable-next-line
	const searchParams = useMemo(() => new URLSearchParams(window.location.search), [
		window.location.search,
	]);

	const searchHandler = (e) => {
		searchParams.set("name", e.target.value);

		if (!e.target.value) {
			searchParams.delete("name");
		}

		navigate(`?${searchParams.toString()}`);
		setSearchValue(e.target.value);
	};

	return <Input className="my-properties__search" id="search" type="text" placeholder="Search" />;
};

export default memo(Search);

export const additional = [
	{ id: "price", placeholder: "Price ($)*" },
	{ id: "sale_price", placeholder: "Sale Price ($)*" },
	{ id: "beds", placeholder: "Beds*", parent: "houseDetails" },
	{ id: "bath", placeholder: "Baths*", parent: "houseDetails" },
	{ id: "garage", placeholder: "Garages*", parent: "houseDetails" },
	{ id: "yearBuilt", placeholder: "Year Built*", parent: "houseDetails", min: 1900, max: new Date().getFullYear() },
	{ id: "area", placeholder: "Home area (sqft)*", parent: "houseDetails" },
	{ id: "room", placeholder: "Rooms*", parent: "houseDetails", max: 999, min: 0 },
];

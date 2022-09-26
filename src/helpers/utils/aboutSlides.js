import slide_1 from "../../assets/img/slide_1.jpg";
import slide_2 from "../../assets/img/slide_2.jpg";
import slide_3 from "../../assets/img/slide_3.jpg";

export const aboutSlides = [
	{
		id: 1,
		bg: slide_1,
		title: "Skyper Pool Partment",
		text: "112 Glenwood Ave Hyde Park, Boston, MA",
		own: [
			{ icon: <Bed />, text: "4 Beds" },
			{ icon: <Bath />, text: "5 Baths" },
			{ icon: <Car />, text: "1 Garage" },
			{ icon: <Rule />, text: "1200 Sq Ft" },
		],
		price: "$5,250/mo",
	},
	{
		id: 2,
		bg: slide_2,
		title: "New Apartment Nice Wiew",
		text: "Quincy St, Brooklyn, NY, USA",
		own: [
			{ icon: <Bed />, text: "3 Beds" },
			{ icon: <Bath />, text: "2 Baths" },
			{ icon: <Car />, text: "2 Garage" },
			{ icon: <Rule />, text: "800 Sq Ft" },
		],
		price: "$3,500/mo",
	},
	{
		id: 3,
		bg: slide_3,
		title: "Apartment for you",
		text: "112 Glenwood Ave Hyde Park, Boston, MA",
		own: [
			{ icon: <Bed />, text: "6 Beds" },
			{ icon: <Bath />, text: "3 Baths" },
			{ icon: <Car />, text: "2 Garage" },
			{ icon: <Rule />, text: "1500 Sq Ft" },
		],
		price: "$7,000/mo",
	},
];

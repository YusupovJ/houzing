import { ReactComponent as Pin } from "../../assets/svg/pin.svg";
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";
import { ReactComponent as Email } from "../../assets/svg/email.svg";

export const footer = [
	{
		id: 1,
		title: "Contact us",
		cells: [
			{
				id: 1.1,
				icon: <Pin />,
				text: "329 Queensberry Street, North Melbourne VIC 3051, Australia.",
			},
			{
				id: 1.2,
				link: true,
				href: "tel:1234567890",
				icon: <Phone />,
				text: "123 456 7890",
			},
			{
				id: 1.3,
				link: true,
				href: "email:support@houzing.com",
				icon: <Email />,
				text: "support@houzing.com",
			},
		],
	},
	{
		id: 2,
		title: "Discover",
		cells: [
			{
				id: 2.1,
				text: "Chicago",
			},
			{
				id: 2.2,
				text: "Los Angeles",
			},
			{
				id: 2.3,
				text: "Miami",
			},
			{
				id: 2.4,
				text: "New York",
			},
		],
	},
	{
		id: 3,
		title: "Lists by Category",
		cells: [
			{
				id: 3.1,
				text: "Apartments",
			},
			{
				id: 3.2,
				text: "Condos",
			},
			{
				id: 3.3,
				text: "Houses",
			},
			{
				id: 3.4,
				text: "Offices",
			},
			{
				id: 3.5,
				text: "Retail",
			},
			{
				id: 3.6,
				text: "Villas",
			},
		],
	},
	{
		id: 4,
		title: "Lists by Category",
		cells: [
			{
				id: 4.1,
				text: "About Us",
			},
			{
				id: 4.2,
				text: "Terms & Conditions",
			},
			{
				id: 4.3,
				text: "Support Center",
			},
			{
				id: 4.4,
				text: "Contact Us",
			},
		],
	},
];

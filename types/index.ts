import { StaticImageData } from "next/image";
// import { type Icons } from "@/components/icons";
type Icons = any;
export interface NavItem {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	// icon?: keyof typeof Icons;
	icon?: any;
	label?: string;
	description?: string;
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
	items?: NavItemWithChildren[];
}
export interface FooterItem {
	title: string;
	items: {
		title: string;
		href: string;
		external?: boolean;
	}[];
}
export type MainNavItem = NavItemWithOptionalChildren;

export type Product = {
	img: StaticImageData;
	name: string;
	price: number;
};

export type RatingLevel = {
	grade: string;
	value: number;
};

export type SlugProp = {
	params: { slug: string };
};

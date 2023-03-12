interface LinksAction {
	type: string;
	payload: Link;
}

type LinksState = Link[];

interface Link {
	link: string;
	shortened: string;
}

interface FeatureCard {
	icon: string;
	title: string;
	text: string;
}

interface Img {
	icon: string;
	alt: string;
}

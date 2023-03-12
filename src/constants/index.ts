import {
	IconBrandRecognition,
	IconDetailedRecords,
	IconFullyCustomizable,
	IconFacebook,
	IconTwitter,
	IconPinterest,
	IconInstagram,
} from '../assets';

const FEATURES: FeatureCard[] = [
	{
		icon: IconBrandRecognition,
		title: 'Brand Recognition',
		text: "Boost your brand recognition with each link.Generic links don't mean a thing.Branded links help instil confidence in your content.",
	},
	{
		icon: IconDetailedRecords,
		title: 'Detailed Records',
		text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
	},
	{
		icon: IconFullyCustomizable,
		title: 'Fully Customizable',
		text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
	},
];

const SOCIALS: Img[] = [
	{ icon: IconFacebook, alt: 'Facebook icon' },
	{ icon: IconTwitter, alt: 'Twitter icon' },
	{ icon: IconPinterest, alt: 'Pinterest icon' },
	{ icon: IconInstagram, alt: 'Instagram icon' },
];

export { FEATURES, SOCIALS };

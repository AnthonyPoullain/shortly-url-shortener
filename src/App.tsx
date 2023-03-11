import './App.css';
import { useEffect, useState, useReducer } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';

import BrandRecognitionIcon from './assets/icon-brand-recognition.svg';
import DetailedRecordsIcon from './assets/icon-detailed-records.svg';
import FullyCustomizableIcon from './assets/icon-fully-customizable.svg';

import Logo from './assets/logo.svg';

import FacebookIcon from './assets/icon-facebook.svg';
import TwitterIcon from './assets/icon-twitter.svg';
import PinterestIcon from './assets/icon-pinterest.svg';
import InstagramIcon from './assets/icon-instagram.svg';

import ShortenerService from './services/shortener.service';

interface LinksAction {
	type: string;
	payload: Link;
}

type LinksState = Link[];

interface Card {
	key?: number;
	icon: string;
	title: string;
	text: string;
}

interface Link {
	key?: number;
	link: string;
	shortened: string;
}

const cards: Card[] = [
	{
		key: 1,
		icon: BrandRecognitionIcon,
		title: 'Brand Recognition',
		text: "Boost your brand recognition with each link.Generic links don't mean a thing.Branded links help instil confidence in your content.",
	},
	{
		key: 2,
		icon: DetailedRecordsIcon,
		title: 'Detailed Records',
		text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
	},
	{
		key: 3,
		icon: FullyCustomizableIcon,
		title: 'Fully Customizable',
		text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
	},
];

function reducer(state: LinksState, action: LinksAction) {
	switch (action.type) {
		case 'ADD_LINK': {
			const newState = [...state];
			newState.unshift(action.payload);
			return newState;
		}
		default:
			return state;
	}
}

function App() {
	const [links, dispatch] = useReducer(reducer, []);
	const [link, setLink] = useState('');
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		if (clicked && !link) {
			setClicked(false);
		}
		console.log(link);
	}, [link]);

	useEffect(() => {
		console.log(links);
	}, [links]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!link) return;
		const shortened = await ShortenerService.shorten(link);
		if (!shortened) return;
		dispatch({ type: 'ADD_LINK', payload: { link, shortened } });
		setLink('');
	};

	const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
		const shortenedUrl = (e.target as HTMLInputElement)
			?.closest('div')
			?.querySelector('p')?.innerText;
		if (!shortenedUrl) return;
		navigator.clipboard.writeText(shortenedUrl);
		console.log('Copied!');
	};

	return (
		<>
			<Header />
			<main>
				<Hero />
				<div id="shortener" className="h-0 w-0 relative top-[-4rem]" />
				<section className="max-w-screen-full bg-gray-200 ">
					<div className="max-w-screen-xl sm:px-10 px-5 mx-auto translate-y-[-70px] mt-[70px]">
						<div className="h-full bg-primary-violet bg-shorten-mobile sm:bg-shorten-desktop bg-bottom bg-cover w-full p-5 sm:p-12 rounded-md mb-2 relative ">
							<form
								onSubmit={handleSubmit}
								className="flex flex-col sm:flex-row items-center gap-8 sm:gap-5 justify-center"
							>
								<input
									type="text"
									name="link"
									value={link}
									className={`min-h-full h-[44px] text-neutral-dark-violet w-full bg-white rounded-md text-xs sm:text-sm font-medium p-3 sm:p-5 ${clicked && !link ? 'input--error' : ''
										}`}
									onChange={(e) => setLink(e.currentTarget.value)}
									placeholder="Shorten a link here..."
								/>
								<button
									type="submit"
									className="text-sm w-full sm:w-fit text-white font-bold bg-primary-cyan py-3 px-9 rounded-md whitespace-nowrap"
									onClick={() => setClicked(true)}
								>
									Shorten it!
								</button>
							</form>
							{clicked && !link ? (
								<span className="block text-xs mt-2 italic text-medium text-secondary absolute bottom-[4.75rem] sm:bottom-6 ">
									Please add a link
								</span>
							) : null}
						</div>
					</div>
					<div className="max-w-screen-xl sm:px-10 px-5 mx-auto translate-y-[-70px]">
						{links.map((item: Link) => (
							<div
								key={crypto.randomUUID()}
								className="text-sm text-neutral-dark-violet bg-white py-5 sm:py-3 flex flex-col sm:flex-row  sm:items-center justify-between gap-y-3 mt-3 rounded-md px-5 overflow-x-hidden"
							>
								<p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
									{item.link}
								</p>
								<div className="sm:hidden w-[200%] translate-x-[-10%] origin-center h-[.05rem] opacity-10 bg-black my-0.5" />
								<div className="flex sm:flex-row flex-col sm:items-center gap-4 overflow-y-visible">
									<p className="w-full whitespace-nowrap overflow-hidden text-ellipsis text-primary-cyan">
										{item.shortened}
									</p>
									<button
										type="button"
										onClick={handleCopy}
										className="text-white bg-primary-cyan py-2 px-6 rounded-md"
									>
										Copy
									</button>
								</div>
							</div>
						))}
					</div>
				</section>
				<section
					id="features"
					className="max-w-screen-full bg-gray-200 text-center mt-[-2rem]"
				>
					<div className="max-w-screen-xl sm:px-10 px-5 pb-10 pt-10 mx-auto flex flex-col items-center">
						<h2 className="text-2xl sm:text-3xl font-bold text-neutral-dark-violet mb-4">
							Advanced Statistics
						</h2>
						<p className="text-md text-neutral-grayish-violet leading-loose max-w-md">
							Track how your links are performing across the web with our
							advanced statistics dashboard.
						</p>
					</div>
					<div className="max-w-screen-xl sm:px-10 px-5 pb-10 pt-5 mx-auto relative md:grid grid-cols-3 gap-x-10">
						<div className="w-2 h-[75%] md:w-[75%] md:h-2 bg-primary-cyan absolute left-1/2 translate-x-[-50%] md:top-1/2 " />
						{cards.map((card, i) => (
							<div className={`pt-${i * 5}`} key={card.key}>
								<FeatureCard
									title={card.title}
									text={card.text}
									icon={card.icon}
								/>
							</div>
						))}
					</div>
				</section>
				<section className="bg-primary-violet bg-boost-mobile sm:bg-boost-desktop bg-cover bg-center text-center">
					<div className="max-w-screen-xl sm:px-10 px-5 py-20 mx-auto flex flex-col items-center">
						<h2 className="text-white font-bold text-2xl sm:text-3xl mb-6">
							Boost your links today
						</h2>
						<a
							href="#shortener"
							className="text-sm text-white font-bold bg-primary-cyan py-3 px-6 rounded-3xl hover:opacity-70 whitespace-nowrap"
						>
							Get Started
						</a>
					</div>
				</section>
			</main>
			<footer className="bg-neutral-dark-violet text-center md:text-left text-neutral-grayish-violet font-normal ">
				<div className="max-w-screen-xl md:px-10 px-5 py-16 mx-auto md:grid grid-cols-6 gap-2">
					<div className="mb-10 col-span-2">
						<a className="" href="/">
							<img
								className="h-6 block mx-auto md:mx-0 scale-125 w-fit origin-center md:origin-left contrast-200 invert"
								src={Logo}
								alt="Shortly"
							/>
						</a>
					</div>
					<nav className="text-inherit mb-8">
						<h3 className="text-white">Features</h3>
						<ul className="my-4 leading-loose text-sm">
							<li>
								<a className="hover:text-primary-cyan" href="#">
									Link Shortening
								</a>
							</li>
							<li>
								<a className="hover:text-primary-cyan" href="#">
									Branded Links
								</a>
							</li>
							<li>
								<a className="hover:text-primary-cyan" href="#">
									Analytics
								</a>
							</li>
						</ul>
					</nav>
					<nav className="text-inherit mb-8">
						<h3 className="text-white">Ressources</h3>
						<ul className="my-4 leading-loose text-sm">
							<li>
								<a className="hover:text-primary-cyan" href="#">
									Blog
								</a>
							</li>
							<li>
								<a className="hover:text-primary-cyan" href="#">
									Developers
								</a>
							</li>
							<li>
								<a className="hover:text-primary-cyan" href="#">
									Support
								</a>
							</li>
						</ul>
					</nav>
					<nav className="text-inherit mb-8">
						<h3 className="text-white">Company</h3>
						<ul className="my-4 leading-loose text-sm">
							<li>
								<a className="hover:text-primary-cyan" href="#">
									About
								</a>
							</li>
							<li>
								<a className="hover:text-primary-cyan" href="#">
									Our Team
								</a>
							</li>
							<li>
								<a className="hover:text-primary-cyan" href="#">
									Carreers
								</a>
							</li>
							<li>
								<a className="hover:text-primary-cyan" href="#">
									Contact
								</a>
							</li>
						</ul>
					</nav>
					<nav>
						<ul className="w-fit flex gap-4 mx-auto ">
							<li>
								<a href="#">
									<img src={FacebookIcon} alt="Facebook icon" />
								</a>
							</li>
							<li>
								<a href="#">
									<img src={TwitterIcon} alt="Twitter icon" />
								</a>
							</li>
							<li>
								<a href="#">
									<img src={PinterestIcon} alt="Pinterest icon" />
								</a>
							</li>
							<li>
								<a href="#">
									<img src={InstagramIcon} alt="Instagram icon" />
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
}

export default App;

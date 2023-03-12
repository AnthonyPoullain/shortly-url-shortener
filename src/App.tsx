import './App.css';
import { Header, Hero, FeatureCard, Shortener } from './components';
import { Logo } from './assets';
import { FEATURES, SOCIALS } from './constants';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<div id="shortener" className="h-0 w-0 relative top-[-4rem]" />
				<Shortener />
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
						{FEATURES.map((card, i) => (
							<div className={`pt-${i * 5}`} key={crypto.randomUUID()}>
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
							{/* TODO: Social icons hover effect */}
							{SOCIALS.map((social) => (
								<li key={crypto.randomUUID()}>
									<a href="#">
										<img src={social.icon} alt={social.alt} />
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
}

export default App;

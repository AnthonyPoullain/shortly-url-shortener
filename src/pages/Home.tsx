import { Hero, FeatureCard, Shortener } from '../components';
import { FEATURES } from '../constants';

function Home() {
	return (
		<>
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
						Track how your links are performing across the web with our advanced
						statistics dashboard.
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
		</>
	);
}

export default Home;

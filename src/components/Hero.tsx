import Illustration from '../assets/illustration-working.svg';

function Hero() {
	return (
		<section className="max-w-screen-xl sm:px-10 px-5 flex items-center flex-col-reverse sm:flex-row gap-[5vw] pb-20">
			<div className="min-w-[50%] text-center sm:text-left">
				<h1 className="text-4xl text-neutral-dark-violet sm:text-6xl my-3 font-bold leading-tight sm:leading-tight">
					More than just shorter links
				</h1>
				<p className="text-md text-neutral-grayish-violet mb-6">
					Build your brand's recognition and get detailed <br /> insights on how
					your links are performing.
				</p>

				<a
					href="#shortener"
					className="text-sm text-white font-bold bg-primary-cyan py-3 px-6 rounded-3xl hover:opacity-70 whitespace-nowrap"
				>
					Get Started
				</a>
			</div>
			<div className="">
				<img
					src={Illustration}
					alt="Illustration"
					className="max-w-[150%] sm:max-w-none"
				/>
			</div>
		</section>
	);
}

export default Hero;

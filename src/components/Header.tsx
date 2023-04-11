import Logo from '../assets/logo.svg';
import { useComponentVisible } from '../hooks';

/**
 * Renders the header component for the website.
 *
 * @returns {JSX.Element} The JSX Element for the header component.
 */
function Header(): JSX.Element {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	return (
		<header className="max-w-screen-xl sm:px-10 px-5 py-7 sm:py-10 flex items-center justify-between relative mx-auto">
			<div className="flex items-center gap-12">
				<a href="/">
					<img
						className="h-6 block scale-125 origin-left"
						src={Logo}
						alt="Shortly"
					/>
				</a>
				<nav className="hidden sm:block">
					<ul className="text-sm font-bold text-neutral-grayish-violet flex gap-6">
						<li>
							<a href="#features" className="hover:text-neutral-dark-violet">
								Features
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-neutral-dark-violet">
								Pricing
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-neutral-dark-violet">
								Resources
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<nav className="hidden sm:block">
				<ul className="text-sm font-bold text-neutral-grayish-violet flex gap-6">
					<li>
						<a className="hover:text-neutral-dark-violet" href="#">
							Login
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-white font-bold bg-primary-cyan py-2 px-4 rounded-3xl hover:opacity-70 whitespace-nowrap"
						>
							Sign Up
						</a>
					</li>
				</ul>
			</nav>
			<button
				type="button"
				className="w-5 sm:hidden"
				onClick={() => setIsComponentVisible((prev) => !prev)}
			>
				<svg
					className="text-neutral-grayish-violet fill-current"
					viewBox="0 0 448 512"
				>
					<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
				</svg>
			</button>
			{isComponentVisible ? (
				<div
					ref={ref}
					className="absolute block sm:hidden top-[4.5rem] left-1/2 translate-x-[-50%] w-[calc(100vw-40px)]  text-center bg-primary-violet text-white text-sm font-bold p-6 rounded-md"
				>
					<nav>
						<ul className="flex flex-col gap-5">
							<li>
								<a
									onClick={() => setIsComponentVisible(false)}
									href="#features"
								>
									Features
								</a>
							</li>
							<li>
								<a onClick={() => setIsComponentVisible(false)} href="#">
									Pricing
								</a>
							</li>
							<li>
								<a onClick={() => setIsComponentVisible(false)} href="#">
									Resources
								</a>
							</li>
						</ul>
					</nav>
					<div className="w-full h-0.5 opacity-10 bg-white my-6" />
					<nav className="">
						<ul className="text-sm  text-white flex flex-col gap-5 mb-2 ">
							<li>
								<a onClick={() => setIsComponentVisible(false)} href="#">
									Login
								</a>
							</li>
							<li className="">
								<a
									onClick={() => setIsComponentVisible(false)}
									href="#"
									className="text-white font-bold bg-primary-cyan inline-block w-full py-2 px-4 rounded-3xl hover:opacity-70 whitespace-nowrap"
								>
									Sign Up
								</a>
							</li>
						</ul>
					</nav>
				</div>
			) : null}
		</header>
	);
}

export default Header;

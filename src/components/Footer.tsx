import { Logo } from '../assets';
import { SOCIALS } from '../constants';

/**
 * Renders the footer component for the Shortly website.
 *
 * @returns {JSX.Element} The JSX element for the footer component.
 */
function Footer(): JSX.Element {
	return (
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
						{SOCIALS.map((social) => (
							<li key={crypto.randomUUID()}>
								<a href="#">{social.icon}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;

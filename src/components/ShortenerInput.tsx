import { useEffect, useState } from 'react';

function ShortenerInput() {
	const [link, setLink] = useState('');
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		if (clicked && !link) {
			setClicked(false);
		}
	}, [link]);

	return (
		<section className="max-w-screen-full bg-gray-200">
			<div className="max-w-screen-xl sm:px-10 px-5 mx-auto translate-y-[-70px] mt-[70px]">
				<div
					id="shortener"
					className="h-full bg-primary-violet bg-shorten-mobile sm:bg-shorten-desktop bg-bottom bg-cover w-full p-5 sm:p-12 rounded-md mb-2 relative "
				>
					<div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-5 justify-center">
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
					</div>
					{clicked && !link ? (
						<span className="block text-xs mt-2 italic text-medium text-secondary absolute bottom-[4.75rem] sm:bottom-6 ">
							Please add a link
						</span>
					) : null}
				</div>

				<div className="text-sm text-neutral-dark-violet bg-white py-3 flex flex-col sm:flex-row  sm:items-center justify-between gap-y-3 mt-3 rounded-md px-5 overflow-x-hidden">
					<p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
						https://www.frontendmentor.io
					</p>
					<div className="sm:hidden w-[200%] translate-x-[-10%] origin-center h-[.05rem] opacity-10 bg-black my-0.5" />
					<div className="flex sm:flex-row flex-col sm:items-center gap-4 overflow-y-visible">
						<p className="w-full whitespace-nowrap overflow-hidden text-ellipsis text-primary-cyan">
							https://rel.ink/k4lKyk
						</p>
						<button
							type="button"
							className="text-white bg-primary-cyan py-1.5 px-6 rounded-md"
						>
							Copy
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ShortenerInput;

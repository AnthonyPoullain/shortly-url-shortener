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
		<div className="max-w-screen-xl sm:px-10 px-5 mx-auto translate-y-[-70px] mt-[70px]">
			<div className="h-full bg-primary-violet bg-shorten-mobile sm:bg-shorten-desktop bg-bottom bg-cover w-full p-5 sm:p-12 rounded-md mb-2 relative ">
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
		</div>
	);
}

export default ShortenerInput;

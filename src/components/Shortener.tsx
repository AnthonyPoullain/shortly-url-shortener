import { useEffect, useReducer, useState } from 'react';
import ShortenerService from '../services';
import CopyButton from './CopyButton';

function reducer(state: LinksState, action: LinksAction) {
	switch (action.type) {
		case 'ADD_LINK': {
			const newState = [...state];
			newState.unshift(action.payload);

			// Limit number of links to 5 at a time
			if (!!newState.length && newState.length > 5) newState.pop();
			localStorage.setItem('links', JSON.stringify(newState));
			return newState;
		}
		default:
			return state;
	}
}

function Shortener() {
	const [links, dispatch] = useReducer(reducer, []);
	const [link, setLink] = useState('');
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		if (clicked && !link) {
			setClicked(false);
		}
	}, [link]);

	// Handle local storage
	useEffect(() => {
		const links: Link[] =
			JSON.parse(localStorage.getItem('links') as string) || [];

		// If links in localstorage...
		if (!!links.length) {
			links
				// ...filter out any duplicates...
				.filter(
					(obj, index, self) =>
						index ===
						self.findIndex(
							(t) => t.shortened === obj.shortened && t.link === obj.link
						)
				)
				// ...update the UI with the existing links on page load
				.forEach((link: Link) => {
					dispatch({
						type: 'ADD_LINK',
						payload: { link: link.link, shortened: link.shortened },
					});
				});
		}

		// If no links, links key = empty array
		localStorage.setItem('links', JSON.stringify(links));
	}, []);

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
	};

	useEffect(() => {
		if (clicked && !link) {
			setClicked(false);
		}
	}, [link]);

	return (
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
							<CopyButton onClick={handleCopy} delay={5} />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Shortener;

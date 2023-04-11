/**
 * Renders a LinkCard component that displays a link and its shortened version, along with a copy button.
 * @param {Object} props - The props object containing the link and shortened string to be displayed.
 * @param {string} props.link - The original link to be displayed.
 * @param {string} props.shortened - The shortened version of the link to be displayed.
 *
 * @returns {JSX.Element} - Returns a JSX element that displays the link and shortened version, along with a copy button.
 */
function LinkCard({
	link,
	shortened,
}: {
	link: string;
	shortened: string;
}): JSX.Element {
	return (
		<div className="text-sm text-neutral-dark-violet bg-white py-5 sm:py-3 flex flex-col sm:flex-row  sm:items-center justify-between gap-y-3 mt-3 rounded-md px-5 overflow-x-hidden">
			<p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
				{link}
			</p>
			<div className="sm:hidden w-[200%] translate-x-[-10%] origin-center h-[.05rem] opacity-10 bg-black my-0.5" />
			<div className="flex sm:flex-row flex-col sm:items-center gap-4 overflow-y-visible">
				<p className="w-full whitespace-nowrap overflow-hidden text-ellipsis text-primary-cyan">
					{shortened}
				</p>
				<button
					type="button"
					className="text-white bg-primary-cyan py-2 px-6 rounded-md"
				>
					Copy
				</button>
			</div>
		</div>
	);
}

export default LinkCard;

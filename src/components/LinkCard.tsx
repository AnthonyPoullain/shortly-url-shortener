function LinkCard({ link, shortened }: { link: string; shortened: string }) {
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

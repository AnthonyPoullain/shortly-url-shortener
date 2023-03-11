function FeatureCard({
	icon,
	title,
	text,
}: {
	icon: string;
	title: string;
	text: string;
}) {
	return (
		<div className="pb-10">
			<div className="bg-white px-10 pb-10 rounded-md flex flex-col items-center mt-10 relative z-1">
				<div className="w-20 h-20 bg-primary-violet flex md:self-start items-center justify-center rounded-full translate-y-[-50%]">
					<img src={icon} alt={`${title} icon`} />
				</div>
				<div className="text-center md:text-left">
					<h3 className="text-xl text-neutral-dark-violet font-bold mb-3">
						{title}
					</h3>
					<p className="text-sm text-neutral-grayish-violet leading-loose">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
}

export default FeatureCard;

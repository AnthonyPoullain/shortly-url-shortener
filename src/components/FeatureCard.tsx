/**
 * A reusable component that renders a feature card with an icon, title, and text.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.icon - The URL of the icon to display in the feature card.
 * @param {string} props.title - The title of the feature to display in the feature card.
 * @param {string} props.text - The text description of the feature to display in the feature card.
 *
 * @returns {JSX.Element} A React component that renders a feature card with the provided icon, title, and text.
 *
 * @example
 * <FeatureCard
 *   icon="https://example.com/icon.png"
 *   title="Example Feature"
 *   text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget bibendum bibendum, velit elit bibendum ipsum, eu bibendum sapien sapien vel sapien."
 * />
 */
function FeatureCard({
	icon,
	title,
	text,
}: {
	icon: string;
	title: string;
	text: string;
}): JSX.Element {
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

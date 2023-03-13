import { useEffect, useState } from 'react';

function CopyButton({
	onClick,
	delay,
}: {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	delay: number;
}) {
	const [clicked, setClicked] = useState(false);

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		setClicked(true);
		onClick(e);
	}

	useEffect(() => {
		async function wait() {
			await new Promise((resolve) => setTimeout(resolve, 1000 * delay));
			setClicked(false);
		}

		if (clicked) {
			wait();
		}
	}, [clicked]);

	return (
		<button
			type="button"
			onClick={handleClick}
			disabled={clicked}
			className={`text-white font-bold ${clicked ? 'bg-neutral-dark-blue hover:shadow-none' : 'bg-primary-cyan'
				} py-2 px-6 rounded-md`}
		>
			{clicked ? 'Copied!' : 'Copy'}
		</button>
	);
}

export default CopyButton;

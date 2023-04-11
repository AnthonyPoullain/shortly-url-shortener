import { useState, useEffect, useRef } from 'react';

/**
 * A custom React hook that allows for detecting clicks outside of a component.
 *
 * @param initialIsVisible - A boolean indicating whether the component is initially visible or not.
 *
 * @returns An object containing a ref to the component, a boolean indicating whether the component is currently visible, and a function to set the visibility of the component.
 */
export default function useComponentVisible(initialIsVisible: boolean) {
	const [isComponentVisible, setIsComponentVisible] =
		useState(initialIsVisible);
	const ref = useRef<HTMLDivElement>(null);

	/**
	 * A function that handles clicks outside of the component.
	 * @param e - The event object.
	 */
	const handleClickOutside = (e: Event) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			e.stopPropagation();
			setIsComponentVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	return { ref, isComponentVisible, setIsComponentVisible };
}

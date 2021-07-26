import React, { useEffect, useState } from 'react'

export default function useScroll() {
	const [scrollPosition, setScrollPosition] = useState(null);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);

		return () => document.removeEventListener('scroll', handleScroll)
	}, []);

	function handleScroll() {
		setScrollPosition(window.scrollY);
	}

	return scrollPosition;
}

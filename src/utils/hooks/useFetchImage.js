import axios from "axios";
import { useEffect, useState } from "react";

const api = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page, searchQuery) {
	const [Images, setImages] = useState([]);
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	function fetch() {
		const url = searchQuery === null ? 'photos?' : `search/photos?query=${searchQuery}&`;

		axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
			.then((res) => {
				searchQuery === null ? fetchRandom(res) : fetchSearch(res);
			}).catch((e) => {
				setErrors(["Unable to fetch images"]);
				setIsLoading(false);
			});
	}

	function fetchRandom(res) {
		setImages([...Images, ...res.data]);
		setIsLoading(false)
	}

	function fetchSearch(res) {
		page > 1 ? setImages([...Images, ...res.data.results]) : setImages([...res.data.results]);
		setIsLoading(false);
	}

	useEffect(() => {
		setIsLoading(true);
		fetch();
		// eslint-disable-next-line
	}, [page, searchQuery]);

	return [Images, setImages, errors, isLoading];
}

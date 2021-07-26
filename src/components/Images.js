import React, { useState } from 'react'
import Image from './Image';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebounce from '../utils/hooks/useDebounce';
import useFetchImage from '../utils/hooks/useFetchImage';

export default function Images() {
	const debounce = useDebounce();
	const [page, setPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState(null);
	const [Images, setImages, errors, isLoading] = useFetchImage(page, searchQuery);

	function handleRemove(index) {
		setImages([...Images.slice(0, index), ...Images.slice(index + 1, Images.length)]);
	}

	function ShowImages() {
		return <InfiniteScroll
			dataLength={Images.length}
			next={() => setPage(page + 1)}
			hasMore={true}
			className="flex flex-wrap"
		>
			{Images.map((img, index) => (
				<Image image={img.urls.regular} index={index} handleRemove={handleRemove} key={index} />
			))}
		</InfiniteScroll>

	}

	function ShowContent() {
		return (
			<div>
				<ShowImages />
				{isLoading && <Loading />}
			</div>
		)
	}

	function handleInput(e) {
		const query = e.target.value;

		debounce(() => setSearchQuery(query))
	}

	return (
		<section>
			<div className="flex justify-between my-5">
				<div className="w-full">
					<input
						type="text"
						id="inputBox"
						placeholder="Search photos"
						className="p-2 border w-full shadow rounded"
						onChange={handleInput} />
				</div>
			</div>
			{
				errors.length > 0 ? (
					<div className="flex h-screen">
						<p className="m-auto">{errors[0]}</p>
					</div>) : <ShowContent />
			}
		</section >)
}

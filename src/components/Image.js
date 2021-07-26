import React, { useState } from 'react'

export default function Image({ image, index, handleRemove }) {
	const [isHoveringImage, setIsHoveringImage] = useState(false);

	return (
		<div
			className="w-1/3 p-1 border flex justify-center"
			key={index}>
			<div className="relative"
				onMouseEnter={() => setIsHoveringImage(true)}
				onMouseLeave={() => setIsHoveringImage(false)}
			>
				<i className={
					`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 
								${isHoveringImage ? "" : "hidden"
					}`
				}
					onClick={() => handleRemove(index)}
				></i>
				<img
					alt="..."
					src={image}
					width="100%"
					height="auto"
				/>
			</div>
		</div>
	)
}

import { useState } from 'react'

function Carousel({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handlePrevious = () => {
		setCurrentIndex((current) =>
			current === 0 ? images.length - 1 : current - 1
		)
	}

	const handleNext = () => {
		setCurrentIndex((current) =>
			current === images.length - 1 ? 0 : current + 1
		)
	}

	return (
		<div className="carousel">
			<button onClick={handlePrevious}>Previous</button>
			<img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
			<button onClick={handleNext}>Next</button>
		</div>
	)
}

export default Carousel

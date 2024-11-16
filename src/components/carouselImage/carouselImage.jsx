function CarouselImage ({className = 'm-3', src = "https://randomuser.me/api/portraits/men/1.jpg"}) {
    return (
        <>
            <img className={className} src={src} />
        </>
    )
}
export default CarouselImage

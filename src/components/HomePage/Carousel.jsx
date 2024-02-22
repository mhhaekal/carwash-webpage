const Carousel = () => {
    return (
        <div>
            <div className="bg-red-700 carousel carousel-center p-4 lg:space-x-0 space-x-2 w-96 px-5 lg:hidden mt-5">
                <div className="carousel-item w-full">
                    <img src="./Assets/Carousel/Foto1.jpg" className="w-full" alt="Foto1" />
                </div>
                <div className="carousel-item w-full">
                    <img src="./Assets/Carousel/Foto2.jpg" className="w-full" alt="Foto1" />
                </div>
                <div className="carousel-item w-full">
                    <img src="./Assets/Carousel/Foto3.jpg" className="w-full" alt="Foto1" />
                </div>
                <div className="carousel-item w-full">
                    <img src="./Assets/Carousel/Foto4.jpg" className="w-full" alt="Foto1" />
                </div>
                <div className="carousel-item w-full">
                    <img src="./Assets/Carousel/Foto5.jpg" className="w-full" alt="Foto1" />
                </div>
                <div className="carousel-item w-full">
                    <img src="./Assets/Carousel/Foto6.jpg" className="w-full" alt="Foto1" />
                </div>
                <div className="carousel-item w-full">
                    <img src="./Assets/Carousel/Foto7.jpg" className="w-full" alt="Foto1" />
                </div>
            </div>

            <div className="grid place-content-center pt-10">
                <div className="carousel hidden lg:flex space-x-2 bg-red-700 p-4">
                    <div className="carousel-item w-[350px]">
                        <img src="./Assets/Carousel/Foto1.jpg" alt="Foto" />
                    </div>
                    <div className="carousel-item w-[350px]">
                        <img src="./Assets/Carousel/Foto2.jpg" alt="Foto" />
                    </div>
                    <div className="carousel-item w-[350px]">
                        <img src="./Assets/Carousel/Foto3.jpg" alt="Foto" />
                    </div>
                    <div className="carousel-item w-[350px]">
                        <img src="./Assets/Carousel/Foto4.jpg" alt="Foto" />
                    </div>
                    <div className="carousel-item w-[350px]">
                        <img src="./Assets/Carousel/Foto5.jpg" alt="Foto" />
                    </div>
                    <div className="carousel-item w-[350px]">
                        <img src="./Assets/Carousel/Foto6.jpg" alt="Foto" />
                    </div>
                    <div className="carousel-item w-[350px]">
                        <img src="./Assets/Carousel/Foto7.jpg" alt="Foto" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carousel
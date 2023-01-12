import React from 'react';

const Carousel = () => {
    return (
        <>
            {/* <div className="h-16"></div> */}

            <div className="carousel relative w-full h-[110vh] background"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')` }}>
                <div className="absolute inset-0 bg-sky-200/20 flex justify-center items-center">
                    <span className='text-9xl uppercase text-white font-medium'>Programing</span>
                </div>
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full background"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')` }}>
                    <div className="absolute inset-0 bg-sky-200/20 flex justify-center items-center">
                        <span className='text-9xl uppercase text-white font-medium'>UI/UX Designer</span>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Carousel;

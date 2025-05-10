import React, { useState, useEffect } from 'react';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight  } from 'react-icons/hi';

const slides = [
    { url: `./place.png` },
    { url: `./eating.png` },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyle = {
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.3s ease-out',
        width: `100%`,
        display: 'flex',
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='relative h-[773px] w-full m-auto group overflow-hidden'>
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-40 lg:bg-opacity-30 p-5 md:p-20 z-10 flex items-center justify-center bg-cover">
                <div
                    onClick={prevSlide}
                    className='hidden group-hover:block absolute bottom-[50%] -translate-x-0 translate-y-[50%] left-0 text-2xl max-h-[600px] h-12 p-2 rounded-full m-2 opacity-80 shadow-md bg-black/50 text-gray-100 cursor-pointer hover:bg-black/20 hover:text-black'>
                    <HiOutlineArrowSmLeft size={20} className='text-slate-400 w-8 my-1.5' />
                </div>
                <div
                    onClick={nextSlide}
                    className='hidden group-hover:block absolute bottom-[50%] -translate-x-0 translate-y-[50%] right-0 text-2xl max-h-[600px] h-12 p-2 rounded-full m-2 opacity-80 shadow-md bg-black/50 text-gray-100 cursor-pointer hover:bg-black/20 hover:text-black'>
                    <HiOutlineArrowSmRight size={20} className="text-slate-400 w-8 my-1.5"/>
                </div>
            </div>
            <div style={sliderStyle} className='w-full h-full'>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{backgroundImage: `url(${slide.url})`}}
                        className='w-full h-full bg-center bg-cover flex-shrink-0'
                    ></div>
                ))}
            </div>
            <div className="hidden group-hover:flex absolute bottom-5 w-full  justify-center z-30">
                <div className='bg-black/50 p-1.5 rounded-full opacity-80'>
                    {slides.map((slide, index) => (
                        <span
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`mx-1 cursor-pointer rounded-full ${
                                currentIndex === index ? 'bg-slate-50' : 'bg-slate-400'
                            } h-3 w-3 inline-block`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    )
}
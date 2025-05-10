import React from 'react'
import { BsInstagram, BsTwitter, BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { FaFacebookSquare, FaTiktok, FaYoutube, FaTripadvisor, FaGoodreads } from 'react-icons/fa';

export default function Footer(){
    return(
        <div>
            <footer className="bottom-0 border-t-2 border-stone-500 w-full from-[#D4AC0D] via-[#FDEBD0] to-[#FDEBD0] bg-gradient-to-b text-center px-8 z-10">
            <div className='flex justify-center items-center pt-6 pb-2'>
                <span className='button-selection mx-1 text-white'>
                    <BsInstagram />
                </span>
                <span className='button-selection mx-1 text-white'>
                    <BsTwitter />
                </span>
                <span className='button-selection mx-1 text-white'>
                    <BsLinkedin />
                </span>
                <span className='button-selection mx-1 text-white'>
                    <BsWhatsapp />
                </span>
                <span className='button-selection mx-1 text-white'>
                    <FaFacebookSquare />
                </span>
                <span className='button-selection mx-1 text-white'>
                    <FaTiktok />
                </span>
            </div>

            <div className='grid grid-cols-1 w-full p-4 pb-8'>
                <div className="flex flex-wrap justify-center text-center overflow-hidden">
                    <div className="max-w-7xl w-full h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=..."
                            className="w-full h-[350px] rounded-md"
                            style={{ border: 0 }}
                        ></iframe>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}
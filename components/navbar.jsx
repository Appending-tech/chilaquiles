import { useState, useEffect, useRef } from 'react';
import { MdOutlineMenuBook } from "react-icons/md";
import { useRouter } from 'next/router'

const menuItems = [
    { key: 1, name: "Menú", link: "/menu", icon:<MdOutlineMenuBook className='w-6 h-6'/>},
]

export default function Navbar({ media }) {
    const dropdownRef = useRef(null);
    const router = useRouter();
    const [isMenuPage, setIsMenuPage] = useState(false);

    useEffect(() => {
        if (router.pathname === '/menu') {
            setIsMenuPage(true);
        } else {
            setIsMenuPage(false);
        }
    }, [router.pathname]);

    useEffect(() => {
        const clickListener = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', clickListener);
        return () => {
            document.removeEventListener('click', clickListener);
        };
    }, []);

    return (
        <header className={` from-[#1E8449] to-[#2eb165] bg-gradient-to-bl ${
                isMenuPage
                ? "relative w-full z-20 shadow-lg"
                : "fixed w-full z-20 transition-all duration-300 ease-in-out shadow-lg"}`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="flex items-center space-x-2 transition-all duration-500 ease-in-out hover:scale-105">
                        <img className="h-16 w-auto p-1" src='./chilakos.png' alt="Logo" />
                    </a>
                </div>
                {menuItems.map((item) => (
                        <a
                            key={item.key}
                            href={item.link}
                            className="flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-105" 
                        >
                            <span className='text-slate-100 p-3 rounded-full bg-web-primary shadow'>
                            {item.icon}
                            </span>
                            <span className='pl-3 text-slate-800 font-semibold'>
                            {item.name}
                            </span>
                        </a>
                    ))}
            </nav>
        </header>
    )
}

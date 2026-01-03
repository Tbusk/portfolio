import hamburgerIcon from '../../assets/hamburger_icon.svg';
import { useState } from "preact/hooks";

export default function Header() {

    const navbarItemStyle = 'hover:underline hover:scale-110 text-xl hidden sm:block';
    const navbarItemStyleMobile = 'hover:underline hover:scale-110 text-xl py-3 text-center';

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="absolute container">
                <div>

                    {/* Non-Mobile */}
                    <ul className="gap-8 justify-center hidden sm:flex py-8">
                        <li className={navbarItemStyle}>
                            <a href="#home">
                                Home
                            </a>
                        </li>
                        <li className={navbarItemStyle}>
                            <a href="#experience">
                                Experience
                            </a>
                        </li>
                        <li className={navbarItemStyle}>
                            <a href="#education">
                                Education
                            </a>
                        </li>
                        <li className={navbarItemStyle}>
                            <a href="#projects">
                                Projects
                            </a>
                        </li>
                        <li className={navbarItemStyle}>
                            <a href="#opensource">
                                Open Source
                            </a>
                        </li>
                    </ul>

                    {/* Mobile */}
                    <div className="sm:hidden flex fixed w-full h-full justify-end">
                        <div className="fixed pr-4 pt-2">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-white p-2 rounded-full border-2 border-gray-100">
                                <img src={hamburgerIcon} alt="Hamburger Icon" height={28}
                                     width={28}/>
                            </button>
                        </div>

                        {isMenuOpen && (
                            <div className="h-screen w-screen bg-white">
                                <div className="text-2xl text-center font-bold pb-3 py-4">
                                    Pages
                                </div>
                                <ul className="flex-row justify-center">
                                    <li className={navbarItemStyleMobile}>
                                        <a href="#home" onClick={() => setIsMenuOpen(false)}>
                                            Home
                                        </a>
                                    </li>
                                    <li className={navbarItemStyleMobile}>
                                        <a href="#experience" onClick={() => setIsMenuOpen(false)}>
                                            Experience
                                        </a>
                                    </li>
                                    <li className={navbarItemStyleMobile}>
                                        <a href="#education" onClick={() => setIsMenuOpen(false)}>
                                            Education
                                        </a>
                                    </li>
                                    <li className={navbarItemStyleMobile}>
                                        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                                            Projects
                                        </a>
                                    </li>
                                    <li className={navbarItemStyleMobile}>
                                        <a href="#opensource" onClick={() => setIsMenuOpen(false)}>
                                            Open Source
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </nav>
        </>
    );
}
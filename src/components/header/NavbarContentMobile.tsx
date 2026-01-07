import hamburgerIcon from "../../assets/hamburger_icon.svg";
import HeaderListItemMobile from "./HeaderListItemMobile.tsx";
import { useState } from "preact/hooks";

export default function NavbarContentMobile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="md:hidden flex fixed w-full h-full justify-end">
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
                            <HeaderListItemMobile name="Home" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} index={0}/>
                            <HeaderListItemMobile name="Experience" id="experience" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} index={1}/>
                            <HeaderListItemMobile name="Skills" id="skills" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} index={2}/>
                            <HeaderListItemMobile name="Education" id="education" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} index={3}/>
                            <HeaderListItemMobile name="Projects" id="projects" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} index={4}/>
                            <HeaderListItemMobile name="Open Source" id="open-source" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} index={5}/>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
import HeaderListItemMobile from "./HeaderListItemMobile.tsx";
import { useState } from "preact/hooks";

export default function NavbarContentMobile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="md:hidden flex justify-end">
            <div className="fixed top-4 right-4 z-50">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-white p-2 rounded-full border-2 border-gray-100">
                    <img src={"/assets/icons/hamburger_icon.svg"} alt="Hamburger Icon" height={28}
                         width={28}/>
                </button>
            </div>

            {isMenuOpen && (
                <div className="h-screen w-screen bg-white">
                    <div className="text-2xl px-4 font-bold pb-3 py-4">
                        Pages
                    </div>
                    <ul className="flex-row justify-center">
                        <HeaderListItemMobile name="Home" id="" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} key={0}/>
                        <HeaderListItemMobile name="Experience" id="experience" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} key={1}/>
                        <HeaderListItemMobile name="Education" id="education" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} key={2}/>
                        <HeaderListItemMobile name="Projects" id="projects" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} key={3}/>
                        <HeaderListItemMobile name="Open Source" id="open-source" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} key={4}/>
                    </ul>
                </div>
            )}
        </div>
    );
}
import HeaderListItemMobile from "./HeaderListItemMobile.tsx";
import { useState } from "preact/hooks";

export default function NavbarContentMobile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const darkmode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return (
        <div className="md:hidden flex justify-end">
            <div className="fixed top-4 right-4 z-50">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color) p-2 rounded-full border-2 border-(--lightmode-border-color) dark:border-(--darkmode-border-color)">
                    {darkmode ? (
                        <img src={"/assets/icons/darkmode/hamburger_icon_dark.svg"} alt="Hamburger Icon" height={28}
                             width={28}/>
                    ) : (
                        <img src={"/assets/icons/lightmode/hamburger_icon_light.svg"} alt="Hamburger Icon" height={28}
                             width={28}/>
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <div className="h-screen w-screen bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color)">
                    <div className="text-2xl px-4 font-bold pb-3 py-4 dark:text-(--darkmode-text-color-primary)">
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
import NavbarContentMobile from "./NavbarContentMobile.tsx";
import NavbarContent from "./NavbarContent.tsx";

export default function Header() {

    return (
        <header className="sticky top-0 bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color) w-screen z-50">
            <nav className="absolute w-screen bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color) border-b-2 border-(--lightmode-border-color) dark:border-(--darkmode-border-color)">
                <NavbarContent/>
                <NavbarContentMobile/>
            </nav>
        </header>
    );
}
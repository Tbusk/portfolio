import NavbarContentMobile from "./NavbarContentMobile.tsx";
import NavbarContent from "./NavbarContent.tsx";
import HeaderNameItem from "./HeaderNameItem.tsx";
import myInfoJson from "../../data/my-info.json";

export default function Header() {

    const myInfo = myInfoJson;

    return (
        <header className="sticky top-0 bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color) z-50">
            <nav
                className="hidden md:flex md:pb-4 md:pt-2 md:justify-between md:items-end bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color) border-b-2 border-(--lightmode-border-color) dark:border-(--darkmode-border-color)">
                <HeaderNameItem name={`${myInfo.firstName} ${myInfo.lastName}`} />
                <NavbarContent/>
            </nav>

            <NavbarContentMobile/>
        </header>
    );
}
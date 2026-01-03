import NavbarContentMobile from "./NavbarContentMobile.tsx";
import NavbarContent from "./NavbarContent.tsx";

export default function Header() {

    return (
        <>
            <nav className="absolute container">
                <NavbarContent/>
                <NavbarContentMobile/>
            </nav>
        </>
    );
}
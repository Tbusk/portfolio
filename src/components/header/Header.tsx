import NavbarContentMobile from "./NavbarContentMobile.tsx";
import NavbarContent from "./NavbarContent.tsx";

export default function Header() {

    return (
        <div className="sticky top-0 bg-white w-screen">
            <nav className="absolute w-screen bg-white border-b-2 border-gray-200">
                <NavbarContent/>
                <NavbarContentMobile/>
            </nav>
        </div>
    );
}
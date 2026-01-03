import HeaderListItem from "./HeaderListItem.tsx";

export default function NavbarContent() {
    return (
        <>
            <ul className="gap-8 justify-center hidden md:flex py-8">
                <HeaderListItem name="Home" id="home" />
                <HeaderListItem name="Experience" id="experience" />
                <HeaderListItem name="Skills" id="skills" />
                <HeaderListItem name="Education" id="education" />
                <HeaderListItem name="Projects" id="projects" />
                <HeaderListItem name="Open Source" id="opensource" />
            </ul>
        </>
    );
}
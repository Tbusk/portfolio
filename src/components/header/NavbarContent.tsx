import HeaderListItem from "./HeaderListItem.tsx";

export default function NavbarContent() {
    return (
        <>
            <ul className="gap-8 justify-center hidden md:flex">
                <HeaderListItem name="Home" index={0}/>
                <HeaderListItem name="Experience" id="experience" index={1} />
                <HeaderListItem name="Education" id="education" index={2} />
                <HeaderListItem name="Projects" id="projects" index={3} />
                <HeaderListItem name="Open Source" id="open-source" index={4} />
            </ul>
        </>
    );
}
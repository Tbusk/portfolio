import HeaderListItem from "./HeaderListItem.tsx";

export default function NavbarContent() {
    return (
        <>
            <ul className="gap-8 justify-center hidden md:flex py-8">
                <HeaderListItem name="Home" index={0}/>
                <HeaderListItem name="Experience" id="experience" index={1} />
                <HeaderListItem name="Skills" id="skills" index={2} />
                <HeaderListItem name="Education" id="education" index={3} />
                <HeaderListItem name="Projects" id="projects" index={4} />
                <HeaderListItem name="Open Source" id="open-source" index={5} />
            </ul>
        </>
    );
}
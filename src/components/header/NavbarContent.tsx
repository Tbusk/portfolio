import HeaderListItem from "./HeaderListItem.tsx";

export default function NavbarContent() {
    return (
        <ul className="gap-8 justify-center hidden md:flex md:h-22 md:px-4 md:items-end">
            <HeaderListItem name="Home" id="" key={0}/>
            <HeaderListItem name="Experience" id="experience" key={1}/>
            <HeaderListItem name="Education" id="education" key={2}/>
            <HeaderListItem name="Projects" id="projects" key={3}/>
            <HeaderListItem name="Open Source" id="open-source" key={4}/>
            <HeaderListItem name="Contact" id="contact-me" key={5}/>
        </ul>
    );
}
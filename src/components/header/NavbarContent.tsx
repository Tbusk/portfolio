import HeaderListItem from "./HeaderListItem.tsx";
import { HeaderGitHubIcon } from "./HeaderGitHubIcon.tsx";
import { HeaderLinkedInIcon } from "./HeaderLinkedInIcon.tsx";
import myInfoJson from "../../data/my-info.json";
import { HeaderModeIcon } from "./HeaderModeIcon.tsx";

export default function NavbarContent() {

    const myInfo = myInfoJson;

    return (
        <ul className="hidden md:flex gap-3 md:items-end">
            <HeaderListItem name="Projects" id="projects" key={0}/>
            <HeaderListItem name="Open Source" id="open-source" key={1}/>
            <HeaderGitHubIcon link={`https://github.com/${myInfo.githubHandle}`}/>
            <HeaderLinkedInIcon link={`https://linkedin.com/in/${myInfo.linkedInHandle}`}/>
            <HeaderModeIcon />
        </ul>
    );
}
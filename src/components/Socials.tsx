import githubIcon from '../assets/github_icon.svg';
import linkedinIcon from '../assets/linkedin_icon.svg';
import Social from "./Social.tsx";

export default function Socials() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center gap-3 py-8">
                <Social
                    name="Github"
                    link="https://github.com/Tbusk"
                    logo={githubIcon}
                    logoAlt="GitHub Icon"
                    imageHeight={32}
                    imageWidth={32}
                />
                <Social
                    name="LinkedIn"
                    link="https://www.linkedin.com/in/trevor-busk/"
                    logo={linkedinIcon}
                    logoAlt="LinkedIn Icon"
                    imageHeight={26}
                    imageWidth={26}
                />
            </div>
        </>
    );
}
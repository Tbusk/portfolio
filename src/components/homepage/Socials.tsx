import Social, { type SocialProps } from "./Social.tsx";
import socialsJson from '../../data/socials.json';

export default function Socials() {

    const {socials} = socialsJson;

    const darkmode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return (
        <div className="flex flex-col md:flex-row justify-center gap-3 py-8">
            {socials && socials.length > 0 && socials.filter(social => !darkmode && social.mode === 'light').map((socialItem: SocialProps, index: number) =>
                <Social
                    name={socialItem.name}
                    link={socialItem.link}
                    logo={socialItem.logo}
                    logoAlt={socialItem.logoAlt}
                    imageHeight={socialItem.imageHeight}
                    imageWidth={socialItem.imageWidth}
                    key={index}
                    mode={socialItem.mode}
                />
            )}
            {socials && socials.length > 0 && socials.filter(social => darkmode && social.mode === 'dark').map((socialItem: SocialProps, index: number) =>
                <Social
                    name={socialItem.name}
                    link={socialItem.link}
                    logo={socialItem.logo}
                    logoAlt={socialItem.logoAlt}
                    imageHeight={socialItem.imageHeight}
                    imageWidth={socialItem.imageWidth}
                    key={index}
                    mode={socialItem.mode}
                />
            )}
        </div>
    );
}
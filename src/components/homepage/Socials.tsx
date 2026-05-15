import Social, { type SocialProps } from "./Social.tsx";
import socialsJson from '../../data/socials.json';

export default function Socials() {

    const {socials} = socialsJson;

    return (
        <div className="flex flex-col md:flex-row justify-center gap-3 py-8">
            {socials && socials.length > 0 && socials.map((socialItem: SocialProps, index: number) =>
                <Social
                    name={socialItem.name}
                    link={socialItem.link}
                    logo={socialItem.logo}
                    logoAlt={socialItem.logoAlt}
                    imageHeight={socialItem.imageHeight}
                    imageWidth={socialItem.imageWidth}
                    key={index}
                />
            )}
        </div>
    );
}
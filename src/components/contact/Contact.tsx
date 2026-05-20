import myInfoJson from '../../data/my-info.json';
import socialsJson from '../../data/socials.json';

export default function Contact() {

    const myInfo = myInfoJson;
    const socials = socialsJson;
    const linkedInLink = socials.socials.find(social => social.name.toLowerCase() === "linkedin");
    const githubLink = socials.socials.find(social => social.name.toLowerCase() === "github");

    return (
        <div>
            <div className="text-2xl font-bold dark:text-(--darkmode-text-color-tertiary) pb-4">
                Want to connect?
            </div>

            {myInfo.collaborationStatement && (
                <div className="text-lg dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-tertiary) pb-6">
                    {myInfo.collaborationStatement}
                </div>
            )}

            {githubLink && (
                <>
                    <div className="text-lg font-bold dark:text-(--darkmode-text-color-tertiary) pb-2">
                        GitHub
                    </div>

                    <div className="pb-6">
                        <a target="_blank" rel="noreferrer" href={githubLink.link} className="underline dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) dark:hover:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-primary)">
                            {githubLink.link.indexOf("//") != -1 ? githubLink.link.substring(githubLink.link.indexOf("//") + 2) : githubLink.link}
                        </a>
                    </div>
                </>
            )}

            {linkedInLink && (
                <>
                    <div className="text-lg font-bold dark:text-(--darkmode-text-color-tertiary) pb-2">
                        LinkedIn
                    </div>

                    <div className="pb-6">
                        <a target="_blank" rel="noreferrer" href={linkedInLink.link} className="underline dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) dark:hover:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-primary)">
                            {linkedInLink.link.indexOf("//") != -1 ? linkedInLink.link.substring(linkedInLink.link.indexOf("//") + 2) : linkedInLink.link}
                        </a>
                    </div>
                </>
            )}

            {myInfo.emailAddress && (
                <>
                    <div className="text-lg font-bold dark:text-(--darkmode-text-color-tertiary) pb-2">
                        Email
                    </div>

                    <div className="pb-6">
                        <a target="_blank" rel="noreferrer" href={`mailto:${myInfo.emailAddress}`} className="underline dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) dark:hover:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-primary)">
                            {myInfo.emailAddress}
                        </a>
                    </div>
                </>
            )}

            {myInfo.phoneNumber && (
                <>

                    <div className="text-lg font-bold dark:text-(--darkmode-text-color-tertiary) pb-2">
                        Phone
                    </div>

                    <div className="pb-6">
                        <a target="_blank" rel="noreferrer" href={`tel:${myInfo.phoneNumber}`} className="underline dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) dark:hover:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-primary)">
                            {myInfo.phoneNumber}
                        </a>
                    </div>
                </>
            )}
        </div>
    );
}
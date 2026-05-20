import myInfoJson from '../../data/my-info.json';
import socialsJson from '../../data/socials.json';

export default function Contact() {

    const myInfo = myInfoJson;
    const socials = socialsJson;
    const linkedInLink = socials.socials.find(social => social.name.toLowerCase() === "linkedin");
    const githubLink = socials.socials.find(social => social.name.toLowerCase() === "github");

    return (
        <div>
            <h2 className="text-2xl font-bold dark:text-(--darkmode-text-color-tertiary) pb-4">
                Want to connect?
            </h2>

            {myInfo.collaborationStatement && (
                <p className="text-lg dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-tertiary) pb-6">
                    {myInfo.collaborationStatement}
                </p>
            )}

            {githubLink && (
                <>
                    <h3 className="text-lg font-bold dark:text-(--darkmode-text-color-tertiary) pb-2">
                        GitHub
                    </h3>

                    <div className="pb-6">
                        <a target="_blank" rel="noreferrer" href={githubLink.link} className="underline dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) dark:hover:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-primary)">
                            {githubLink.link.indexOf("//") != -1 ? githubLink.link.substring(githubLink.link.indexOf("//") + 2) : githubLink.link}
                            <span className="sr-only">(opens in a new tab)</span>
                        </a>
                    </div>
                </>
            )}

            {linkedInLink && (
                <>
                    <h3 className="text-lg font-bold dark:text-(--darkmode-text-color-tertiary) pb-2">
                        LinkedIn
                    </h3>

                    <div className="pb-6">
                        <a target="_blank" rel="noreferrer" href={linkedInLink.link} className="underline dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) dark:hover:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-primary)">
                            {linkedInLink.link.indexOf("//") != -1 ? linkedInLink.link.substring(linkedInLink.link.indexOf("//") + 2) : linkedInLink.link}
                            <span className="sr-only">(opens in a new tab)</span>
                        </a>
                    </div>
                </>
            )}

            {myInfo.emailAddress && (
                <>
                    <h3 className="text-lg font-bold dark:text-(--darkmode-text-color-tertiary) pb-2">
                        Email
                    </h3>

                    <div className="pb-6">
                        <a target="_blank" rel="noreferrer" href={`mailto:${myInfo.emailAddress}`} className="underline dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) dark:hover:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-primary)">
                            {myInfo.emailAddress}
                        </a>
                    </div>
                </>
            )}

            {myInfo.phoneNumber && (
                <>

                    <h3 className="text-lg font-bold dark:text-(--darkmode-text-color-tertiary) pb-2">
                        Phone
                    </h3>

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
import myInfoJson from "../../data/my-info.json";
import { useEffect, useState } from "preact/hooks";

export default function Homepage() {

    const myInfo = myInfoJson;
    const [darkmode, setDarkmode] = useState<boolean>(document.documentElement.classList.contains('dark'));

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setDarkmode(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="px-4 md:px-0">
            <p className="text-lg pt-16 md:pt-4 md:pt-8 md:py-4 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)">
                Hey — I'm {myInfo.firstName} {myInfo.lastName}
            </p>

            <h2 className="text-2xl md:text-start py-4 dark:text-(--darkmode-text-color-primary)">
                I'm a
                <span className="text-(--accent-color)">
                    {' '} {myInfo.jobTitle} {' '}
                </span>
                with over {myInfo.yearsOfExperience} years of experience specializing in enterprise web development,
                automation, and system integrations.
            </h2>

            <p className="text-lg md:text-start py-4 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)">
                I currently work as a {myInfo.currentJobTitle} for
                <span
                    className="underline dark:text-(--darkmode-text-color-tertiary) hover:text-(--lightmode-text-color-primary) text-(--lightmode-text-color-secondary)">
                    <a href={myInfo.currentCompanyLink} target="_blank" rel="noreferrer">
                        {' '} {myInfo.currentCompanyName}
                    </a>
                </span>, a {myInfo.currentJobCompanyDescription} based out of {myInfo.currentJobLocation},
                where I've spent the last {myInfo.currentJobYears} years {myInfo.currentJobDescription}. I primarily
                program in {myInfo.programmingStackInfo}.
            </p>

            <p className="text-lg md:text-start py-4 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)">
                I hold a {myInfo.degreeName} from {myInfo.degreeInstitution}, graduating {myInfo.degreeHonors} with
                a {myInfo.degreeGpa} in {myInfo.degreeGraduationDate}
                {myInfo.degreeAwardLink ? (<span>
                    , and {' '}
                    <a href={myInfo.degreeAwardLink}
                       target="_blank"
                       rel="noreferrer"
                       className="underline dark:text-(--darkmode-text-color-tertiary) hover:dark:text-(--darkmode-text-color-primary)
                       hover:text-(--lightmode-text-color-primary) text-(--lightmode-text-color-secondary)"
                    >
                        won an award
                    </a>
                    {' '} for {myInfo.degreeAwardDescription}
                </span>) : <></>}.
            </p>

            <p className="text-lg md:text-start md:py-4 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)">
                I'm also a strong advocate of open-source projects, where a lot of my free time, and a bit of change,
                goes into these days.
            </p>

            <div
                className="text-lg font-bold md:text-start py-4 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)">
                <label htmlFor="langUsage">What I'm Using This Month</label>
                <img alt="Language Activity Graph 30 Days" id="langUsage"
                     src={darkmode ? myInfo.wakatimeDarkmodeActivityLink : myInfo.wakatimeLightmodeActivityLink}/>
            </div>

        </div>
    );
}
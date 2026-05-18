import Socials from "./Socials.tsx";
import myInfoJson from "../../data/my-info.json";

export default function Homepage() {

    const myInfo = myInfoJson;

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-3xl md:text-6xl text-center md:text-start py-1 md:py-4 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)">
                Hiya
            </div>

            <div className="text-4xl md:text-8xl text-center md:text-start py-2 md:py-4 font-bold border-b-4 border-(--accent-color) dark:text-(--darkmode-text-color-primary)">
                I'm {myInfo && myInfo.name}
            </div>

            <div className="text-2xl text-center md:text-start md:text-4xl py-4 md:py-6 dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary)">
                A {myInfo && myInfo.jobTitle}
            </div>

            <Socials />
        </div>
    );
}
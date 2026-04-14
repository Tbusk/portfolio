import Socials from "./Socials.tsx";
import myInfoJson from "../../data/my-info.json";

export default function Homepage() {

    const myInfo = myInfoJson;
    document.title = `${myInfo.name} | Home`;

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="text-3xl md:text-6xl text-center md:text-start py-1 md:py-4">
                    Hiya
                </div>

                <div className="text-4xl md:text-8xl text-center md:text-start py-2 md:py-4 font-bold border-b-4 border-[#5294e2]">
                    I'm {myInfo && myInfo.name}
                </div>

                <div className="text-2xl text-center md:text-start md:text-4xl py-4 md:py-6">
                    A {myInfo && myInfo.jobTitle}
                </div>

                <Socials />
            </div>
        </>
    );
}
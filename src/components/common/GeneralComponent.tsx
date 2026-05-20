import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import type { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";
import myInfoJson from "../../data/my-info.json";
import SectionTitle from "./SectionTitle.tsx";

interface GeneralComponentProps {
    children?: ComponentChildren;
    hasHeading: boolean;
    title: string;
}

export default function GeneralComponent(props: GeneralComponentProps) {

    const myInfo = myInfoJson;

    useEffect(() => {
        document.title = `${myInfo.name} | ${props.title}`
    }, [props.title]);

    return (
        <div className="min-h-screen bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color)">
            <Header />
            <main className="container mx-auto xl:max-w-3/5">
                <div className={`min-h-[92.6vh] ${props.hasHeading ? "pt-0 md:pt-24" : "flex justify-center"}`}>
                    {props.hasHeading ? (
                        <div className="flex flex-col">

                            <SectionTitle title={props.title}/>

                            <div className="flex flex-col gap-8 md:pt-2 md:px-2 px-6">
                                {props.children}
                            </div>

                        </div>
                    ) : props.children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
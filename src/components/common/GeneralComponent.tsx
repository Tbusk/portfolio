import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import type { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";
import myInfoJson from "../../data/my-info.json";

interface GeneralComponentProps {
    children?: ComponentChildren;
    hasHeading: boolean;
    title: string;
}

export default function GeneralComponent(props: GeneralComponentProps) {

    const myInfo = myInfoJson;

    useEffect(() => {
        document.title = `${myInfo.firstName} ${myInfo.lastName} | ${props.title}`
    }, [props.title]);

    return (
        <div className="h-full bg-(--lightmode-background-color) dark:bg-(--darkmode-background-color)">
            <main className="container mx-auto xl:max-w-[96vh] min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow">
                    {props.hasHeading ? (
                        <div className="flex flex-col">

                            <div className="flex flex-col gap-8 md:pt-2 md:px-0 px-4 first:pt-16 first:md:pt-8">
                                {props.children}
                            </div>

                        </div>
                    ) : props.children}
                </div>
                <Footer />
            </main>
        </div>
    );
}
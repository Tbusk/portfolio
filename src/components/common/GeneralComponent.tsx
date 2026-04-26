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
        document.title = `${myInfo.name} | ${props.title}`
    }, [props.title]);

    return (
        <div>
            <Header />
            <div className="container mx-auto ">
                <div className={`min-h-[92.6vh] ${props.hasHeading ? "pt-0 md:pt-24" : "flex justify-center"}`}>
                    {props.children}
                </div>

                <Footer />
            </div>
        </div>
    );
}
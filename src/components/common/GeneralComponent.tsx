import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import type { ComponentChildren } from "preact";

interface GeneralComponentProps {
    children?: ComponentChildren;
    hasHeading: boolean;
}

export default function GeneralComponent(props: GeneralComponentProps) {
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
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";
import type { ComponentChildren } from "preact";

interface GeneralComponentProps {
    children?: ComponentChildren;
    hasHeading: boolean;
}

export default function GeneralComponent(props: GeneralComponentProps) {
    return (
        <div className="container mx-auto">
            <Header />

            <div className={props.hasHeading ? "pt-0 md:pt-24" : ""}>
                {props.children}
            </div>

            <Footer />
        </div>
    );
}
import Homepage from "../homepage/Homepage.tsx";
import Experience from "../experience/Experience.tsx";
import Education from "../education/Education.tsx";
import Projects from "../projects/Projects.tsx";
import OpenSourceContributions from "../open_source/OpenSourceContributions.tsx";
import NotFound from "../not_found/NotFound.tsx";
import type { JSX } from "preact";
import Contact from "../contact/Contact.tsx";

export interface RouteProps {
    path: string | undefined;
    hasHeading: boolean;
    title: string;
    component: JSX.Element;
}

export const routes : RouteProps[] = [
    {
        path: "/",
        hasHeading: false,
        title: "Home",
        component: <Homepage/>
    },
    {
        path: "/experience",
        hasHeading: true,
        title: "Experience",
        component: <Experience/>
    },
    {
        path: "/education",
        hasHeading: true,
        title: "Education",
        component: <Education/>
    },
    {
        path: "/projects",
        hasHeading: true,
        title: "Projects",
        component: <Projects/>
    },
    {
        path: "/open-source",
        hasHeading: true,
        title: "Open Source",
        component: <OpenSourceContributions/>
    },
    {
        path: "/contact-me",
        hasHeading: true,
        title: "Contact",
        component: <Contact/>
    },
    {
        path: undefined,
        hasHeading: false,
        title: "404 Not Found",
        component: <NotFound/>
    }
]
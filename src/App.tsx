import { Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import GeneralComponent from "./components/common/GeneralComponent.tsx";
import Homepage from "./components/homepage/Homepage.tsx";
import Experience from "./components/experience/Experience.tsx";
import Skills from "./components/skills/Skills.tsx";
import Education from "./components/education/Education.tsx";
import Projects from "./components/projects/Projects.tsx";
import OpenSourceContributions from "./components/open_source/OpenSourceContributions.tsx";
import Contact from "./components/contact/Contact.tsx";


export default function App() {

    return (
        <Router hook={useHashLocation}>
            <Route path="/">
                <GeneralComponent hasHeading={false}>
                    <Homepage/>
                </GeneralComponent>
            </Route>
            <Route path="/experience">
                <GeneralComponent hasHeading={true}>
                    <Experience/>
                </GeneralComponent>
            </Route>
            <Route path="/skills">
                <GeneralComponent hasHeading={true}>
                    <Skills/>
                </GeneralComponent>
            </Route>
            <Route path="/education">
                <GeneralComponent hasHeading={true}>
                    <Education/>
                </GeneralComponent>
            </Route>
            <Route path="/projects">
                <GeneralComponent hasHeading={true}>
                    <Projects/>
                </GeneralComponent>
            </Route>
            <Route path="/open-source">
                <GeneralComponent hasHeading={true}>
                    <OpenSourceContributions/>
                </GeneralComponent>
            </Route>
            <Route path="/contact">
                <GeneralComponent hasHeading={true}>
                    <Contact/>
                </GeneralComponent>
            </Route>
        </Router>
    )
}

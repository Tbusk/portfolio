import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import GeneralComponent from "./components/common/GeneralComponent.tsx";
import Homepage from "./components/homepage/Homepage.tsx";
import Experience from "./components/experience/Experience.tsx";
import Education from "./components/education/Education.tsx";
import Projects from "./components/projects/Projects.tsx";
import OpenSourceContributions from "./components/open_source/OpenSourceContributions.tsx";
import NotFound from "./components/not_found/NotFound.tsx";


export default function App() {

    return (
        <Router hook={useHashLocation} base="/">
            <Switch>
                <Route path="/">
                    <GeneralComponent hasHeading={false} title="Home">
                        <Homepage/>
                    </GeneralComponent>
                </Route>
                <Route path="/experience">
                    <GeneralComponent hasHeading={true} title="Experience">
                        <Experience/>
                    </GeneralComponent>
                </Route>
                <Route path="/education">
                    <GeneralComponent hasHeading={true} title="Education">
                        <Education/>
                    </GeneralComponent>
                </Route>
                <Route path="/projects">
                    <GeneralComponent hasHeading={true} title="Projects">
                        <Projects/>
                    </GeneralComponent>
                </Route>
                <Route path="/open-source">
                    <GeneralComponent hasHeading={true} title="Open Source">
                        <OpenSourceContributions/>
                    </GeneralComponent>
                </Route>
                <Route>
                    <GeneralComponent hasHeading={false} title="404 Not Found">
                        <NotFound/>
                    </GeneralComponent>
                </Route>
            </Switch>
        </Router>
    )
}

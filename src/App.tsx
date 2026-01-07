import { ErrorBoundary, lazy, LocationProvider, Route, Router } from "preact-iso";
import GeneralComponent from "./components/common/GeneralComponent.tsx";


export default function App() {

    const Homepage = lazy(() =>
        import("./components/homepage/Homepage.tsx")
    );
    const Experience = lazy(() =>
        import("./components/experience/Experience.tsx")
    );
    const Skills = lazy(() =>
        import("./components/skills/Skills.tsx")
    );
    const Education = lazy(() =>
        import("./components/education/Education.tsx")
    );
    const Projects = lazy(() =>
        import("./components/projects/Projects.tsx")
    );
    const OpenSourceContributions = lazy(() =>
        import("./components/open_source/OpenSourceContributions.tsx")
    );
    const Contact = lazy(() =>
        import("./components/contact/Contact.tsx")
    );

    return (
        <>
            <LocationProvider>
                <ErrorBoundary>
                    <Router>
                        <Route path="/"
                               component={() => (
                                   <GeneralComponent hasHeading={false}>
                                       <Homepage/>
                                   </GeneralComponent>
                               )}
                        />
                        <Route path="/experience"
                               component={() => (
                                   <GeneralComponent hasHeading={true}>
                                       <Experience/>
                                   </GeneralComponent>
                               )}
                        />
                        <Route path="/skills"
                               component={() => (
                                   <GeneralComponent hasHeading={true}>
                                       <Skills/>
                                   </GeneralComponent>
                               )}
                        />
                        <Route path="/education"
                               component={() => (
                                   <GeneralComponent hasHeading={true}>
                                       <Education/>
                                   </GeneralComponent>
                               )}
                        />
                        <Route path="/projects"
                               component={() => (
                                   <GeneralComponent hasHeading={true}>
                                       <Projects/>
                                   </GeneralComponent>
                               )}
                        />
                        <Route path="/open-source"
                               component={() => (
                                   <GeneralComponent hasHeading={true}>
                                       <OpenSourceContributions/>
                                   </GeneralComponent>
                               )}
                        />
                        <Route path="/contact"
                               component={() => (
                                   <GeneralComponent hasHeading={true}>
                                       <Contact/>
                                   </GeneralComponent>
                               )}
                        />
                    </Router>
                </ErrorBoundary>
            </LocationProvider>

        </>
    )
}

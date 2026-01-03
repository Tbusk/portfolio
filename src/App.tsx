import Homepage from "./components/homepage/Homepage.tsx";
import Education from "./components/education/Education.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/common/Footer.tsx";
import Experience from "./components/experience/Experience.tsx";
import OpenSourceContributions from "./components/open_source/OpenSourceContributions.tsx";

export function App() {

    return (
        <div className="container mx-auto">
            <Homepage />
            <Experience />
            <Education />
            <Projects />
            <OpenSourceContributions />
            <Contact />
            <Footer />
        </div>
    )
}

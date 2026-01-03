import Homepage from "./components/homepage/Homepage.tsx";
import Education from "./components/education/Education.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import Experience from "./components/experience/Experience.tsx";
import OpenSourceContributions from "./components/open_source/OpenSourceContributions.tsx";
import Header from "./components/header/Header.tsx";
import Skills from "./components/skills/Skills.tsx";

export function App() {

    return (
        <div className="container mx-auto">
            <Header />
            <Homepage />
            <Experience />
            <Skills />
            <Education />
            <Projects />
            <OpenSourceContributions />
            <Contact />
            <Footer />
        </div>
    )
}

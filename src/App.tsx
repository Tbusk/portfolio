import './app.css'
import Homepage from "./components/Homepage.tsx";
import Education from "./components/Education.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Experience from "./components/Experience.tsx";
import OpenSourceContributions from "./components/OpenSourceContributions.tsx";

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

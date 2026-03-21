import EducationItem from "./EducationItem.tsx";
import SectionTitle from "../common/SectionTitle.tsx";
import HrItem from "../common/HrItem.tsx";

export default function Education() {
    return (
        <>
            <div className="flex flex-col">

                <SectionTitle title="Education" id="education"/>

                <div className="flex flex-col gap-8 md:pt-2 md:px-2 px-6">
                    <EducationItem
                        name="BSc. Digital Media Software Engineering"
                        institution="Ferris State University"
                        startDate="May 2022"
                        endDate="May 2026"
                        gpa="4.0"
                        link="https://ferris.edu"
                        achievements={["Dean's List", "College of Business Excellence Award Winner", "IEEE Member"]}
                        courses={[
                            "Applied Machine Learning Software",
                            "Calculus I & Analytical Geometry",
                            "Calculus II",
                            "Capstone in SENG",
                            "Computer Programming 1",
                            "Computer Programming 2",
                            "Data Warehousing & Intelligence",
                            "Intro to Cloud App Development",
                            "Intro to Database Design",
                            "Intro to Machine Learning",
                            "Intro to Micro Systems & Software",
                            "Introduction To Statistics",
                            "Linear Algebra And Differential Equations",
                            "Program Graphical Interfaces",
                            "Programming Languages",
                            "Project Management Fundamentals",
                            "SENG Applied Internship",
                            "SENG Methodologies - Processes",
                            "Software Component Design",
                            "Software Configuration Management",
                            "Software Data Structures",
                            "Software Design - Architecture",
                            "Software Development Industry Certification",
                            "Software Engineering Tools",
                            "Software Quality Assurance",
                            "Software Requirements Management",
                            "Web Application Development"
                        ]}
                    />

                    <HrItem/>

                    <EducationItem
                        name="Vocational - Computer Information Systems"
                        institution="Allegan County Area Technical & Education Center"
                        startDate="Sept 2015"
                        endDate="May 2017"
                        gpa="3.8"
                        link="https://www.alleganaesa.org/o/techcenter"
                    />
                </div>
            </div>
        </>
    );
}
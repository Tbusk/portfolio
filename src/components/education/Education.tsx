import EducationItem from "./EducationItem.tsx";
import SectionTitle from "../common/SectionTitle.tsx";

export default function Education() {
    return (
        <>
            <div className="flex flex-col">

                <SectionTitle title="Education" id="education"/>

                <div className="flex flex-col gap-8 pt-2">
                    <EducationItem
                        name="BSc. Digital Media Software Engineering"
                        institution="Ferris State University"
                        startDate="May 2022"
                        endDate="May 2026"
                        gpa="4.0"
                        link="https://ferris.edu"
                        coursework={[
                            "Project Management Fundamentals",
                            "Computer Programming 1",
                            "Computer Programming 2",
                            "SENG Methodologies - Processes",
                            "Software Requirements Management",
                            "Intro to Database Design",
                            "Software Configuration Management",
                            "Software Data Structures",
                            "Software Component Design",
                            "Engineering Enterprise Software Applications",
                            "Programming Languages",
                            "Introduction to Machine Learning",
                            "Programming Graphical Interfaces",
                            "Software Quality Assurance",
                            "Software Engineering Tools",
                            "Software Design - Architecture",
                            "Applied Machine Learning Software",
                            "SENG Applied Internship",
                            "Software Development Industry Certification",
                            "Capstone in Software Engineering",
                            "Intelligence and Data Warehousing",
                            "Intro to Cloud Application Development"
                        ]}
                    />

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

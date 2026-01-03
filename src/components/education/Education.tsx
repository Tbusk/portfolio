import EducationItem from "./EducationItem.tsx";

export default function Education() {
    return (
        <>
            <div className="flex flex-col pb-8">
                <div className="text-3xl md:text-6xl py-1 md:py-4 px-2 md:px-0" id="education">
                    Education
                </div>

                <div className="flex flex-col gap-8 pt-2">
                    <EducationItem
                        name="BSc. - Digital Media Software Engineering"
                        institution="Ferris State University"
                        startDate="2022"
                        endDate="May 2026"
                        gpa="4.0"
                        link="https://ferris.edu"
                    />

                    <EducationItem
                        name="AA - General Studies"
                        institution="Kalamazoo Valley Community College"
                        startDate="Sept 2016"
                        endDate="May 2021"
                        gpa="3.5"
                        link="https://kvcc.edu"
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

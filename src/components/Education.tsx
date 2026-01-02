import EducationItem from "./EducationItem.tsx";

export default function Education() {
    return (
        <>
            <div className="flex flex-col pb-8">
                <div className="text-3xl md:text-6xl text-center md:text-start py-1 md:py-4">
                    Education
                </div>

                <div className="flex flex-col gap-8 pt-2">
                    <EducationItem
                        name="Bachelor of Science (BSc.) - Software Engineering"
                        institution="Ferris State University"
                        startDate="2022"
                        endDate="May 2026"
                        gpa="4.0"
                    />

                    <EducationItem
                        name="Associates of Arts (AA) - General Studies"
                        institution="Kalamazoo Valley Community College"
                        startDate="Sept 2016"
                        endDate="May 2021"
                        gpa="3.5"
                    />

                    <EducationItem
                        name="Trade School - Computer Information Systems"
                        institution="Allegan County Area Technical & Education Center (ACATEC)"
                        startDate="Sept 2015"
                        endDate="May 2017"
                        gpa="3.8"
                    />
                </div>
            </div>
        </>
    );
}

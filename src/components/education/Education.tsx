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
                    />

                    <HrItem />

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

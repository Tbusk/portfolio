import EducationItem, { type EducationItemProps } from "./EducationItem.tsx";
import SectionTitle from "../common/SectionTitle.tsx";
import HrItem from "../common/HrItem.tsx";
import educationJson from '../../data/education.json';
import myInfoJson from "../../data/my-info.json";

export default function Education() {

    const myInfo = myInfoJson;
    document.title = `${myInfo.name} | Education`;
    const {education} = educationJson;

    return (
        <div className="flex flex-col">

            <SectionTitle title="Education" id="education"/>

            <div className="flex flex-col gap-8 md:pt-2 md:px-2 px-6">

                {education && education.length > 0 && education.map((educationItem: EducationItemProps, index: number) =>
                    <div key={index}>
                        <EducationItem name={educationItem.name} endDate={educationItem.endDate}
                                       startDate={educationItem.startDate} link={educationItem.link}
                                       institution={educationItem.institution} courses={educationItem.courses}
                                       gpa={educationItem.gpa} achievements={educationItem.achievements}
                        />

                        {index < education.length - 1 && <HrItem/>}
                    </div>
                )}

            </div>
        </div>
    );
}
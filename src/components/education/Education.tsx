import EducationItem, { type EducationItemProps } from "./EducationItem.tsx";
import HrItem from "../common/HrItem.tsx";
import educationJson from '../../data/education.json';

export default function Education() {

    const {education} = educationJson;

    return (
        <>
            {education && education.length > 0 && education.map((educationItem: EducationItemProps, index: number) =>
                <div key={index}>

                    <EducationItem
                        name={educationItem.name}
                        endDate={educationItem.endDate}
                        startDate={educationItem.startDate}
                        link={educationItem.link}
                        institution={educationItem.institution}
                        courses={educationItem.courses}
                        gpa={educationItem.gpa}
                        achievements={educationItem.achievements}
                    />

                    {index < education.length - 1 && <HrItem/>}

                </div>
            )}
        </>
    );
}
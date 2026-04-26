import ExperienceItem, { type ExperienceItemProps } from "./ExperienceItem.tsx";
import SectionTitle from "../common/SectionTitle.tsx";
import HrItem from "../common/HrItem.tsx";
import experienceJson from '../../data/experience.json';

export default function Experience() {

    const {experiences} = experienceJson;

    return (
        <div className="flex flex-col">

            <SectionTitle title="Experience" id="experience"/>

            <div className="flex flex-col gap-8 md:pt-2 md:px-2 px-6">

                {experiences && experiences.length > 0 && experiences.map((experience: ExperienceItemProps, index:number) => (
                    <div key={index}>
                        <ExperienceItem company={experience.company} website={experience.website}
                                        jobTitle={experience.jobTitle} startDate={experience.startDate}
                                        endDate={experience.endDate} description={experience.description}
                        />

                        {index < experiences.length - 1 && <HrItem/>}
                    </div>
                ))}

            </div>
        </div>
    );
}
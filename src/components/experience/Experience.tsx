import ExperienceItem, { type ExperienceItemProps } from "./ExperienceItem.tsx";
import HrItem from "../common/HrItem.tsx";
import experienceJson from '../../data/experience.json';

export default function Experience() {

    const {experiences} = experienceJson;

    return (
        <>
            {experiences && experiences.length > 0 && experiences.map((experience: ExperienceItemProps, index: number) => (
                <div key={index}>

                    <ExperienceItem
                        company={experience.company}
                        website={experience.website}
                        jobTitle={experience.jobTitle}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        description={experience.description}
                        techStack={experience.techStack}
                        summary={experience.summary}
                    />

                    {index < experiences.length - 1 && <HrItem/>}

                </div>
            ))}
        </>
    );
}
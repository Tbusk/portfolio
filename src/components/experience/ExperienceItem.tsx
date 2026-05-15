import DateRange from "../common/DateRange.tsx";
import SubSectionTitle from "../common/SubSectionTitle.tsx";

export interface ExperienceItemProps {
    company: string;
    website?: string;
    jobTitle: string;
    description: string[];
    startDate: string;
    endDate: string|null;
}

export default function ExperienceItem(props: ExperienceItemProps) {
    return (
        <div className="pb-6">

            <DateRange startDate={props.startDate} endDate={props.endDate}/>

            <SubSectionTitle name={props.jobTitle}/>

            <div className="text-lg pb-2">
                {props.website ? (
                    <a className="underline" href={props.website}>
                        {props.company}
                    </a>
                ) : `${props.company}`}
            </div>

            <ul className="list-disc pl-4">
                {props.description.map((content, index) => (
                    <li className="pl-2 py-1.5" key={index}>
                        {content}
                    </li>
                ))}
            </ul>
        </div>
    );
}
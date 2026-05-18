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

            <div className="text-md dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) pb-4">
                {props.website ? (
                    <a className="underline dark:hover:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-secondary)" href={props.website}>
                        {props.company}
                    </a>
                ) : <div className="">{props.company}</div>}
            </div>

            <div className="font-bold text-(--lightmode-text-color-tertiary) dark:text-(--darkmode-text-color-tertiary) pb-1">
                Summary
            </div>

            <ul className="list-disc pl-5 dark:text-(--darkmode-text-color-primary)">
                {props.description.map((content, index) => (
                    <li className="pl-2 py-1.5" key={index}>
                        {content}
                    </li>
                ))}
            </ul>
        </div>
    );
}
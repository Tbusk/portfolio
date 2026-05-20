import DateRange from "../common/DateRange.tsx";
import SubSectionTitle from "../common/SubSectionTitle.tsx";
import PillsComponent from "../common/PillsComponent.tsx";
import Media, { type MediaItem } from "../media/Media.tsx";
import { useState } from "preact/hooks";
import ShowHideButton from "../common/ShowHideButton.tsx";

export interface ExperienceItemProps {
    company: string;
    website: string;
    jobTitle: string;
    description: string[];
    startDate: string;
    techStack?: string[];
    endDate: string | null;
    media?: MediaItem[];
}

export default function ExperienceItem(props: ExperienceItemProps) {

    const [showAll, setShowAll] = useState<boolean>(false);

    return (
        <div className="pb-6">

            <DateRange startDate={props.startDate} endDate={props.endDate}/>

            <SubSectionTitle name={props.jobTitle}/>

            <div className="pb-2">
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-md underline dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) dark:hover:text-(--darkmode-text-color-secondary) hover:text-(--lightmode-text-color-primary)"
                    href={props.website}
                >
                    {props.company}
                    <span className="sr-only">
                        (opens in a new tab)
                    </span>
                </a>
            </div>

            {props.techStack && props.techStack.length > 0 && (
                <PillsComponent name="Tech Stack" items={props.techStack}/>
            )}

            <div>
                <h3 className={`text-md font-bold text-(--lightmode-text-color-tertiary) dark:text-(--darkmode-text-color-tertiary) pb-1 ${props.techStack && props.techStack.length > 0 ? 'pt-1' : ''}`}>
                    Summary
                </h3>

                <ul className="list-disc pl-4 dark:text-(--darkmode-text-color-primary)">
                    {props.description && props.description.slice(0, (props.description.length > 5 ? 5 : props.description.length)).map((content, index) => (
                        <li className="pl-2 py-1.5" key={index}>
                            {content}
                        </li>
                    ))}
                    {props.description.length > 5 && showAll && props.description.slice(5, props.description.length).map((content, index) => (
                        <li className="pl-2 py-1.5" key={index}>
                            {content}
                        </li>
                    ))}
                </ul>
            </div>

            {props.description.length > 5 && (
                <>
                    {!showAll ? (
                        <ShowHideButton setShowAll={setShowAll} showAll={true} description="Expand"/>
                    ) : (
                        <ShowHideButton setShowAll={setShowAll} showAll={false} description="Hide"/>
                    )}
                </>
            )}

            {props.media && props.media.length > 0 && (
                <Media items={props.media}/>
            )}
        </div>
    );
}
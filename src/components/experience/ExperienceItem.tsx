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
    summary: string;
    description?: string[];
    startDate: string;
    techStack?: string[];
    endDate: string | null;
    media?: MediaItem[];
}

const MAX_ITEMS = 3;

export default function ExperienceItem(props: ExperienceItemProps) {

    const [showAll, setShowAll] = useState<boolean>(false);

    return (
        <>

            <DateRange startDate={props.startDate} endDate={props.endDate}/>

            <SubSectionTitle name={props.jobTitle}/>

            <div className="pb-4">
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-md underline dark:text-(--darkmode-text-color-secondary) visited:dark:text-(--darkmode-text-color-tertiary) text-(--lightmode-text-color-secondary) visited:text-(--lightmode-text-color-tertiary) dark:hover:text-(--darkmode-text-color-primary) hover:text-(--lightmode-text-color-primary)"
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
                <h3 className="text-md font-bold text-(--lightmode-text-color-primary) dark:text-(--darkmode-text-color-primary) pb-4">Summary</h3>

                <p className={`dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary) ${props.description ? 'pb-4' : ''}`}>
                    {props.summary}
                </p>
            </div>

            {props.description && (
                <div>
                    <h3 className={`text-md font-bold text-(--lightmode-text-color-primary) dark:text-(--darkmode-text-color-primary) pb-4 ${props.techStack && props.techStack.length > 0 ? 'pt-1' : ''}`}>
                        Key Highlights
                    </h3>

                    <ul className="list-disc pl-4 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)">
                        {props.description.slice(0, (props.description.length > MAX_ITEMS ? MAX_ITEMS : props.description.length)).map((content, index) => (
                            <li className="pl-2 py-1.5 first:pt-0 last:pb-0" key={index}>
                                {content}
                            </li>
                        ))}
                        {props.description.length > MAX_ITEMS && showAll && props.description.slice(MAX_ITEMS, props.description.length).map((content, index) => (
                            <li className="pl-2 py-1.5 first:pt-0 last:pb-0" key={index}>
                                {content}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {props.description && props.description.length > MAX_ITEMS && (
                <div className="pt-4">
                    {!showAll ? (
                        <ShowHideButton setShowAll={setShowAll} showAll={true} description="Expand"/>
                    ) : (
                        <ShowHideButton setShowAll={setShowAll} showAll={false} description="Hide"/>
                    )}
                </div>
            )}

            {props.media && props.media.length > 0 && (
                <Media items={props.media}/>
            )}
        </>
    );
}
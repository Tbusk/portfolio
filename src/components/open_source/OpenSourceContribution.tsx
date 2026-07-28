import SubSectionTitle from "../common/SubSectionTitle.tsx";
import ViewButton from "../common/ViewButton.tsx";

export interface OpenSourceContributionProps {
    name: string;
    link: string;
    description: string;
    content: string[];
}

export default function OpenSourceContribution(props: OpenSourceContributionProps) {
    return (
        <div className="pb-8">

            <SubSectionTitle name={props.name}/>

            <div className="pb-3 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)">
                {props.description}
            </div>
            <div>
                <h3 className="font-bold text-(--lightmode-text-color-primary) dark:text-(--darkmode-text-color-primary) pb-1">
                    Contributions
                </h3>
                <ul className="list-disc pl-4">
                    {props.content.map((content, index) => (
                        <li className="pl-2 py-1.5 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)" key={index}>
                            {content}
                        </li>
                    ))}
                </ul>
            </div>

            {props.link && (
                <ViewButton link={props.link} />
            )}
        </div>
    )
}
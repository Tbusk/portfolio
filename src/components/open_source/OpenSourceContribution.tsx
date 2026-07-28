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
        <>

            <SubSectionTitle name={props.name}/>

            <div className="pb-4 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)">
                {props.description}
            </div>
            <div className="pb-4">
                <h3 className="font-bold text-(--lightmode-text-color-primary) dark:text-(--darkmode-text-color-primary) pb-4">
                    Contributions
                </h3>
                <ul className="list-disc pl-4">
                    {props.content.map((content, index) => (
                        <li className="pl-2 py-1.5 last:pb-0 dark:text-(--darkmode-text-color-secondary) text-(--lightmode-text-color-secondary)" key={index}>
                            {content}
                        </li>
                    ))}
                </ul>
            </div>

            {props.link && (
                <ViewButton link={props.link} />
            )}
        </>
    )
}
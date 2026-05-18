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

            <div className="pb-3 dark:text-(--darkmode-text-color-tertiary)">
                {props.description}
            </div>
            <div>
                <div className="font-bold text-gray-600 dark:text-(--darkmode-text-color-tertiary) pb-1">
                    Contributions
                </div>
                <ul className="list-disc pl-6">
                    {props.content.map((content, index) => (
                        <li className="pl-2 py-1.5 dark:text-white" key={index}>
                            {content}
                        </li>
                    ))}
                </ul>
            </div>

            {props.link ?
                <ViewButton link={props.link} />
                :
                ''
            }
        </div>
    )
}
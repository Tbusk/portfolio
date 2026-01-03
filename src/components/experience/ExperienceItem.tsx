interface ExperienceItemProps {
    company: string;
    website?: string;
    jobTitle: string;
    description: string[];
    startDate: string;
    endDate: string;
}

export default function ExperienceItem(props: ExperienceItemProps) {
    return (
        <>
            <div>

                <div className="text-lg pb-2">
                    {props.startDate} - {props.endDate}
                </div>

                <div className="text-2xl font-bold pb-2">
                    {props.jobTitle}
                </div>

                <div className="text-lg pb-2">
                    {props.website ? (
                        <a className="hover:underline" href={props.website}>
                            {props.company}
                        </a>
                    ) : `${props.company}`}
                </div>

                <ul className="list-disc pl-4">
                    {props.description.map((content) => (
                        <li className="pl-2 py-1.5">
                            {content}
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
}
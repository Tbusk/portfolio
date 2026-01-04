interface OpenSourceContributionProps {
    name: string;
    link: string;
    description: string;
    content: string[];
}

export default function OpenSourceContribution(props: OpenSourceContributionProps) {
    return (
        <>
            <div>
                <div className="text-2xl pb-2 px-2 font-bold">
                    {props.name}
                </div>
                <div className="pb-2 px-2">
                    {props.description}
                </div>
                <div>
                    <ul className="list-disc pl-6">
                        {props.content.map((content, index) => (
                            <li className="pl-2 py-1.5 px-2" key={index}>
                                {content}
                            </li>
                        ))}
                    </ul>
                </div>

                {props.link ?
                    <div className="px-2 pt-2 flex">
                        <div className="border rounded-2xl py-1 px-4 hover:scale-110 hover:underline active:scale-95">
                            <a href={props.link}>
                                View Project
                            </a>
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        </>
    )
}
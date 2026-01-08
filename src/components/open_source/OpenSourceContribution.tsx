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
                <div className="text-2xl pb-2 font-bold text-[#5294e2]">
                    {props.name}
                </div>
                <div className="pb-2">
                    {props.description}
                </div>
                <div>
                    <ul className="list-disc pl-6">
                        {props.content.map((content, index) => (
                            <li className="pl-2 py-1.5" key={index}>
                                {content}
                            </li>
                        ))}
                    </ul>
                </div>

                {props.link ?
                    <div className="pt-4 flex">
                        <div className="rounded-xl py-2 px-10 hover:bg-gray-200 bg-gray-100 border border-gray-400">
                            <a href={props.link} className="text-md font-bold text-gray-600">
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
interface OpenSourceContributionProps {
    name: string;
    link: string;
    content: string[];
}

export default function OpenSourceContribution(props: OpenSourceContributionProps) {
    return (
        <>
            <div>
                <div className="text-2xl pb-2 text-center md:text-start">
                    <a className="hover:underline" href={props.link}>
                        {props.name}
                    </a>
                </div>
                <div>
                    <ul className="list-disc pl-6 md:pl-4">
                        {props.content.map((content) => (
                            <li className="pl-2 py-1.5">
                                {content}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
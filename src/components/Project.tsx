interface ProjectProps {
    name: string;
    description: string;
    link?: string;
    metrics: string[];
    techStack: string[];
}

export default function Project(props: ProjectProps) {
    return (
        <>
            <div>
                <div className="text-2xl font-bold pb-2 px-2 text-center md:text-start">
                    {props.name}
                </div>
                <div className="px-2 pb-4">
                    {props.description}
                </div>

                {props.metrics && props.metrics.length > 0 && (
                    <>
                        <div className="font-bold px-2">
                            Metrics
                        </div>

                        <div className="py-2 pb-6">
                            <ul className="flex flex-row flex-wrap gap-2 px-2">
                                {props.metrics.map((metric, index) => (
                                    <li className="border py-0.5 px-4 rounded-2xl text-sm" key={index}>
                                        {metric}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}

                {props.techStack && props.techStack.length > 0 && (
                    <>
                        <div className="font-bold px-2">
                            Tech Stack
                        </div>

                        <div className="py-2 pb-2">
                            <ul className="flex flex-row flex-wrap gap-2 px-2">
                                {props.techStack.map((tech, index) => (
                                    <li className="border py-0.5 px-4 rounded-2xl text-sm text-center" key={index}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}

                {props.link ?
                    <div className="px-2 pt-2 flex justify-center md:justify-start">
                        <div className="border rounded-2xl py-1 px-4">
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
    );
}
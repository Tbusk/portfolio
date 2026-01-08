import Pills from "../common/pills/Pills.tsx";

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
                <div className="text-2xl font-bold pb-2 text-[#5294e2]">
                    {props.name}
                </div>
                <div className="pb-4">
                    {props.description}
                </div>

                {props.metrics && props.metrics.length > 0 && (
                    <>
                        <div className="font-bold">
                            Metrics
                        </div>

                        <div className="py-2">
                            <Pills items={props.metrics} />
                        </div>
                    </>
                )}

                {props.techStack && props.techStack.length > 0 && (
                    <>
                        <div className="font-bold">
                            Tech Stack
                        </div>

                        <div className="py-2">
                            <Pills items={props.techStack} />
                        </div>
                    </>
                )}



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
    );
}
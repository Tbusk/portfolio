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
                <div className="text-2xl font-bold pb-2 px-2 ">
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

                        <div className="py-2">
                            <Pills items={props.metrics} />
                        </div>
                    </>
                )}

                {props.techStack && props.techStack.length > 0 && (
                    <>
                        <div className="font-bold px-2">
                            Tech Stack
                        </div>

                        <div className="py-2">
                            <Pills items={props.techStack} />
                        </div>
                    </>
                )}



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
    );
}
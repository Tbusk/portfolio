import Pills from "../common/pills/Pills.tsx";
import Media from "../media/Media.tsx";

interface ProjectProps {
    name: string;
    description: string;
    link?: string;
    metrics?: string[];
    techStack: string[];
    tags?: string[];
    media?: string[];
}

export default function Project(props: ProjectProps) {
    return (
        <>
            <div>
                <div className="text-2xl font-bold pb-3 text-[#5294e2]">
                    {props.name}
                </div>
                <div className="pb-3">
                    {props.description}
                </div>

                {props.tags && props.tags.length > 0 && (
                    <>
                        <div className="font-bold text-gray-600">
                            Tags
                        </div>

                        <div className="py-3">
                            <Pills items={props.tags} />
                        </div>
                    </>
                )}

                {props.metrics && props.metrics.length > 0 && (
                    <>
                        <div className="font-bold text-gray-600">
                            Metrics
                        </div>

                        <div className="py-3">
                            <Pills items={props.metrics} />
                        </div>
                    </>
                )}

                {props.techStack && props.techStack.length > 0 && (
                    <>
                        <div className="font-bold text-gray-600">
                            Tech Stack
                        </div>

                        <div className="py-3">
                            <Pills items={props.techStack} />
                        </div>
                    </>
                )}

                {props.media && props.media.length > 0 && (
                    <>
                        <div className="font-bold text-gray-600">
                            Media
                        </div>

                        <div className="py-3">
                            <Media items={props.media} />
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
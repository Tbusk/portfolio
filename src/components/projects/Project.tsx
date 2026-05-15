import Media from "../media/Media.tsx";
import SubSectionTitle from "../common/SubSectionTitle.tsx";
import PillsComponent from "../common/PillsComponent.tsx";

export interface ProjectProps {
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
        <div className="pb-8">
            <SubSectionTitle name={props.name}/>

            <div className="pb-2">
                {props.description}
            </div>

            {props.tags && props.tags.length > 0 && (
                <PillsComponent name="Tags" items={props.tags} />
            )}

            {props.metrics && props.metrics.length > 0 && (
                <PillsComponent name="Metrics" items={props.metrics} />
            )}

            {props.techStack && props.techStack.length > 0 && (
                <PillsComponent name="Tech Stack" items={props.techStack} />
            )}

            {props.media && props.media.length > 0 && (
                <div>
                    <div className="font-bold text-gray-600">
                        Media
                    </div>

                    <div className="py-3">
                        <Media items={props.media}/>
                    </div>
                </div>
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
    );
}
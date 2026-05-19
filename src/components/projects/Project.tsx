import Media, { type MediaItem } from "../media/Media.tsx";
import SubSectionTitle from "../common/SubSectionTitle.tsx";
import PillsComponent from "../common/PillsComponent.tsx";
import ViewButton from "../common/ViewButton.tsx";

export interface ProjectProps {
    name: string;
    description: string;
    link?: string;
    metrics?: string[];
    techStack: string[];
    tags?: string[];
    media?: MediaItem[];
}

export default function Project(props: ProjectProps) {
    return (
        <div className="pb-8">
            <SubSectionTitle name={props.name}/>

            <div className="pb-2 dark:text-(--darkmode-text-color-primary) text-(--lightmode-text-color-secondary)">
                {props.description}
            </div>

            {props.tags && props.tags.length > 0 && (
                <PillsComponent name="Tags" items={props.tags}/>
            )}

            {props.metrics && props.metrics.length > 0 && (
                <PillsComponent name="Metrics" items={props.metrics}/>
            )}

            {props.techStack && props.techStack.length > 0 && (
                <PillsComponent name="Tech Stack" items={props.techStack}/>
            )}

            {props.media && props.media.length > 0 && (
                <Media items={props.media}/>
            )}

            {props.link && (
                <ViewButton link={props.link} />
            )}
        </div>
    );
}
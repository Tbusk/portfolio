import Project, { type ProjectProps } from "./Project.tsx";
import HrItem from "../common/HrItem.tsx";
import projectsJson from '../../data/projects.json';

export default function Projects() {

    const {projects} = projectsJson;

    return (
        <>
            {projects && projects.length > 0 && projects.map((project: ProjectProps, index: number) =>
                <div key={index}>

                    <Project
                        name={project.name}
                        description={project.description}
                        techStack={project.techStack}
                        media={project.media}
                        link={project.link}
                        tags={project.tags}
                        metrics={project.metrics}
                    />

                    {index < projects.length - 1 && <HrItem/>}

                </div>
            )}
        </>
    );
}
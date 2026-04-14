import Project, { type ProjectProps } from "./Project.tsx";
import SectionTitle from "../common/SectionTitle.tsx";
import HrItem from "../common/HrItem.tsx";
import projectsJson from '../../data/projects.json';
import myInfoJson from "../../data/my-info.json";

export default function Projects() {

    const myInfo = myInfoJson;
    document.title = `${myInfo.name} | Projects`;
    const {projects} = projectsJson;

    return (
        <>
            <div className="flex flex-col">

                <SectionTitle title="Projects" id="projects"/>

                <div className="flex flex-col gap-8 md:pt-2 md:px-2 px-6">
                    {projects && projects.length > 0 && projects.map((project: ProjectProps, index: number) =>
                        <>
                            <Project name={project.name} description={project.description}
                                     techStack={project.techStack} media={project.media} link={project.link} key={index}
                                     tags={project.tags} metrics={project.metrics}
                            />

                            {index < projects.length - 1 && <HrItem/>}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
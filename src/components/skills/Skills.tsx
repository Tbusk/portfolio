
import SkillItems from "./SkillItems.tsx";
import SectionTitle from "../common/SectionTitle.tsx";

export default function Skills() {
    return (
        <>
            <div className="">

                <SectionTitle title="Skills" id="skills"/>

                <div className="md:pt-2 md:px-2 px-6">
                    <SkillItems
                        title="Frameworks"
                        items={[
                            "React",
                            "Preact",
                            "Spring",
                            "Spring Boot",
                            "Hibernate",
                            "Apache Freemarker",
                            "Tailwind CSS",
                            "Bootstrap",
                            "VitePress",
                            "PayloadCMS",
                            "Thymeleaf",
                        ]}
                    />

                    <SkillItems
                        title="Languages"
                        items={[
                            "Java",
                            "TypeScript",
                            "JavaScript",
                            "Python",
                            "Vala",
                            "HTML",
                            "CSS",
                            "Markdown"
                        ]}
                    />

                    <SkillItems
                        title="Databases"
                        items={[
                            "MariaDB",
                            "MS SQL Server",
                            "PostgreSQL",
                        ]}
                    />

                    <SkillItems
                        title="Tooling"
                        items={[
                            "GitHub",
                            "GitHub Actions",
                            "GitHub Projects",
                            "Docker",
                            "Docker Compose",
                            "Dockerfile",
                            "Git",
                            "GitLab",
                            "BitBucket",
                            "Confluence",
                            "Figma"
                        ]}
                    />

                    <SkillItems
                        title="Deployments"
                        items={[
                            "Hetzner",
                            "On Site",
                            "Google Cloud",
                            "AWS",
                            "GitHub Pages"
                        ]} />

                    <SkillItems
                        title="Development / Deployment Environments"
                        items={[
                            "Linux",
                            "Windows"
                        ]} />
                </div>
            </div>
        </>
    );
}
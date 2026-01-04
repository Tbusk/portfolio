
import SkillItems from "./SkillItems.tsx";
import SectionTitle from "../common/SectionTitle.tsx";

export default function Skills() {
    return (
        <>
            <div className="pb-8">

                <SectionTitle title="Skills" id="skills"/>

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
        </>
    );
}
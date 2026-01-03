import Skill from "./Skill.tsx";

export default function Skills() {
    return (
        <>
            <div className="pb-8">
                <div className="text-3xl md:text-5xl py-1 md:py-4 px-2 md:px-0" id="skills">
                    Skills
                </div>

                <div className="text-xl px-2 md:px-0 font-bold">
                    Frameworks
                </div>

                <div className="flex flex-wrap gap-2 py-4 px-2 md:px-0">
                    <Skill name="React" />
                    <Skill name="Preact" />
                    <Skill name="Spring" />
                    <Skill name="Spring Boot" />
                    <Skill name="Hibernate" />
                    <Skill name="Apache Freemarker" />
                    <Skill name="Tailwind CSS" />
                    <Skill name="Bootstrap" />
                    <Skill name="VitePress" />
                    <Skill name="PayloadCMS" />
                </div>

                <div className="text-xl px-2 md:px-0 font-bold">
                    Languages
                </div>

                <div className="flex flex-wrap gap-2 py-4 px-2 md:px-0">
                    <Skill name="Java" />
                    <Skill name="TypeScript" />
                    <Skill name="JavaScript" />
                    <Skill name="Python" />
                    <Skill name="Vala" />
                    <Skill name="HTML" />
                    <Skill name="CSS" />
                    <Skill name="Markdown" />
                </div>

                <div className="text-xl px-2 md:px-0 font-bold">
                    Databases
                </div>

                <div className="flex flex-wrap gap-2 py-4 px-2 md:px-0">
                    <Skill name="MariaDB" />
                    <Skill name="MS SQL Server" />
                    <Skill name="PostgreSQL" />
                </div>

                <div className="text-xl px-2 md:px-0 font-bold">
                    Tooling
                </div>

                <div className="flex flex-wrap gap-2 py-4 px-2 md:px-0">
                    <Skill name="GitHub" />
                    <Skill name="GitHub Actions" />
                    <Skill name="GitHub Projects" />
                    <Skill name="Docker" />
                    <Skill name="Docker Compose" />
                    <Skill name="Dockerfile" />
                    <Skill name="Git" />
                    <Skill name="GitLab" />
                    <Skill name="BitBucket" />
                    <Skill name="Confluence" />
                   
                </div>

                <div className="text-xl px-2 md:px-0 font-bold">
                    Deployments
                </div>

                <div className="flex flex-wrap gap-2 py-4 px-2 md:px-0">
                    <Skill name="Hetzner" />
                    <Skill name="On Site" />
                    <Skill name="Google Cloud" />
                    <Skill name="AWS" />
                    <Skill name="GitHub Pages" />
                </div>

                <div className="text-xl px-2 md:px-0 font-bold">
                    Environments
                </div>

                <div className="flex flex-wrap gap-2 pt-4 px-2 md:px-0">
                    <Skill name="Linux" />
                    <Skill name="Windows" />
                </div>
            </div>
        </>
    );
}
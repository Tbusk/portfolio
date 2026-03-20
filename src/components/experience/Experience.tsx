import ExperienceItem from "./ExperienceItem.tsx";
import SectionTitle from "../common/SectionTitle.tsx";
import HrItem from "../common/HrItem.tsx";

export default function Experience() {
    return (
        <>
            <div className="flex flex-col">

                <SectionTitle title="Experience" id="experience"/>

                <div className="flex flex-col gap-8 md:pt-2 md:px-2 px-6">

                    <ExperienceItem
                        company="Ferris State University"
                        jobTitle="Research Assistant"
                        startDate="January 2026"
                        endDate="Present"
                        description={[
                            `Served as the sole developer for Ferrell, a custom LLM-powered VS Code extension designed to support software development students.`,
                            `Built the application from scratch, connecting a modern webview frontend (React, TypeScript, Tailwind) to a secure, Dockerized Java Spring Boot backend and PostgreSQL database hosted on AWS.`,
                            `Presented the architecture and capabilities of the Ferrell project to a diverse audience as a featured speaker at Ferris AI Day.`,
                            `Implemented automated CI/CD pipelines, strict code-styling, detailed documentation, and gave regular progress demos to university stakeholders.`,
                            `Researched top educational AI tooling like ChatGPT Study Mode, Flint, SocraticQ, and other innovative AI tools to determine what features to implement in Ferrell.`,
                            `Experimented with a variety of existing AI tooling for capabilities such as JetBrains AI, Cursor, and Antigravity with models such as Claude 4.5 Sonnet, GPT-5.2 Codex, and Gemini 3 Pro.`
                        ]}
                        website="https://ferris.edu"
                    />

                    <HrItem/>

                    <ExperienceItem
                        company="Telic Corporation"
                        jobTitle="Software Engineer"
                        startDate="October 2025"
                        endDate="Present"
                        description={[
                            `Built a full-stack web application for personalized children's books using Next.js, React, Tailwind CSS, PayloadCMS, and PostgreSQL.`,
                            `Researched and evaluated dozens of ML models and platforms for image generation, mixing, face-swapping, and feature alteration to power the book personalization engine.`,
                            `Implemented comprehensive i18n (English and Arabic) for international reach, and customized the PayloadCMS admin dashboard to streamline book creation and content management.`,
                            `Containerized the application stack using Docker and Docker Compose, ensuring parity and reliability across development and production environments.`,
                            `Managed product direction and feature prioritization by leading weekly progress demos and strategy syncs with key stakeholders.`
                        ]}
                    />

                    <HrItem/>

                    <ExperienceItem
                        company="AD Solutions"
                        jobTitle="Software Engineer"
                        startDate="June 2024"
                        endDate="Present"
                        description={[
                            `
                            Owned the end-to-end project lifecycle after securing a solo contract, automating the entire 
                            software delivery process by architecting a multi-stage CI/CD pipeline with GitHub Actions 
                            for testing, Docker builds, and secure, one-click deployments.
                            `,
                            `
                            Engineered a secure internal portal using React, TypeScript, and Bootstrap as well as a 
                            customer masquerade feature that reduced support resolution times.
                            `,
                            `
                            Designed and implemented a new, normalized database schema from the ground up to enhance the 
                            platform scalability from the existing few thousand customers to much, much more.
                            `,
                            `
                            Developed a high-performance payment automation that processes complex transactions across 
                            20+ tables in-real-time, eliminating manual accounting intervention and saving dozens of 
                            hours per month.
                            `,
                            `
                            Created cross-departmental automation tools for Sales, HR, and the CX team, including a 
                            customer onboarding system with automated email reminders, a batch account creation system, 
                            and a lead-tracking reporter, enhancing team velocity.
                            `
                        ]}
                        website="https://myadsusa.com"
                    />

                    <HrItem/>

                    <ExperienceItem
                        company="Kendall College of Art and Design"
                        jobTitle="Software Engineer Intern"
                        startDate="Sept 2023"
                        endDate="May 2024"
                        description={[
                            `
                            Engineered the core backend for an industry-first billing portal by designing a Spring Boot 
                            application with MariaDB database and integrating with a massive, undocumented ERP system by 
                            creating at least a dozen RESTful APIs.
                            `,
                            `
                            Developed key frontend components using React and TypeScript, including secure login,
                            payment, and autopay UIs, while also driving project velocity by managing the team's agile 
                            workflow and issue tracking on GitHub.
                            `
                        ]}
                        website="https://www.ferris.edu/art-design/"
                    />

                    <HrItem/>

                </div>
            </div>
        </>
    );
}
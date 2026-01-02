import ExperienceItem from "./ExperienceItem.tsx";

export default function Experience() {
    return (
        <>
            <div className="flex flex-col px-2 pb-8">
                <div className="text-3xl md:text-6xl text-center md:text-start py-1 md:py-4">
                    Experience
                </div>

                <div className="flex flex-col gap-8 pt-2">
                    <ExperienceItem
                        company="Telic AI"
                        jobTitle="Software Engineer"
                        startDate="Oct 2025"
                        endDate="Present"
                        description={[
                            `Researched and experimented with dozens of ML models to identify the most effective models 
                            at image generation and image mixing for an undisclosed use-case.`,
                            `Experimented with creating multi-language documents from a node-js environment using images 
                            and text using libraries like pdfkit and puppeteer.`,
                            `Created an ecommerce web platform using PayloadCMS, PostgresSQL, Docker, and Next.js to 
                            create products, manage content for the website, and procure personalized products via ML 
                            model integration and automation.`
                        ]}
                    />
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
                </div>
            </div>
        </>
    );
}

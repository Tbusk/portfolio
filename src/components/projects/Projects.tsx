import Project from "./Project.tsx";
import SectionTitle from "../common/SectionTitle.tsx";
import HrItem from "../common/HrItem.tsx";

export default function Projects() {
    return (
        <>
            <div className="flex flex-col">

                <SectionTitle title="Projects" id="projects"/>

                <div className="flex flex-col gap-8 md:pt-2 md:px-2 px-6">
                    <Project
                        name="Vala Language Plugin for JetBrains IDEs"
                        description={
                            `
                            Authored and published an open-source full-featured language plugin for the Vala programming 
                            language. 
                            `
                        }
                        metrics={[
                            `10k Downloads`
                        ]}
                        techStack={[
                            `Java`,
                            `Vala`,
                            `JetBrains Grammar Kit`,
                            `LSP4IJ`,
                            `JUnit`,
                            `Gradle Groovy`,
                            `Lex`,
                            `BNF`
                        ]}
                        link="https://github.com/Tbusk/vala-jetbrains-plugin"
                    />

                    <HrItem />

                    <Project
                        name="Warehouse Item Classification"
                        description={
                            `
                            Engineered a machine learning computer vision system to reduce military disposition waste.
                            `
                        }
                        metrics={[
                            `Top-1 Accuracy: 89%`,
                            `Top-5 Accuracy: 96%`,
                            `228,000 images`,
                            `29,500 items`,
                            `+12% over top OS models`
                        ]}
                        techStack={[
                            `Python`,
                            `Tensorflow`,
                            `ROCm`,
                            `Ollama`,
                            `Selenium`
                        ]}
                    />

                    <HrItem />

                    <Project
                        name="Portfolio"
                        description={
                            `
                            Created this open-source portfolio website showcasing my projects, experience, skills, and more.
                            `
                        }
                        metrics={[
                        ]}
                        techStack={[
                            `HTML`,
                            `CSS`,
                            `TypeScript`,
                            `Preact`,
                            `Vite`,
                            `Tailwind CSS`,
                        ]}
                        link="https://github.com/Tbusk/portfolio"
                    />

                    <HrItem />

                    <Project
                        name="LaTeX Resume Template"
                        description={
                            `
                            Created an open-source modular LaTeX resume template which I use for my resume. 
                            `
                        }
                        metrics={[
                        ]}
                        techStack={[
                            `LaTeX`,
                        ]}
                        link="https://github.com/Tbusk/resume"
                    />

                    <Project
                        name="Customer Support Chatbot"
                        description={
                            `
                            Created an open-source ChatGPT-powered customer support chatbot widget for websites.
                            `
                        }
                        metrics={[
                        ]}
                        techStack={[
                            `Java`,
                            `React`,
                            `Vite`,
                            `Tailwind CSS`,
                            `Radix UI`,
                            `Spring Boot`,
                            `Spring AI OpenAI`,
                            `Spring Web`,
                            `Maven`,
                            `JUnit`
                        ]}
                        link="https://github.com/Tbusk/Customer-Support-Chatbot/"
                    />

                    <HrItem />

                    <Project
                        name="O/1 Stock Knapsack"
                        description={
                            `
                            Solved an 0/1 stock knapsack problem via greedy, optimal, and dp-optimized approaches 
                            algorithms.
                            `
                        }
                        metrics={[
                        ]}
                        techStack={[
                            `Java`,
                            `FasterXML Jackson CSV`,
                            `Maven`,
                            `JUnit`
                        ]}
                        link="https://github.com/Tbusk/Stock-Knapsack-Project/"
                    />

                    <HrItem />
                </div>
            </div>
        </>
    );
}

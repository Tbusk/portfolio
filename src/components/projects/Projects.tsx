import Project from "./Project.tsx";
import SectionTitle from "../common/SectionTitle.tsx";

export default function Projects() {
    return (
        <>
            <div className="flex flex-col pb-8">

                <SectionTitle title="Projects" id="projects"/>

                <div className="flex flex-col gap-8 pt-2">
                    <Project
                        name="Vala Language Plugin for JetBrains IDEs"
                        description={
                            `
                            Authored and published an open-source full-featured language plugin for the Vala programming 
                            language. 
                            `
                        }
                        metrics={[
                            `9.5k Downloads`
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

                    <Project
                        name="Warehouse Item Classification"
                        description={
                            `
                            Engineered a computer vision system to reduce military disposition waste, achieving 89% 
                            top-1 and 96% top-5 accuracy in classifying 29,500 unique items across a dataset of 
                            228,000 images, surpassing the top open-source model by 12%.
                            `
                        }
                        metrics={[
                        ]}
                        techStack={[
                            `Python`,
                            `Tensorflow`,
                            `ROCm`,
                            `Ollama`,
                            `Selenium`
                        ]}
                    />

                    <Project
                        name="Portfolio"
                        description={
                            `
                            Created this portfolio website showcasing my projects, experience, skills, and more.
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

                    <Project
                        name="Customer Support Chatbot"
                        description={
                            `
                            Created a ChatGPT-powered customer support chatbot widget for websites.
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
                </div>
            </div>
        </>
    );
}

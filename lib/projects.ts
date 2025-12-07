import { StaticImageData } from "next/image";

import polar from "@/public/projects/polar.png";
import portfolioV2 from "@/public/projects/portfolio_v2.png";
import portfolioV1 from "@/public/projects/portfolio_v1.png";
import nextPizza from "@/public/projects/nextpizza.png";


export type ProjectProps = {
    thumbnail: StaticImageData;
    title: string;
    description: string;
    technologies: Technologie[];
    github: string;
    demo?: string;
    development?: boolean;
}

type Technologie = {
    icon?: string;
    name: string;
}

export function getProjects(t: (key: string) => string): ProjectProps[] {
    return [
        {
            thumbnail: portfolioV2,
            title: "Portfolio v2",
            description: t("projects.2.description"),
            development: true,
            technologies: [
                {
                    name: "Next.js"
                },
                {
                    name: "shadcn/ui"
                },
                {
                    name: "next-intl"
                },
                {
                    name: "simpleicons"
                },
                {
                    name: "lucid-react"
                },
                {
                    name: "tailwindcss"
                },
                {
                    name: "Typescript"
                },
                {
                    name: "motion"
                },
                {
                    name: "Lanyard"
                },
                {
                    name: "Vercel"
                }
            ],
            github: "https://github.com/RECHERGG/portfolio"
        },
        {
            thumbnail: portfolioV1,
            title: "Portfolio v1",
            description: t("projects.1.description"),
            technologies: [
                {
                    name: "Next.js"
                },
                {
                    name: "shadcn/ui"
                },
                {
                    name: "motion"
                },
                {
                    name: "lucid-react"
                },
                {
                    name: "tailwindcss"
                },
                {
                    name: "Typescript"
                },
                {
                    name: "Vercel"
                },
            ],
            github: "https://github.com/RECHERGG/portfolio/tree/v1",
            demo: "https://portfolio-git-master-joels-projects-15c05343.vercel.app"
        },
        {
            thumbnail: nextPizza,
            title: "NextPizza",
            description: t("projects.0.description"),
            technologies: [
                {
                    name: "Next.js"
                },
                {
                    name: "Typescript"
                },
                {
                    name: "axios"
                },
                {
                    name: "react-chartjs-2"
                },
                {
                    name: "Java"
                },
                {
                    name: "Javalin"
                },
                {
                    name: "MongoDB"
                },
                {
                    name: "Docker"
                }
            ],
            github: "https://github.com/RECHERGG/NextPizza",
        }
    ]
  }
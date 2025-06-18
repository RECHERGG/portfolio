import { StaticImageData } from "next/image";

import portfolio from "@/public/projects/portfolio.png";
import nextPizza from "@/public/projects/nextpizza.png";


export type ProjectProps = {
    thumbnail: StaticImageData;
    title: string;
    description: string;
    technologies: Technologie[];
    github: string;
    demo?: string;
}

type Technologie = {
    icon?: string;
    name: string;
}

export function getProjects(t: (key: string) => string): ProjectProps[] {
    return [
        {
            thumbnail: portfolio,
            title: "Portfolio",
            description: t("projects.1.description"),
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
            github: "https://github.com/RECHERGG/portfolio",
            demo: "https://jtobaben.me/"
        },
        {
            thumbnail: nextPizza,
            title: "NextPizza",
            description: t("projects.2.description"),
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
"use client";

import React from "react";
import TechStackCard from "@/components/ui/techstack-card";

import javaImage from "@/public/techstack/java.png"
import mongodbImage from "@/public/techstack/mongodb.png"
import springImage from "@/public/techstack/spring.png"
import typeScriptImage from "@/public/techstack/typescript.png"
import reactImage from "@/public/techstack/react.png"
import nextjsImage from "@/public/techstack/nextjs.png"
import tailwindImage from "@/public/techstack/tailwind.png"
import dockerImage from "@/public/techstack/docker.png"
import gitImage from "@/public/techstack/git.png"
import {motion} from "framer-motion";

const techStack = [
    {
        name: "Java",
        type: "Programming Language",
        src: javaImage.src,
    },
    {
        name: "MongoDB",
        type: "Database",
        src: mongodbImage.src,
    },
    {
        name: "Spring",
        type: "Java Framework",
        src: springImage.src,
    },
    {
        name: "TypeScript",
        type: "Programming Language",
        src: typeScriptImage.src,
    },
    {
        name: "React",
        type: "JavaScript Library",
        src: reactImage.src,
    },
    {
        name: "Next.js",
        type: "React Framework",
        src: nextjsImage.src,
    },
    {
        name: "TailwindCSS",
        type: "CSS Framework",
        src: tailwindImage.src,
    },
    {
        name: "Docker",
        type: "Containerization",
        src: dockerImage.src,
    },
    {
        name: "Git",
        type: "Version Control",
        src: gitImage.src,
    }
];

export default function TechStack() {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -50}}
            transition={{duration: 0.5}}
        >
            <div className="py-16">
                <div className="max-w-6xl mx-auto px-2">
                    <h2 className="text-4xl font-bold text-center mb-6">My Tech Stack</h2>
                    <p className="text-neutral-400 text-center mb-12">
                        My go-to Frameworks and languages for building innovative projects.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {techStack.map((stack) => (
                            <TechStackCard key={`${stack.name}-${stack.type}`} techStack={stack}/>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
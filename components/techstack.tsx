'use client';

import React from "react";

import javaImage from "@/public/techstack/java.png"
import mongodbImage from "@/public/techstack/mongodb.png"
import springImage from "@/public/techstack/spring.png"
import typeScriptImage from "@/public/techstack/typescript.png"
import reactImage from "@/public/techstack/react.png"
import nextjsImage from "@/public/techstack/nextjs.png"
import tailwindImage from "@/public/techstack/tailwind.png"
import dockerImage from "@/public/techstack/docker.png"
import gitImage from "@/public/techstack/git.png"
import { motion } from "framer-motion";
import TechStackCard from "./techstack-card";
import { useTranslations } from "next-intl";

export default function TechStack() {

    const t = useTranslations();

    const techStack = [
        {
            name: "Java",
            type: t("profile.techstack.java"),
            src: javaImage.src,
        },
        {
            name: "Spring",
            type: "Java Framework",
            src: springImage.src,
        },
        {
            name: "MongoDB",
            type: t("profile.techstack.mongodb"),
            src: mongodbImage.src,
        },
        {
            name: "Docker",
            type: t("profile.techstack.docker"),
            src: dockerImage.src,
        },
        {
            name: "Git",
            type: t("profile.techstack.git"),
            src: gitImage.src,
        },
        {
            name: "TypeScript",
            type: t("profile.techstack.typescript"),
            src: typeScriptImage.src,
        },
        {
            name: "Next.js",
            type: "React Framework",
            src: nextjsImage.src,
        },
        {
            name: "React",
            type: t("profile.techstack.react"),
            src: reactImage.src,
        },
        {
            name: "TailwindCSS",
            type: "CSS Framework",
            src: tailwindImage.src,
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="space-y-6 pt-4 pb-4">
                {techStack.map((stack) => (
                    <TechStackCard key={`${stack.name}-${stack.type}`} techStack={stack} />
                ))}
            </div>
        </motion.div>
    );
}
'use client';

import { motion } from "framer-motion";
import { useTranslations } from "next-intl"
import ProjectCard from "./project-card";
import { getProjects } from "@/lib/projects";

export default function Projects() {
    const t = useTranslations()
    const projects = getProjects(t);

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-4">
            <h1 className="text-4xl font-bold mb-4">{t("projects.title")}</h1>
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <ProjectCard key={project.title} thumbnail={project.thumbnail} title={project.title} description={project.description} technologies={project.technologies} github={project.github} demo={project.demo} />
                </motion.div>
            ))}
        </div>
    )
}
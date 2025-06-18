'use client';

import { useTranslations } from "next-intl"
import ProjectCard from "./project-card";
import { getProjects } from "@/lib/projects";

export default function Projects() {
    const t = useTranslations()
    const projects = getProjects(t);

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{t("projects.title")}</h1>
            {projects.map((project) => (
                <ProjectCard key={project.title} thumbnail={project.thumbnail} title={project.title} description={project.description} technologies={project.technologies} github={project.github} demo={project.demo} />
            ))}
        </div>
    )
}
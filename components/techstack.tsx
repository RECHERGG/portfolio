'use client';

import React from "react";

import { motion } from "framer-motion";
import TechStackCard from "./techstack-card";
import { getTechStack } from "@/lib/techstack-data";
import { useTranslations } from "next-intl";
import { Separator } from "./ui/separator";
import GitHubProjectCard from "./github/github-project-card";

export default function TechStack() {
    const t = useTranslations()
    const techStack = getTechStack(t)

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="space-y-4 pb-4">
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Open Source Contributions</h3>
                    <GitHubProjectCard owner="thePolocloud" repo="polocloud" collaborator={true} />
                    <GitHubProjectCard owner="bklit" repo="bklit" />
                </div>

                <Separator className="my-4" />

                <h2 className="text-xl font-semibold">Tech Stack</h2>
                {techStack.map((stack) => (
                    <TechStackCard key={`${stack.name}-${stack.type}`} techStack={stack} />
                ))}
            </div>
        </motion.div>
    );
}
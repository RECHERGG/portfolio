'use client';

import { motion } from "framer-motion";
import ProfileCard from '@/components/profile-card';
import TechStack from '@/components/techstack';
import { Badge } from '@/components/ui/badge';
import { IdCard, Languages, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Separator } from "@/components/ui/separator";
import DiscordCard from "@/components/discord/discord-card";
import Projects from "@/components/projects/projects";
import Timeline from "@/components/experience/timeline";

export default function HomePage() {
    const t = useTranslations();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-6"
        >
            <motion.aside
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-full lg:w-[300px]"
            >
                <ProfileCard />

                <div className="space-y-6 pt-2 overflow-hidden">

                    <DiscordCard />

                    <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant="outline">
                            <MapPin /> {t("profile.badges.location")}
                        </Badge>
                        <Badge variant="outline">
                            <IdCard /> {Math.floor((Date.now() - new Date("2008-02-10").getTime()) / (365.25 * 24 * 60 * 60 * 1000))} {t("profile.badges.age")}
                        </Badge>
                        <Badge variant="outline">
                            <Languages /> {t("profile.badges.languages.de")}
                        </Badge>
                        <Badge variant="outline">
                            <Languages /> {t("profile.badges.languages.en")}
                        </Badge>
                    </div>

                    <Separator />

                    <h2 className="text-2xl font-semibold">Tech Stack</h2>
                    <TechStack />
                </div>
            </motion.aside>

            <div className="flex-1 min-w-0 space-y-8">
                <section id="work-experience" className="space-y-4">
                    <Timeline />
                </section>

                <Separator />

                {/* Projects */}
                <section id="projects" className="space-y-4">
                    <Projects />
                </section>
            </div>
        </motion.div >
    );
}
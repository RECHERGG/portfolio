'use client';

import ProfileCard from '@/components/profile-card';
import TechStack from '@/components/techstack';
import { Badge } from '@/components/ui/badge';
import { IdCard, Languages, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations();

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-[300px]">
                <ProfileCard />


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

                <div className="pt-12">
                    <h2 className="text-2xl font-bold">TechStack</h2>

                    <TechStack />
                </div>
            </aside>

            <div className="flex flex-col">
                {/* Job Position Timeline */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Berufserfahrung</h2>
                    {/* Timeline content here */}
                </section>

                {/* Projects */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Projekte</h2>
                    {/* Project cards here */}
                </section>

                {/* Tech Stack */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Tech Stack</h2>
                    {/* Tech stack content here */}
                </section>
            </div>
        </div>
    );
}
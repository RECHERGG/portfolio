'use client';

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin } from "lucide-react"
import { getExperiences } from "@/lib/experience-data"
import { useTranslations } from "next-intl"

export default function Timeline() {
    const t = useTranslations()
    const experiences = getExperiences(t)

    const [visibleItems, setVisibleItems] = useState<number[]>([])
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
                        setVisibleItems((prev) => [...new Set([...prev, index])])
                    }
                })
            },
            { threshold: 0.2 },
        )

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{t("workexperience.title")}</h1>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            ref={(el) => {
                                itemRefs.current[index] = el
                            }}
                            data-index={index}
                            className={`relative transition-all duration-700 ease-out ${visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Timeline Dot */}
                            <div
                                className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background transition-all duration-500 ${experience.current
                                    ? "bg-primary shadow-lg shadow-primary/50"
                                    : visibleItems.includes(index)
                                        ? "bg-primary"
                                        : "bg-muted"
                                    } ${experience.current ? "animate-pulse" : ""}`}
                            ></div>

                            {/* Content Card */}
                            <div className="ml-16">
                                <Card
                                    className={`transition-all duration-500 hover:shadow-lg ${visibleItems.includes(index) ? "shadow-md" : ""
                                        }`}
                                >
                                    <CardHeader>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <div>
                                                <CardTitle className="text-xl">{experience.title}</CardTitle>
                                                <CardDescription className="text-lg font-medium text-foreground">
                                                    {experience.company}
                                                </CardDescription>
                                            </div>
                                            {experience.current && (
                                                <Badge variant="default" className="w-fit animate-pulse">
                                                    Aktuell
                                                </Badge>
                                            )}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <CalendarDays className="w-4 h-4" />
                                                <span>
                                                    {experience.startDate} - {experience.endDate}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{experience.location}</span>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="text-muted-foreground mb-4 text-sm">{experience.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {experience.skills.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skill}
                                                    variant="secondary"
                                                    className={`transition-all duration-300 ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                                                        }`}
                                                    style={{
                                                        transitionDelay: `${index * 200 + skillIndex * 100}ms`,
                                                    }}
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

import { tr } from "motion/react-client"

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  skills: string[]
  current?: boolean
}

export function getExperiences(t: (key: string) => string): Experience[] {
  return [
    {
      id: 1,
      title: t("workexperience.1.title"),
      company: "ZEISS Digital Innovation",
      location: t("workexperience.1.location"),
      startDate: t("workexperience.1.startDate"),
      endDate: t("workexperience.1.endDate"),
      description: t("workexperience.1.description"),
      skills: ["React", "Next.js", "Tailwind CSS", "Java", "Javalin"],
      current: false,
    },
    {
      id: 2,
      title: t("workexperience.2.title"),
      company: "ZEISS Digital Innovation",
      location: t("workexperience.2.location"),
      startDate: t("workexperience.2.startDate"),
      endDate: t("workexperience.2.endDate"),
      description: t("workexperience.2.description"),
      skills: ["JavaScript", "Kotlin", "REST API", t("workexperience.2.codeStyle"), "JUnit"],
    },
  ]
}

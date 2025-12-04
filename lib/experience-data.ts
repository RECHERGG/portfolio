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
      id: 3,
      title: t("workexperience.3.title"),
      company: "LiberTec GmbH",
      location: t("workexperience.3.location"),
      startDate: t("workexperience.3.startDate"),
      endDate: t("workexperience.3.endDate"),
      description: t("workexperience.3.description"),
      skills: ["Marketing", "Adobe After Effects", "Adobe Premiere Pro", "CapCut", "Davinci Resolve", "Canva", "Figma", "WordPress"],
      current: true,
    },
    {
      id: 2,
      title: t("workexperience.2.title"),
      company: "ZEISS Digital Innovation",
      location: t("workexperience.2.location"),
      startDate: t("workexperience.2.startDate"),
      endDate: t("workexperience.2.endDate"),
      description: t("workexperience.2.description"),
      skills: ["React", "Next.js", "Tailwind CSS", "Java", "Javalin"],
      current: false,
    },
    {
      id: 1,
      title: t("workexperience.1.title"),
      company: "ZEISS Digital Innovation",
      location: t("workexperience.1.location"),
      startDate: t("workexperience.1.startDate"),
      endDate: t("workexperience.1.endDate"),
      description: t("workexperience.1.description"),
      skills: ["JavaScript", "Kotlin", "REST API", t("workexperience.1.codeStyle"), "JUnit"],
    },
  ]
}

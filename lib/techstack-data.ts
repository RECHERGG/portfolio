import javaImage from "@/public/techstack/java.png"
import mongodbImage from "@/public/techstack/mongodb.png"
import springImage from "@/public/techstack/spring.png"
import typeScriptImage from "@/public/techstack/typescript.png"
import reactImage from "@/public/techstack/react.png"
import nextjsImage from "@/public/techstack/nextjs.png"
import tailwindImage from "@/public/techstack/tailwind.png"
import dockerImage from "@/public/techstack/docker.png"
import gitImage from "@/public/techstack/git.png"

export function getTechStack(t: ReturnType<typeof import("next-intl").useTranslations>) {
  return [
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
  ]
}

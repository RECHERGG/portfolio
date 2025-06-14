export function getNavItems(t: ReturnType<typeof import("next-intl").useTranslations>) {
    return [
        {
            href: "#work-experience",
            label: t("navItems.workexperience")
          },
          {
            href: "#projects",
            label: t("navItems.projects")
          },
          {
            href: "#tech-stack",
            label: "TechStack"
          }
    ]
  }
'use client';

import Link from "next/link"

import { ModeSwitcher } from "@/components/mode-switcher"
// import blocks from "@/registry/__blocks__.json"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import LanguageSwitcher from "./language-switcher"
import { siteConfig } from "@/lib/config"
import {  Terminal } from "lucide-react"
import { MainNav } from "./main-nav"
import { getNavItems } from "@/lib/nav-items"
import { useTranslations } from "next-intl";

export function SiteHeader() {
  const t = useTranslations();
  //const pageTree = source.pageTree

  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="container-wrapper 3xl:fixed:px-0 px-6 mx-auto max-w-5xl">
        <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
          {/*<MobileNav
            tree={pageTree}
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />*/}
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden lg:flex items-center space-x-2"
          >
            <Link href="/">
              <Terminal className="size-5" />
              <span className="font-semibold text-lg">{siteConfig.name}</span>
            </Link>
          </Button>
          <MainNav items={getNavItems(t)} className="hidden lg:flex pl-36" />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <LanguageSwitcher />
            <Separator orientation="vertical" />
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
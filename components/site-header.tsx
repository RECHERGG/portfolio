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
import React from "react";

export function SiteHeader() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[93.2%] md:w-[49.5%] lg:w-[51.3%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Terminal className="size-5" />
        <span className="font-semibold text-lg">{siteConfig.name}</span>
      </Link>
      <div className="container-wrapper 3xl:fixed:px-0 px-6 mx-auto max-w-5xl">
        <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
          {/*<MobileNav TODOODODO
            tree={pageTree}
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />*/}
          <MainNav items={getNavItems(t)} className="hidden lg:flex pl-36" />
        </div>
      </div>

      <div className="hidden lg:flex space-x-2">
        <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <LanguageSwitcher />
            <Separator orientation="vertical" />
            <ModeSwitcher />
          </div>
      </div>
    </header>
  )
}
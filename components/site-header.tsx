'use client';

import Link from "next/link"

import { ModeSwitcher } from "@/components/mode-switcher"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import LanguageSwitcher from "./language-switcher"
import { siteConfig } from "@/lib/config"
import {  ChevronsDown, Menu, Terminal } from "lucide-react"
import { getNavItems } from "@/lib/nav-items"
import { useTranslations } from "next-intl";
import React from "react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

export function SiteHeader() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-5 z-40 mx-auto max-w-4xl w-full rounded-2xl bg-card p-2 shadow-inner border border-secondary flex justify-between items-center">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Terminal className="size-5" />
        <span className="font-semibold text-lg">{siteConfig.name}</span>
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="font-bold text-lg flex items-center">
                    <Terminal className="size-8" />
                    <span className="font-semibold text-2xl">{siteConfig.name}</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {getNavItems(t).map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <div className="flex space-x-2">
                <LanguageSwitcher />
                <Separator orientation="vertical" />
                <ModeSwitcher />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {/*<NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>*/}

          <NavigationMenuItem className="flex">
            {getNavItems(t).map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

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
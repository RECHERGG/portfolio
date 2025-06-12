import Link from "next/link"

import { ModeSwitcher } from "@/components/mode-switcher"
// import blocks from "@/registry/__blocks__.json"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import LanguageSwitcher from "./language-switcher"
import { siteConfig } from "@/site"
import { Code, FileScan, Inbox, Terminal } from "lucide-react"

export function SiteHeader() {
  //const pageTree = source.pageTree

  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
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
              <span className="font-semibold text-lg">jtobaben.me</span>
            </Link>
          </Button>
          {/*<MainNav items={siteConfig.navItems} className="hidden lg:flex" />*/}
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
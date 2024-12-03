import Link from "next/link";

import { siteConfig } from "@/config/site";

import { NavigationMobile } from "@/components/nav/navigation-mobile";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "./navigation";
import { UserNav } from "./user-nav";

export async function Header(): Promise<JSX.Element> {
  return (
    // <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    //   <div className="container flex h-14 items-center">
    //     <div className="mr-4 flex">
    //       <Link href="/" className="mr-6 flex items-center space-x-2">
    //         <span className="font-bold">{siteConfig.name}</span>
    //       </Link>
    //     </div>
    //     <Navigation navItems={siteConfig.navItems} />

    //     <div className="ml-auto flex items-center space-x-4">
    //       <ThemeToggle />
    //       <UserNav />
    //       <NavigationMobile navItems={siteConfig.navItems} />
    //     </div>
    //   </div>
    // </header>

    //TODO : modifier le menu pour qu'il soit sticky + modifier le bouton du hamburger
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
        >
          <span className="flex">{siteConfig.name}</span>
        </Link>
        <Navigation navItems={siteConfig.navItems} />
        <div className="flex items-center justify-center">
          <ThemeToggle />
          <NavigationMobile navItems={siteConfig.navItems} />
          <nav className="space-x-1">
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  );
}

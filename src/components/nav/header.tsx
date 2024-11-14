import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Navigation } from "@/components/nav/navigation";
import { NavigationMobile } from "@/components/nav/navigation-mobile";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function Header(): Promise<JSX.Element> {
  return (
    <header className="sticky top-0 z-40 flex h-20 w-full bg-transparent justify-center">
      <div className="container flex items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
        >
          <span className="hidden md:flex">{siteConfig.name}</span>
        </Link>
        <Navigation navItems={siteConfig.navItems} />
        <div className="flex items-center justify-center">
          <ThemeToggle />
          <NavigationMobile navItems={siteConfig.navItems} />

          <nav className="space-x-1">
            {/* {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className={cn(
                    buttonVariants({ variant: "user", size: "icon" }),
                    "transition-all duration-300 ease-in-out hover:opacity-70"
                  )}
                >
                  <Avatar className="size-9">
                    {session?.user.image ? (
                      <AvatarImage
                        src={session?.user.image}
                        alt={session?.user.name ?? "user's profile picture"}
                        className="size-7 rounded-full"
                      />
                    ) : (
                      <AvatarFallback className="size-9 cursor-pointer p-1.5 text-xs capitalize"></AvatarFallback>
                    )}
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">

                        session?.user.name
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">

                        session.user.email
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild disabled>
                      <Link href="/dashboard/account">

                        Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild disabled>
                      <Link href="/dashboard/settings">

                        Settings
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>

                    <Button>Sign Out</Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                aria-label="Sign In"
                href="/signin"
                className={cn(buttonVariants({ size: "sm" }), "ml-2")}
              >
                Sign In
                <span className="sr-only">Si</span>
              </Link>
            )} */}
            <Link
              aria-label="Sign In"
              href="/signin"
              className={cn(buttonVariants({ size: "sm" }), "ml-2")}
            >
              Sign In
              <span className="sr-only">Si</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

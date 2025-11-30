"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/logs",
      label: "Logs",
      active: pathname === "/logs",
    },
    {
      href: "/experiments",
      label: "Experiments",
      active: pathname === "/experiments",
    },
    {
      href: "/source-code",
      label: "Source Code",
      active: pathname === "/source-code",
    },
    {
      href: "/lore",
      label: "Lore",
      active: pathname === "/lore",
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[280px]">
        <div className="flex flex-col space-y-4 py-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`px-2 py-1 text-lg ${
                route.active ? "text-primary font-medium" : "text-muted-foreground"
              }`}
              onClick={() => setOpen(false)}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
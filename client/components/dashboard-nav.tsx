"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Globe, ShoppingCart, FileText, Users } from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Websites",
      href: "/dashboard/websites",
      icon: Globe,
      active: pathname?.startsWith("/dashboard/websites"),
    },
    {
      name: "Store",
      href: "/dashboard/store",
      icon: ShoppingCart,
      active: pathname?.startsWith("/dashboard/store"),
    },
    {
      name: "Community",
      href: "/dashboard/community",
      icon: Users,
      active: pathname?.startsWith("/dashboard/community"),
    },
    {
      name: "Resources",
      href: "/dashboard/resources",
      icon: FileText,
      active: pathname?.startsWith("/dashboard/resources"),
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            item.active ? "text-primary" : "text-muted-foreground",
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.name}
        </Link>
      ))}
    </nav>
  )
}


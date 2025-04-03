"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  BarChart3,
  CreditCard,
  Globe,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Settings,
  ShoppingCart,
  Users,
  Bell,
  Sparkles,
  FileText,
  CalendarClock,
  UserCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardNav } from "@/components/dashboard-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b bg-[#341539] px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden text-white border-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 sm:max-w-xs">
              <nav className="flex flex-col gap-4 p-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-lg font-semibold text-[#341539]"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Image
                    src="/Elevateher.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <span>ElevateHer</span>
                </Link>
                <div className="flex flex-col gap-1">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/websites"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <Globe className="h-4 w-4" />
                    Websites
                  </Link>
                  <Link
                    href="/dashboard/store"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    E-commerce
                  </Link>
                  <Link
                    href="/dashboard/store/appointments"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <CalendarClock className="h-4 w-4" />
                    Appointments
                  </Link>
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <UserCircle className="h-4 w-4" />
                    Business Profile
                  </Link>
                  <Link
                    href="/dashboard/messages"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Messages
                  </Link>
                  <Link
                    href="/dashboard/analytics"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <BarChart3 className="h-4 w-4" />
                    Analytics
                  </Link>
                  <Link
                    href="/dashboard/ai-content"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <Sparkles className="h-4 w-4" />
                    AI Content
                  </Link>
                  <Link
                    href="/dashboard/community"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <Users className="h-4 w-4" />
                    Community
                  </Link>
                  <Link
                    href="/dashboard/resources"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <FileText className="h-4 w-4" />
                    Resources
                  </Link>
                  <Link
                    href="/dashboard/billing"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <CreditCard className="h-4 w-4" />
                    Billing
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-[#341539]"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-white">
            <Image src="/Elevateher.jpg" alt="Logo" width={32} height={32} className="rounded-lg" />
            <span className="hidden md:inline">ElevateHer</span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <DashboardNav />
        </nav>

        {/* Right-side Icons */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full text-black border-white hover:bg-white/90">
            <MessageSquare className="h-4 w-4" />
            <span className="sr-only">Messages</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full text-black border-white hover:bg-white/90">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-white text-black">JS</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}


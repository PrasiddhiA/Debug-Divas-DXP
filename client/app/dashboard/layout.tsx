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
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-lg font-semibold"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span>EmpowerHub</span>
              </Link>
              <nav className="grid gap-4 text-sm">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/websites"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Globe className="h-4 w-4" />
                  Websites
                </Link>
                <Link
                  href="/dashboard/store"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  E-commerce
                </Link>
                <Link
                  href="/dashboard/store/appointments"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <CalendarClock className="h-4 w-4" />
                  Appointments
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <UserCircle className="h-4 w-4" />
                  Business Profile
                </Link>
                <Link
                  href="/dashboard/messages"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <MessageSquare className="h-4 w-4" />
                  Messages
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <BarChart3 className="h-4 w-4" />
                  Analytics
                </Link>
                <Link
                  href="/dashboard/ai-content"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Sparkles className="h-4 w-4" />
                  AI Content
                </Link>
                <Link
                  href="/dashboard/community"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Users className="h-4 w-4" />
                  Community
                </Link>
                <Link
                  href="/dashboard/resources"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <FileText className="h-4 w-4" />
                  Resources
                </Link>
                <Link
                  href="/dashboard/billing"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <CreditCard className="h-4 w-4" />
                  Billing
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </nav>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold md:text-lg">
          <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-lg" />
          <span className="hidden md:inline">EmpowerHub</span>
        </Link>

        {/* Add the navigation bar here */}
        <div className="hidden md:block">
          <DashboardNav />
        </div>

        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <MessageSquare className="h-4 w-4" />
            <span className="sr-only">Messages</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="" alt="User" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}


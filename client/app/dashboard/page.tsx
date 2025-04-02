"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Globe, Plus, ShoppingCart, Users, FileText, MessageSquare, Calendar, ArrowLeft } from "lucide-react"
import { DashboardCharts } from "@/components/dashboard-charts"
import Link from "next/link"

export default function DashboardPage() {
  const recentActivities = [
    {
      id: 1,
      title: "New Website Created",
      description: "You created a new website 'Fashion Boutique'",
      icon: Globe,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "Product Added",
      description: "Added new product 'Summer Collection Dress' to store",
      icon: ShoppingCart,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      title: "New Message",
      description: "Received a new message from Sarah Johnson",
      icon: MessageSquare,
      timestamp: "1 day ago",
    },
    {
      id: 4,
      title: "Appointment Scheduled",
      description: "New appointment scheduled for 'Business Consultation'",
      icon: Calendar,
      timestamp: "2 days ago",
    },
    {
      id: 5,
      title: "Content Updated",
      description: "Updated 'About Us' page content",
      icon: FileText,
      timestamp: "3 days ago",
    },
  ]

  const revenueData = {
    weekly: [
      { name: "Mon", revenue: 1200 },
      { name: "Tue", revenue: 1500 },
      { name: "Wed", revenue: 1800 },
      { name: "Thu", revenue: 2100 },
      { name: "Fri", revenue: 2400 },
      { name: "Sat", revenue: 2800 },
      { name: "Sun", revenue: 3000 },
    ],
    monthly: [
      { name: "Jan", revenue: 12000 },
      { name: "Feb", revenue: 15000 },
      { name: "Mar", revenue: 18000 },
      { name: "Apr", revenue: 21000 },
      { name: "May", revenue: 24000 },
      { name: "Jun", revenue: 28000 },
    ],
    yearly: [
      { name: "2020", revenue: 120000 },
      { name: "2021", revenue: 150000 },
      { name: "2022", revenue: 180000 },
      { name: "2023", revenue: 210000 },
      { name: "2024", revenue: 240000 },
    ],
  }

  const trafficData = {
    weekly: [
      { name: "Mon", visitors: 2400, pageViews: 4000 },
      { name: "Tue", visitors: 1398, pageViews: 3000 },
      { name: "Wed", visitors: 9800, pageViews: 5000 },
      { name: "Thu", visitors: 3908, pageViews: 4500 },
      { name: "Fri", visitors: 4800, pageViews: 6000 },
      { name: "Sat", visitors: 3800, pageViews: 5500 },
      { name: "Sun", visitors: 4300, pageViews: 5800 },
    ],
    monthly: [
      { name: "Jan", visitors: 24000, pageViews: 40000 },
      { name: "Feb", visitors: 13980, pageViews: 30000 },
      { name: "Mar", visitors: 98000, pageViews: 50000 },
      { name: "Apr", visitors: 39080, pageViews: 45000 },
      { name: "May", visitors: 48000, pageViews: 60000 },
      { name: "Jun", visitors: 38000, pageViews: 55000 },
    ],
    yearly: [
      { name: "2020", visitors: 240000, pageViews: 400000 },
      { name: "2021", visitors: 139800, pageViews: 300000 },
      { name: "2022", visitors: 980000, pageViews: 500000 },
      { name: "2023", visitors: 390800, pageViews: 450000 },
      { name: "2024", visitors: 480000, pageViews: 600000 },
    ],
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here&apos;s an overview of your business.</p>
        </div>
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Websites</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+21% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
            <CardDescription>Track your revenue and website traffic across different time periods.</CardDescription>
          </CardHeader>
          <CardContent>
            <DashboardCharts revenueData={revenueData} trafficData={trafficData} />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your website and store activity for the last 7 days.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <activity.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


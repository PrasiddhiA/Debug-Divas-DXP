"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  LineChart,
  PieChart,
  ArrowDown,
  ArrowUp,
  Download,
  Calendar,
  Users,
  ShoppingCart,
  DollarSign,
  Clock,
  MousePointer,
  Map,
  Globe,
} from "lucide-react"

// Import the chart components
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  Pie,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

// Import the chart container and tooltip
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function EnhancedAnalyticsPage() {
  const [dateRange, setDateRange] = useState("30d")

  // Sample data for charts
  const websiteTrafficData = [
    { date: "Jan 1", visitors: 1200, pageViews: 3400 },
    { date: "Jan 2", visitors: 1300, pageViews: 3600 },
    { date: "Jan 3", visitors: 1400, pageViews: 3800 },
    { date: "Jan 4", visitors: 1500, pageViews: 4000 },
    { date: "Jan 5", visitors: 1600, pageViews: 4200 },
    { date: "Jan 6", visitors: 1700, pageViews: 4400 },
    { date: "Jan 7", visitors: 1800, pageViews: 4600 },
    { date: "Jan 8", visitors: 1900, pageViews: 4800 },
    { date: "Jan 9", visitors: 2000, pageViews: 5000 },
    { date: "Jan 10", visitors: 2100, pageViews: 5200 },
    { date: "Jan 11", visitors: 2200, pageViews: 5400 },
    { date: "Jan 12", visitors: 2300, pageViews: 5600 },
    { date: "Jan 13", visitors: 2400, pageViews: 5800 },
    { date: "Jan 14", visitors: 2500, pageViews: 6000 },
  ]

  const trafficSourcesData = [
    { name: "Direct", value: 40 },
    { name: "Organic Search", value: 30 },
    { name: "Social Media", value: 15 },
    { name: "Referral", value: 10 },
    { name: "Email", value: 5 },
  ]

  const deviceData = [
    { name: "Desktop", value: 55 },
    { name: "Mobile", value: 40 },
    { name: "Tablet", value: 5 },
  ]

  const salesData = [
    { month: "Jan", revenue: 4000, orders: 240 },
    { month: "Feb", revenue: 3000, orders: 198 },
    { month: "Mar", revenue: 5000, orders: 305 },
    { month: "Apr", revenue: 4500, orders: 275 },
    { month: "May", revenue: 6000, orders: 350 },
    { month: "Jun", revenue: 5500, orders: 320 },
  ]

  const productPerformanceData = [
    { name: "Product A", sales: 120, revenue: 2400 },
    { name: "Product B", sales: 98, revenue: 1960 },
    { name: "Product C", sales: 86, revenue: 1720 },
    { name: "Product D", sales: 72, revenue: 1440 },
    { name: "Product E", sales: 65, revenue: 1300 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Business Analytics</h1>
        <p className="text-muted-foreground">Comprehensive insights into your business performance.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" className="gap-1">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,789</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">12%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">0.5%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">792</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">8%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,487</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">14%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Website Traffic</CardTitle>
                <CardDescription>Visitors and page views over time.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    visitors: {
                      label: "Visitors",
                      color: "hsl(var(--chart-1))",
                    },
                    pageViews: {
                      label: "Page Views",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={websiteTrafficData}>
                      <defs>
                        <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-visitors)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="var(--color-visitors)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-pageViews)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="var(--color-pageViews)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="visitors"
                        stroke="var(--color-visitors)"
                        fillOpacity={1}
                        fill="url(#colorVisitors)"
                      />
                      <Area
                        type="monotone"
                        dataKey="pageViews"
                        stroke="var(--color-pageViews)"
                        fillOpacity={1}
                        fill="url(#colorPageViews)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors are coming from.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSourcesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {trafficSourcesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>Visitors by device type.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Your most visited pages.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { page: "Home", views: 12456, time: "1m 23s" },
                    { page: "Products", views: 8765, time: "2m 10s" },
                    { page: "About", views: 4321, time: "1m 45s" },
                    { page: "Contact", views: 2345, time: "0m 55s" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.page}</div>
                        <div className="text-xs text-muted-foreground">Avg. Time: {item.time}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{item.views.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">views</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
                <CardDescription>How users interact with your site.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { metric: "Avg. Session Duration", value: "2m 45s", change: "+12%" },
                    { metric: "Pages per Session", value: "3.5", change: "+8%" },
                    { metric: "Bounce Rate", value: "42%", change: "-3%" },
                    { metric: "New vs. Returning", value: "65% / 35%", change: "+5%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="font-medium">{item.metric}</div>
                      <div className="text-right">
                        <div className="font-medium">{item.value}</div>
                        <div className={`text-xs ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowDown className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">3%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2m 45s</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">12%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Pages/Session</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.5</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">8%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">New Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">16,122</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">15%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>Where your visitors are located.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <Map className="h-60 w-60 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Referral Sources</CardTitle>
                <CardDescription>Top websites sending traffic to you.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-3 border-b p-4 text-sm font-medium">
                    <div>Source</div>
                    <div>Visitors</div>
                    <div>Conversion Rate</div>
                  </div>
                  {[
                    { source: "google.com", visitors: 8765, conversionRate: "3.2%" },
                    { source: "facebook.com", visitors: 4321, conversionRate: "2.8%" },
                    { source: "instagram.com", visitors: 3456, conversionRate: "3.5%" },
                    { source: "pinterest.com", visitors: 2345, conversionRate: "4.1%" },
                    { source: "twitter.com", visitors: 1234, conversionRate: "2.3%" },
                  ].map((item, i) => (
                    <div key={i} className="grid grid-cols-3 border-b p-4 text-sm">
                      <div>{item.source}</div>
                      <div>{item.visitors.toLocaleString()}</div>
                      <div>{item.conversionRate}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Search Keywords</CardTitle>
                <CardDescription>Top search terms bringing visitors to your site.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-3 border-b p-4 text-sm font-medium">
                    <div>Keyword</div>
                    <div>Visitors</div>
                    <div>Conversion Rate</div>
                  </div>
                  {[
                    { keyword: "sustainable jewelry", visitors: 2345, conversionRate: "4.2%" },
                    { keyword: "handcrafted necklaces", visitors: 1876, conversionRate: "3.8%" },
                    { keyword: "eco-friendly earrings", visitors: 1543, conversionRate: "3.5%" },
                    { keyword: "ethical jewelry brands", visitors: 1234, conversionRate: "4.0%" },
                    { keyword: "artisan bracelets", visitors: 987, conversionRate: "3.2%" },
                  ].map((item, i) => (
                    <div key={i} className="grid grid-cols-3 border-b p-4 text-sm">
                      <div>{item.keyword}</div>
                      <div>{item.visitors.toLocaleString()}</div>
                      <div>{item.conversionRate}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
              <CardDescription>Revenue and orders over time.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  revenue: {
                    label: "Revenue",
                    color: "hsl(var(--chart-1))",
                  },
                  orders: {
                    label: "Orders",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      stroke="var(--color-revenue)"
                      activeDot={{ r: 8 }}
                    />
                    <Line yAxisId="right" type="monotone" dataKey="orders" stroke="var(--color-orders)" />
                    <Legend />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$157.32</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">5.2%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <MousePointer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">0.5%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Cart Abandonment</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowDown className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">2%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Repeat Purchase</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500 font-medium">3%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Performance</CardTitle>
              <CardDescription>Sales and revenue by product.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  sales: {
                    label: "Sales",
                    color: "hsl(var(--chart-1))",
                  },
                  revenue: {
                    label: "Revenue",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="left" dataKey="sales" fill="var(--color-sales)" />
                    <Bar yAxisId="right" dataKey="revenue" fill="var(--color-revenue)" />
                    <Legend />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
                <CardDescription>Age and gender distribution.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <PieChart className="h-60 w-60 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interests</CardTitle>
                <CardDescription>Top interests of your audience.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { interest: "Fashion & Accessories", percentage: 78 },
                    { interest: "Sustainable Living", percentage: 65 },
                    { interest: "Arts & Crafts", percentage: 52 },
                    { interest: "Home Decor", percentage: 48 },
                    { interest: "Beauty & Wellness", percentage: 42 },
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.interest}</span>
                        <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Locations</CardTitle>
                <CardDescription>Top locations of your audience.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-2 border-b p-4 text-sm font-medium">
                    <div>Country</div>
                    <div>Visitors</div>
                  </div>
                  {[
                    { country: "United States", visitors: 12456 },
                    { country: "United Kingdom", visitors: 4321 },
                    { country: "Canada", visitors: 3456 },
                    { country: "Australia", visitors: 2345 },
                    { country: "Germany", visitors: 1234 },
                  ].map((item, i) => (
                    <div key={i} className="grid grid-cols-2 border-b p-4 text-sm">
                      <div>{item.country}</div>
                      <div>{item.visitors.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Customer Behavior</CardTitle>
              <CardDescription>How users interact with your site.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-medium">User Flow</h3>
                  <div className="rounded-md border p-4">
                    <div className="flex flex-col items-center">
                      <div className="mb-2 rounded-lg bg-muted p-2 text-center">Homepage</div>
                      <div className="h-8 w-0.5 bg-muted" />
                      <div className="mb-2 grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center">
                          <div className="rounded-lg bg-muted p-2 text-center">Products</div>
                          <div className="h-8 w-0.5 bg-muted" />
                          <div className="rounded-lg bg-muted p-2 text-center">Product Detail</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="rounded-lg bg-muted p-2 text-center">About</div>
                          <div className="h-8 w-0.5 bg-muted" />
                          <div className="rounded-lg bg-muted p-2 text-center">Contact</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Behavior Metrics</h3>
                  <div className="space-y-4">
                    {[
                      { metric: "Avg. Time on Site", value: "4m 12s" },
                      { metric: "Pages per Visit", value: "3.5" },
                      { metric: "Bounce Rate", value: "42%" },
                      { metric: "Return Visitors", value: "35%" },
                      { metric: "New Visitors", value: "65%" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                        <span className="font-medium">{item.metric}</span>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Performance</CardTitle>
              <CardDescription>Sales and revenue by product.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b p-4 text-sm font-medium">
                  <div>Product</div>
                  <div>Sales</div>
                  <div>Revenue</div>
                  <div>Conversion Rate</div>
                  <div>Trend</div>
                </div>
                {[
                  {
                    product: "Handcrafted Necklace",
                    sales: 120,
                    revenue: "$2,400",
                    conversionRate: "4.2%",
                    trend: "+12%",
                  },
                  {
                    product: "Sustainable Earrings",
                    sales: 98,
                    revenue: "$1,960",
                    conversionRate: "3.8%",
                    trend: "+8%",
                  },
                  {
                    product: "Eco-friendly Bracelet",
                    sales: 86,
                    revenue: "$1,720",
                    conversionRate: "3.5%",
                    trend: "+15%",
                  },
                  { product: "Artisan Ring", sales: 72, revenue: "$1,440", conversionRate: "3.2%", trend: "+5%" },
                  {
                    product: "Recycled Metal Pendant",
                    sales: 65,
                    revenue: "$1,300",
                    conversionRate: "3.0%",
                    trend: "+10%",
                  },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-5 border-b p-4 text-sm">
                    <div>{item.product}</div>
                    <div>{item.sales}</div>
                    <div>{item.revenue}</div>
                    <div>{item.conversionRate}</div>
                    <div className="text-green-500">{item.trend}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Product Categories</CardTitle>
                <CardDescription>Performance by product category.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Necklaces", value: 35 },
                          { name: "Earrings", value: 25 },
                          { name: "Bracelets", value: 20 },
                          { name: "Rings", value: 15 },
                          { name: "Other", value: 5 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {trafficSourcesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inventory Status</CardTitle>
                <CardDescription>Current inventory levels.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { product: "Handcrafted Necklace", stock: 45, status: "In Stock" },
                    { product: "Sustainable Earrings", stock: 32, status: "In Stock" },
                    { product: "Eco-friendly Bracelet", stock: 18, status: "Low Stock" },
                    { product: "Artisan Ring", stock: 24, status: "In Stock" },
                    { product: "Recycled Metal Pendant", stock: 8, status: "Low Stock" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                      <div>
                        <div className="font-medium">{item.product}</div>
                        <div className="text-xs text-muted-foreground">{item.stock} units</div>
                      </div>
                      <div
                        className={`rounded-full px-2 py-1 text-xs ${
                          item.status === "In Stock" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


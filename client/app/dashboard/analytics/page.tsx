import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Track your website performance and customer engagement.</p>
      </div>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+21% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,678</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42%</div>
                <p className="text-xs text-muted-foreground">-3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2m 45s</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Traffic Overview</CardTitle>
                <CardDescription>Website traffic over the last 30 days.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <LineChart className="h-60 w-60 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors are coming from.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <PieChart className="h-60 w-60 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Popular Pages</CardTitle>
              <CardDescription>Your most visited pages.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-3 border-b p-4 text-sm font-medium">
                  <div>Page</div>
                  <div>Views</div>
                  <div>Avg. Time on Page</div>
                </div>
                {[
                  { page: "Home", views: 456, time: "1m 23s" },
                  { page: "Products", views: 345, time: "2m 10s" },
                  { page: "About", views: 234, time: "1m 45s" },
                  { page: "Contact", views: 123, time: "0m 55s" },
                  { page: "Blog", views: 98, time: "3m 12s" },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-3 border-b p-4 text-sm">
                    <div>{item.page}</div>
                    <div>{item.views}</div>
                    <div>{item.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="traffic" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Details</CardTitle>
              <CardDescription>Detailed analysis of your website traffic.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <BarChart className="h-80 w-80 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sales" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Analytics</CardTitle>
              <CardDescription>Track your e-commerce performance.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <LineChart className="h-80 w-80 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="audience" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
              <CardDescription>Understand who your visitors are.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <PieChart className="h-80 w-80 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


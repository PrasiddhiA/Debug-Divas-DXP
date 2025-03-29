import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Download, ShoppingBag, Package, Truck, CheckCircle } from "lucide-react"

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <p className="text-muted-foreground">Manage and track your customer orders.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">5 new today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Shipped</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
            <p className="text-xs text-muted-foreground">3 delivered today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search orders..." className="w-full pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Manage your recent customer orders.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b p-4 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Total</div>
                  <div className="text-right">Actions</div>
                </div>
                {[
                  {
                    id: "#1001",
                    customer: "Sarah Johnson",
                    date: "Mar 25, 2023",
                    status: "Completed",
                    total: "$129.99",
                  },
                  { id: "#1002", customer: "Michael Brown", date: "Mar 24, 2023", status: "Shipped", total: "$89.95" },
                  {
                    id: "#1003",
                    customer: "Emily Davis",
                    date: "Mar 23, 2023",
                    status: "Processing",
                    total: "$199.99",
                  },
                  {
                    id: "#1004",
                    customer: "David Miller",
                    date: "Mar 22, 2023",
                    status: "Processing",
                    total: "$59.95",
                  },
                  {
                    id: "#1005",
                    customer: "Jessica Wilson",
                    date: "Mar 21, 2023",
                    status: "Completed",
                    total: "$149.99",
                  },
                  {
                    id: "#1006",
                    customer: "Robert Taylor",
                    date: "Mar 20, 2023",
                    status: "Cancelled",
                    total: "$79.95",
                  },
                  {
                    id: "#1007",
                    customer: "Amanda Clark",
                    date: "Mar 19, 2023",
                    status: "Completed",
                    total: "$109.99",
                  },
                  { id: "#1008", customer: "Thomas Moore", date: "Mar 18, 2023", status: "Shipped", total: "$69.95" },
                ].map((order, i) => (
                  <div key={i} className="grid grid-cols-6 border-b p-4 text-sm">
                    <div>{order.id}</div>
                    <div>{order.customer}</div>
                    <div>{order.date}</div>
                    <div>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Processing"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "Shipped"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div>{order.total}</div>
                    <div className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Processing Orders</CardTitle>
              <CardDescription>Orders that are currently being processed.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b p-4 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Total</div>
                  <div className="text-right">Actions</div>
                </div>
                {[
                  {
                    id: "#1003",
                    customer: "Emily Davis",
                    date: "Mar 23, 2023",
                    status: "Processing",
                    total: "$199.99",
                  },
                  {
                    id: "#1004",
                    customer: "David Miller",
                    date: "Mar 22, 2023",
                    status: "Processing",
                    total: "$59.95",
                  },
                ].map((order, i) => (
                  <div key={i} className="grid grid-cols-6 border-b p-4 text-sm">
                    <div>{order.id}</div>
                    <div>{order.customer}</div>
                    <div>{order.date}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {order.status}
                      </span>
                    </div>
                    <div>{order.total}</div>
                    <div className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipped" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipped Orders</CardTitle>
              <CardDescription>Orders that have been shipped to customers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b p-4 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Total</div>
                  <div className="text-right">Actions</div>
                </div>
                {[
                  { id: "#1002", customer: "Michael Brown", date: "Mar 24, 2023", status: "Shipped", total: "$89.95" },
                  { id: "#1008", customer: "Thomas Moore", date: "Mar 18, 2023", status: "Shipped", total: "$69.95" },
                ].map((order, i) => (
                  <div key={i} className="grid grid-cols-6 border-b p-4 text-sm">
                    <div>{order.id}</div>
                    <div>{order.customer}</div>
                    <div>{order.date}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                        {order.status}
                      </span>
                    </div>
                    <div>{order.total}</div>
                    <div className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Completed Orders</CardTitle>
              <CardDescription>Orders that have been delivered to customers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b p-4 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Total</div>
                  <div className="text-right">Actions</div>
                </div>
                {[
                  {
                    id: "#1001",
                    customer: "Sarah Johnson",
                    date: "Mar 25, 2023",
                    status: "Completed",
                    total: "$129.99",
                  },
                  {
                    id: "#1005",
                    customer: "Jessica Wilson",
                    date: "Mar 21, 2023",
                    status: "Completed",
                    total: "$149.99",
                  },
                  {
                    id: "#1007",
                    customer: "Amanda Clark",
                    date: "Mar 19, 2023",
                    status: "Completed",
                    total: "$109.99",
                  },
                ].map((order, i) => (
                  <div key={i} className="grid grid-cols-6 border-b p-4 text-sm">
                    <div>{order.id}</div>
                    <div>{order.customer}</div>
                    <div>{order.date}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        {order.status}
                      </span>
                    </div>
                    <div>{order.total}</div>
                    <div className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cancelled" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Cancelled Orders</CardTitle>
              <CardDescription>Orders that have been cancelled.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b p-4 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Total</div>
                  <div className="text-right">Actions</div>
                </div>
                {[
                  {
                    id: "#1006",
                    customer: "Robert Taylor",
                    date: "Mar 20, 2023",
                    status: "Cancelled",
                    total: "$79.95",
                  },
                ].map((order, i) => (
                  <div key={i} className="grid grid-cols-6 border-b p-4 text-sm">
                    <div>{order.id}</div>
                    <div>{order.customer}</div>
                    <div>{order.date}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                        {order.status}
                      </span>
                    </div>
                    <div>{order.total}</div>
                    <div className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


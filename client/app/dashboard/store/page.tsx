import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Edit, Plus, ShoppingBag, ShoppingCart, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StorePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">E-commerce</h1>
        <p className="text-muted-foreground">Manage your online store and products.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Shipments</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">-2 from last month</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="products">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="mt-6">
          <div className="flex justify-end mb-4">
            <Link href="/dashboard/store/products/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Product ${i}`}
                    alt={`Product ${i}`}
                    width={300}
                    height={200}
                    className="aspect-video w-full rounded-t-lg object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-medium">Product {i}</h3>
                    <p className="text-sm text-muted-foreground">$99.99</p>
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                        In Stock
                      </div>
                      <div className="ml-4">10 available</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/dashboard/store/products/new">
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                  <Button size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/dashboard/store/products">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="orders" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Manage your recent customer orders.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b p-4 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Total</div>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid grid-cols-5 border-b p-4 text-sm">
                    <div>#{1000 + i}</div>
                    <div>Customer {i}</div>
                    <div>Mar {i + 10}, 2023</div>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </div>
                    <div>${(99.99 * i).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/dashboard/store/orders">
                <Button variant="outline">View All Orders</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="customers" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Customers</CardTitle>
              <CardDescription>View and manage your customer information.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 border-b p-4 text-sm font-medium">
                  <div>Name</div>
                  <div>Email</div>
                  <div>Orders</div>
                  <div>Total Spent</div>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid grid-cols-4 border-b p-4 text-sm">
                    <div>Customer {i}</div>
                    <div>customer{i}@example.com</div>
                    <div>{i + 1}</div>
                    <div>${(99.99 * (i + 1)).toFixed(2)}</div>
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


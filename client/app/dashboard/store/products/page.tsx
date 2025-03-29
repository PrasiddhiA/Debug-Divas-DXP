import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Edit, Plus, Search, Package, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <p className="text-muted-foreground">Manage your store products and inventory.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="w-full pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
        <Link href="/dashboard/store/products/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
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
                    <h3 className="font-medium">Handcrafted Product {i}</h3>
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
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="mt-6">
          <div className="rounded-lg border p-8 text-center">
            <Package className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">No active products</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              You don't have any active products yet. Add a product to get started.
            </p>
            <Link href="/dashboard/store/products/new" className="mt-4 inline-block">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="draft" className="mt-6">
          <div className="rounded-lg border p-8 text-center">
            <Package className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">No draft products</h3>
            <p className="mt-2 text-sm text-muted-foreground">You don't have any draft products yet.</p>
          </div>
        </TabsContent>

        <TabsContent value="archived" className="mt-6">
          <div className="rounded-lg border p-8 text-center">
            <Package className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">No archived products</h3>
            <p className="mt-2 text-sm text-muted-foreground">You don't have any archived products yet.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


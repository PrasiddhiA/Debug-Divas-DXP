"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Edit, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the product data using the ID
  const productId = params.id

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/store/products">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Product Details</h1>
          <p className="text-muted-foreground">View and manage product information.</p>
        </div>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
              <CardDescription>Basic information about your product.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product-name">Product Name</Label>
                <Input
                  id="product-name"
                  placeholder="Enter product name"
                  defaultValue="Handcrafted Product"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="product-description">Description</Label>
                <Textarea
                  id="product-description"
                  placeholder="Describe your product..."
                  rows={5}
                  defaultValue="This is a beautiful handcrafted product made with care and attention to detail."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="product-category">Category</Label>
                <Select defaultValue="jewelry">
                  <SelectTrigger id="product-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jewelry">Jewelry</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="home-decor">Home Decor</SelectItem>
                    <SelectItem value="art">Art</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product-tags">Tags</Label>
                <Input id="product-tags" defaultValue="handmade, sustainable, eco-friendly" />
                <p className="text-xs text-muted-foreground">Separate tags with commas</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
              <CardDescription>Manage your product images.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative rounded-lg border overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Product ${productId}`}
                    alt="Product image"
                    width={200}
                    height={200}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Information</CardTitle>
              <CardDescription>Manage your product pricing.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product-price">Price</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border rounded-l-md bg-muted">$</div>
                  <Input
                    id="product-price"
                    type="number"
                    placeholder="0.00"
                    className="rounded-l-none"
                    defaultValue="99.99"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="compare-at-price">Compare-at Price</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border rounded-l-md bg-muted">$</div>
                  <Input id="compare-at-price" type="number" placeholder="0.00" className="rounded-l-none" />
                </div>
                <p className="text-xs text-muted-foreground">
                  To show a reduced price, set this higher than the actual price
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cost-per-item">Cost per Item</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border rounded-l-md bg-muted">$</div>
                  <Input id="cost-per-item" type="number" placeholder="0.00" className="rounded-l-none" />
                </div>
                <p className="text-xs text-muted-foreground">Customers won't see this</p>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="tax" />
                <Label htmlFor="tax">Charge tax on this product</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Inventory</CardTitle>
              <CardDescription>Manage your product inventory.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                <Input id="sku" defaultValue="SKU-123" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="barcode">Barcode (ISBN, UPC, GTIN, etc.)</Label>
                <Input id="barcode" defaultValue="123456789" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" defaultValue="10" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="track-quantity" defaultChecked />
                <Label htmlFor="track-quantity">Track quantity</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="continue-selling" />
                <Label htmlFor="continue-selling">Continue selling when out of stock</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipping</CardTitle>
              <CardDescription>Configure shipping options for your product.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="physical-product" defaultChecked />
                <Label htmlFor="physical-product">This is a physical product</Label>
              </div>

              <div className="space-y-2">
                <Label>Weight</Label>
                <div className="flex gap-2">
                  <Input type="number" placeholder="0.0" />
                  <Select defaultValue="kg">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="lb">lb</SelectItem>
                      <SelectItem value="oz">oz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Dimensions</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Input type="number" placeholder="Length" />
                  </div>
                  <div>
                    <Input type="number" placeholder="Width" />
                  </div>
                  <div>
                    <Input type="number" placeholder="Height" />
                  </div>
                </div>
                <div className="mt-2">
                  <Select defaultValue="cm">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cm">cm</SelectItem>
                      <SelectItem value="in">in</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Save Changes</Button>
        <Button>Update Product</Button>
      </div>
    </div>
  )
} 
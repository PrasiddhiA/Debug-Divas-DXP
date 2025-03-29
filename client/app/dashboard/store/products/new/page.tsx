"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Upload, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewProductPage() {
  const [images, setImages] = useState<string[]>([])
  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const handleImageUpload = () => {
    // In a real app, this would handle file uploads
    // For now, we'll just add a placeholder image
    setImages([...images, `/placeholder.svg?height=200&width=200&text=Image ${images.length + 1}`])
  }

  const handleRemoveImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/store/products">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
          <p className="text-muted-foreground">Create a new product for your store.</p>
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
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="product-description">Description</Label>
                <Textarea
                  id="product-description"
                  placeholder="Describe your product..."
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="product-category">Category</Label>
                <Select>
                  <SelectTrigger id="product-category">
                    <SelectValue placeholder="Select category" />
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
                <Input id="product-tags" placeholder="handmade, sustainable, eco-friendly" />
                <p className="text-xs text-muted-foreground">Separate tags with commas</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
              <CardDescription>Upload images of your product.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {images.map((image, index) => (
                  <div key={index} className="relative rounded-lg border overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Product image ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full aspect-square object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6 rounded-full"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                <div
                  className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 cursor-pointer hover:bg-muted/50"
                  onClick={handleImageUpload}
                >
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">Upload Image</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Information</CardTitle>
              <CardDescription>Set the price for your product.</CardDescription>
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
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
                <Input id="sku" placeholder="SKU-123" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="barcode">Barcode (ISBN, UPC, GTIN, etc.)</Label>
                <Input id="barcode" placeholder="123456789" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" placeholder="0" />
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
                  <Select defaultValue="lb">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lb">lb</SelectItem>
                      <SelectItem value="oz">oz</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="g">g</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Dimensions</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-1">
                    <Label className="text-xs">Length</Label>
                    <Input type="number" placeholder="0.0" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Width</Label>
                    <Input type="number" placeholder="0.0" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Height</Label>
                    <Input type="number" placeholder="0.0" />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="free-shipping" />
                <Label htmlFor="free-shipping">Free shipping</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Save as Draft</Button>
        <Button>Publish Product</Button>
      </div>
    </div>
  )
}


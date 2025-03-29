"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Instagram, Linkedin, Twitter, Upload, Plus } from "lucide-react"
import Image from "next/image"

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [coverImage, setCoverImage] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Business Profile</h1>
        <p className="text-muted-foreground">Manage your business profile and online presence.</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="team">Team Members</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Update your business details and contact information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input id="business-name" defaultValue="Bloom Boutique" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="business-email">Email Address</Label>
                    <Input id="business-email" type="email" defaultValue="contact@bloomboutique.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-phone">Phone Number</Label>
                    <Input id="business-phone" type="tel" defaultValue="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business-description">Business Description</Label>
                  <Textarea
                    id="business-description"
                    rows={4}
                    defaultValue="Bloom Boutique offers handcrafted, sustainable fashion accessories for the modern woman. Our products are ethically sourced and made with eco-friendly materials."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business-address">Business Address</Label>
                  <Input id="business-address" defaultValue="123 Main Street" />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="business-city">City</Label>
                    <Input id="business-city" defaultValue="San Francisco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-state">State</Label>
                    <Input id="business-state" defaultValue="CA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-zip">ZIP Code</Label>
                    <Input id="business-zip" defaultValue="94105" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business-website">Website URL</Label>
                  <Input id="business-website" type="url" defaultValue="https://www.bloomboutique.com" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Categories</CardTitle>
              <CardDescription>Select the categories that best describe your business.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {[
                  "Fashion & Accessories",
                  "Handmade Crafts",
                  "Sustainable Products",
                  "Women's Clothing",
                  "Jewelry",
                  "Home Decor",
                  "Beauty & Wellness",
                  "Art & Design",
                  "Food & Beverage",
                ].map((category, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`category-${i}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      defaultChecked={i < 3}
                    />
                    <Label htmlFor={`category-${i}`}>{category}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Categories</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Profile Image</CardTitle>
                <CardDescription>Upload your business logo or profile image.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-muted bg-muted">
                    {profileImage ? (
                      <Image src={profileImage || "/placeholder.svg"} alt="Profile" fill className="object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Input
                    type="file"
                    className="w-auto"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        const reader = new FileReader()
                        reader.onload = (e) => {
                          setProfileImage(e.target?.result as string)
                        }
                        reader.readAsDataURL(file)
                      }
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cover Image</CardTitle>
                <CardDescription>Upload a cover image for your business profile.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="relative h-40 w-full overflow-hidden rounded-lg border-2 border-muted bg-muted">
                    {coverImage ? (
                      <Image src={coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Input
                    type="file"
                    className="w-auto"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        const reader = new FileReader()
                        reader.onload = (e) => {
                          setCoverImage(e.target?.result as string)
                        }
                        reader.readAsDataURL(file)
                      }
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>Choose your brand colors for a consistent look.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      id="primary-color"
                      defaultValue="#4f46e5"
                      className="h-10 w-10 rounded border-0 p-0"
                    />
                    <Input defaultValue="#4f46e5" className="flex-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      id="secondary-color"
                      defaultValue="#10b981"
                      className="h-10 w-10 rounded border-0 p-0"
                    />
                    <Input defaultValue="#10b981" className="flex-1" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Preview</Label>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex h-20 items-center justify-center rounded-lg bg-[#4f46e5] text-white">
                    Primary Color
                  </div>
                  <div className="flex h-20 items-center justify-center rounded-lg bg-[#10b981] text-white">
                    Secondary Color
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Brand Colors</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Profiles</CardTitle>
              <CardDescription>Connect your social media accounts to your business profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <Facebook className="h-6 w-6 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">Facebook</h3>
                    <p className="text-xs text-muted-foreground">Connect your Facebook page</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>

                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <Instagram className="h-6 w-6 text-pink-600" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">Instagram</h3>
                    <p className="text-xs text-muted-foreground">Connect your Instagram account</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>

                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <Twitter className="h-6 w-6 text-blue-400" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">Twitter</h3>
                    <p className="text-xs text-muted-foreground">Connect your Twitter account</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>

                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <Linkedin className="h-6 w-6 text-blue-700" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">LinkedIn</h3>
                    <p className="text-xs text-muted-foreground">Connect your LinkedIn profile</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Add your social media profile links manually.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="facebook-url">Facebook URL</Label>
                  <Input id="facebook-url" placeholder="https://facebook.com/yourbusiness" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram-url">Instagram URL</Label>
                  <Input id="instagram-url" placeholder="https://instagram.com/yourbusiness" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter-url">Twitter URL</Label>
                  <Input id="twitter-url" placeholder="https://twitter.com/yourbusiness" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin-url">LinkedIn URL</Label>
                  <Input id="linkedin-url" placeholder="https://linkedin.com/company/yourbusiness" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Links</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="mt-6 space-y-6">
          <div className="flex justify-end mb-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Team Member
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", email: "sarah@bloomboutique.com" },
              { name: "Michael Chen", role: "Marketing Director", email: "michael@bloomboutique.com" },
              { name: "Jessica Williams", role: "Product Designer", email: "jessica@bloomboutique.com" },
              { name: "David Miller", role: "Operations Manager", email: "david@bloomboutique.com" },
            ].map((member, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{member.email}</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


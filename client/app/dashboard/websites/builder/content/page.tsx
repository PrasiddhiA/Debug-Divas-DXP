"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Wand2, Save } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type GeneratedContent = {
  heading1?: string
  heading2?: string
  text?: string
  button?: string
  quote?: string
  list?: string
  profile?: {
    name: string
    title: string
    bio: string
  }
}

export default function ContentGenerationPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent>({})

  const handleGenerateContent = async (elementType: keyof GeneratedContent) => {
    // In a real app, this would call an AI service
    // For now, we'll just use placeholder content
    const content: GeneratedContent = {
      heading1: "Welcome to Our Creative Space",
      heading2: "Discover Our Unique Offerings",
      text: "We are passionate about creating exceptional experiences for our customers. Our team of experts works tirelessly to deliver the best solutions tailored to your needs.",
      button: "Get Started Today",
      quote: "The best way to predict the future is to create it.",
      list: "• Innovative Solutions\n• Expert Team\n• Quality Service\n• Customer Focus",
      profile: {
        name: "Sarah Johnson",
        title: "Creative Director",
        bio: "With over 10 years of experience in creative direction, Sarah leads our team in delivering exceptional design solutions that make a lasting impact."
      }
    }

    setGeneratedContent(prev => ({
      ...prev,
      [elementType]: content[elementType]
    }))
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/websites/builder">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Content Generation</h1>
          <p className="text-muted-foreground">Generate engaging content for your website elements.</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="service">Service</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Generation</CardTitle>
              <CardDescription>Generate content for your website elements using AI.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Main Heading</Label>
                  <div className="flex gap-2">
                    <Input value={generatedContent.heading1 || ""} readOnly />
                    <Button onClick={() => handleGenerateContent("heading1")}>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Subheading</Label>
                  <div className="flex gap-2">
                    <Input value={generatedContent.heading2 || ""} readOnly />
                    <Button onClick={() => handleGenerateContent("heading2")}>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Main Text</Label>
                  <div className="flex gap-2">
                    <Textarea value={generatedContent.text || ""} readOnly rows={4} />
                    <Button onClick={() => handleGenerateContent("text")}>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Call to Action</Label>
                  <div className="flex gap-2">
                    <Input value={generatedContent.button || ""} readOnly />
                    <Button onClick={() => handleGenerateContent("button")}>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="product" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Content</CardTitle>
              <CardDescription>Generate product descriptions and details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Product Name</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter product name" />
                    <Button>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Product Description</Label>
                  <div className="flex gap-2">
                    <Textarea placeholder="Enter product description" rows={4} />
                    <Button>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Features</Label>
                  <div className="flex gap-2">
                    <Textarea placeholder="Enter product features" rows={4} />
                    <Button>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="service" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Service Content</CardTitle>
              <CardDescription>Generate service descriptions and details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Service Name</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter service name" />
                    <Button>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Service Description</Label>
                  <div className="flex gap-2">
                    <Textarea placeholder="Enter service description" rows={4} />
                    <Button>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Benefits</Label>
                  <div className="flex gap-2">
                    <Textarea placeholder="Enter service benefits" rows={4} />
                    <Button>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Content</CardTitle>
              <CardDescription>Generate business introductions and information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Business Name</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter business name" />
                    <Button>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Business Description</Label>
                  <div className="flex gap-2">
                    <Textarea placeholder="Enter business description" rows={4} />
                    <Button>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Mission Statement</Label>
                  <div className="flex gap-2">
                    <Textarea placeholder="Enter mission statement" rows={4} />
                    <Button>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button variant="outline">
          <Save className="mr-2 h-4 w-4" />
          Save Content
        </Button>
        <Button>Apply to Website</Button>
      </div>
    </div>
  )
} 
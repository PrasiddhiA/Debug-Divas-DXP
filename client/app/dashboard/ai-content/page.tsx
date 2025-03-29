"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  ImageIcon,
  FileText,
  MessageSquare,
  Wand2,
  Palette,
  Lightbulb,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function AIContentPage() {
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [contentInput, setContentInput] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")
  const [generatedImages, setGeneratedImages] = useState<string[]>([])
  const [imagePrompt, setImagePrompt] = useState("")
  const [imageStyle, setImageStyle] = useState("photorealistic")
  const [imageSize, setImageSize] = useState("square")
  const [creativityLevel, setCreativityLevel] = useState(50)

  const handleGenerateContent = () => {
    setLoading(true)
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(
        "Our handcrafted jewelry collection features unique pieces designed with sustainable materials and ethical practices. Each item tells a story of craftsmanship and creativity, perfect for those who appreciate artisanal quality and distinctive style. Browse our selection of necklaces, earrings, and bracelets to find the perfect accent for any outfit or occasion.\n\nWe source our materials from eco-friendly suppliers and work with skilled artisans who are fairly compensated for their expertise. Our commitment to sustainability extends to our packaging, which is made from recycled materials and designed to minimize waste.\n\nWhether you're looking for a statement piece for a special event or an everyday accessory that reflects your values, our collection offers something for everyone. Join us in our mission to make fashion more sustainable and ethical, one beautiful piece at a time.",
      )
      setLoading(false)
    }, 2000)
  }

  const handleGenerateImages = () => {
    setLoading(true)
    // Simulate AI image generation
    setTimeout(() => {
      setGeneratedImages([
        "/placeholder.svg?height=300&width=300&text=Generated+Image+1",
        "/placeholder.svg?height=300&width=300&text=Generated+Image+2",
        "/placeholder.svg?height=300&width=300&text=Generated+Image+3",
        "/placeholder.svg?height=300&width=300&text=Generated+Image+4",
      ])
      setLoading(false)
    }, 3000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Content Creation</h1>
        <p className="text-muted-foreground">Generate professional content and images for your business with AI.</p>
      </div>

      <Tabs defaultValue="text">
        <TabsList>
          <TabsTrigger value="text">Text Generation</TabsTrigger>
          <TabsTrigger value="images">Image Generation</TabsTrigger>
          <TabsTrigger value="ideas">Content Ideas</TabsTrigger>
          <TabsTrigger value="history">Generation History</TabsTrigger>
        </TabsList>

        <TabsContent value="text" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Text Generator</CardTitle>
              <CardDescription>
                Create professional content for your website, products, and marketing materials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="content-type">What would you like to generate?</Label>
                  <Select defaultValue="product">
                    <SelectTrigger id="content-type">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Product Description</SelectItem>
                      <SelectItem value="about">About Us Page</SelectItem>
                      <SelectItem value="blog">Blog Post</SelectItem>
                      <SelectItem value="service">Service Description</SelectItem>
                      <SelectItem value="faq">FAQ Section</SelectItem>
                      <SelectItem value="social">Social Media Post</SelectItem>
                      <SelectItem value="email">Email Newsletter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Tone of Voice</Label>
                  <Select defaultValue="professional">
                    <SelectTrigger id="tone">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly & Casual</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="authoritative">Authoritative</SelectItem>
                      <SelectItem value="empathetic">Empathetic</SelectItem>
                      <SelectItem value="humorous">Humorous</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="creativity">Creativity Level</Label>
                    <span className="text-sm text-muted-foreground">{creativityLevel}%</span>
                  </div>
                  <Slider
                    id="creativity"
                    min={0}
                    max={100}
                    step={1}
                    value={[creativityLevel]}
                    onValueChange={(value) => setCreativityLevel(value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Conservative</span>
                    <span>Balanced</span>
                    <span>Creative</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content-input">Tell us about your business or product</Label>
                  <Textarea
                    id="content-input"
                    placeholder="E.g., I sell handcrafted jewelry made from sustainable materials..."
                    className="min-h-[150px]"
                    value={contentInput}
                    onChange={(e) => setContentInput(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Important Keywords (optional)</Label>
                  <Input id="keywords" placeholder="E.g., sustainable, handcrafted, ethical, unique" />
                </div>

                <Button onClick={handleGenerateContent} disabled={loading || !contentInput.trim()} className="w-full">
                  {loading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Content
                    </>
                  )}
                </Button>
              </div>

              {generatedContent && (
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Generated Content</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => setGeneratedContent("")} className="h-8 gap-1">
                        <RefreshCw className="h-4 w-4" />
                        Regenerate
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleCopy} className="h-8 gap-1">
                        {copied ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border bg-muted/50 p-4 text-sm whitespace-pre-line">
                    {generatedContent}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Content Enhancement</CardTitle>
                <CardDescription>Improve your existing content.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Enhancement Options</Label>
                  <div className="grid gap-2">
                    <Button variant="outline" className="justify-start">
                      <Wand2 className="mr-2 h-4 w-4" />
                      Improve Writing Style
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Zap className="mr-2 h-4 w-4" />
                      Make More Engaging
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Lightbulb className="mr-2 h-4 w-4" />
                      Add Creative Ideas
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Simplify Language
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Tips</CardTitle>
                <CardDescription>Get the most out of the AI content generator.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="font-medium">Be Specific</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The more details you provide, the better the results will be.
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="font-medium">Review & Edit</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Always review and personalize the generated content.
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="font-medium">Try Different Approaches</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      If you're not satisfied, try adjusting the creativity level or tone.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="images" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Image Generator</CardTitle>
              <CardDescription>
                Create custom images for your website, products, and marketing materials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image-prompt">Describe the image you want to create</Label>
                  <Textarea
                    id="image-prompt"
                    placeholder="E.g., A professional photo of handcrafted jewelry on a wooden table with natural lighting..."
                    className="min-h-[100px]"
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="image-style">Style</Label>
                    <Select value={imageStyle} onValueChange={setImageStyle}>
                      <SelectTrigger id="image-style">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="photorealistic">Photorealistic</SelectItem>
                        <SelectItem value="artistic">Artistic</SelectItem>
                        <SelectItem value="minimalist">Minimalist</SelectItem>
                        <SelectItem value="vintage">Vintage</SelectItem>
                        <SelectItem value="abstract">Abstract</SelectItem>
                        <SelectItem value="cartoon">Cartoon</SelectItem>
                        <SelectItem value="watercolor">Watercolor</SelectItem>
                        <SelectItem value="3d">3D Render</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image-size">Size</Label>
                    <Select value={imageSize} onValueChange={setImageSize}>
                      <SelectTrigger id="image-size">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="square">Square (1:1)</SelectItem>
                        <SelectItem value="landscape">Landscape (16:9)</SelectItem>
                        <SelectItem value="portrait">Portrait (9:16)</SelectItem>
                        <SelectItem value="wide">Wide (2:1)</SelectItem>
                        <SelectItem value="social">Social Media (4:5)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Number of Images</Label>
                    <Select defaultValue="4">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="remove-background" />
                  <Label htmlFor="remove-background">Remove background</Label>
                </div>

                <Button onClick={handleGenerateImages} disabled={loading || !imagePrompt.trim()} className="w-full">
                  {loading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating Images...
                    </>
                  ) : (
                    <>
                      <Palette className="mr-2 h-4 w-4" />
                      Generate Images
                    </>
                  )}
                </Button>
              </div>

              {generatedImages.length > 0 && (
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Generated Images</Label>
                    <Button variant="outline" size="sm" onClick={() => setGeneratedImages([])} className="h-8 gap-1">
                      <RefreshCw className="h-4 w-4" />
                      Regenerate
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {generatedImages.map((image, index) => (
                      <div key={index} className="relative group overflow-hidden rounded-lg border">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Generated image ${index + 1}`}
                          width={300}
                          height={300}
                          className="w-full object-cover aspect-square"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <Button size="sm" variant="secondary">
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                          <Button size="sm" variant="secondary">
                            <ImageIcon className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Image Style Gallery</CardTitle>
              <CardDescription>Browse different styles to inspire your image generation.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Photorealistic", image: "/placeholder.svg?height=150&width=150&text=Photorealistic" },
                  { name: "Artistic", image: "/placeholder.svg?height=150&width=150&text=Artistic" },
                  { name: "Minimalist", image: "/placeholder.svg?height=150&width=150&text=Minimalist" },
                  { name: "Vintage", image: "/placeholder.svg?height=150&width=150&text=Vintage" },
                  { name: "Abstract", image: "/placeholder.svg?height=150&width=150&text=Abstract" },
                  { name: "Cartoon", image: "/placeholder.svg?height=150&width=150&text=Cartoon" },
                  { name: "Watercolor", image: "/placeholder.svg?height=150&width=150&text=Watercolor" },
                  { name: "3D Render", image: "/placeholder.svg?height=150&width=150&text=3D+Render" },
                ].map((style, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={style.image || "/placeholder.svg"}
                      alt={style.name}
                      width={150}
                      height={150}
                      className="rounded-lg mb-2 object-cover aspect-square"
                    />
                    <p className="text-sm font-medium">{style.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ideas" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Idea Generator</CardTitle>
              <CardDescription>Get inspiration for your content creation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="idea-type">What type of content ideas do you need?</Label>
                <Select defaultValue="blog">
                  <SelectTrigger id="idea-type">
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog">Blog Post Ideas</SelectItem>
                    <SelectItem value="social">Social Media Post Ideas</SelectItem>
                    <SelectItem value="email">Email Newsletter Ideas</SelectItem>
                    <SelectItem value="product">Product Description Ideas</SelectItem>
                    <SelectItem value="video">Video Content Ideas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business-type">Your Business Type</Label>
                <Input id="business-type" placeholder="E.g., Handcrafted jewelry, Sustainable fashion, etc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-audience">Target Audience</Label>
                <Input id="target-audience" placeholder="E.g., Women 25-45, eco-conscious consumers, etc." />
              </div>

              <Button className="w-full">
                <Lightbulb className="mr-2 h-4 w-4" />
                Generate Ideas
              </Button>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Blog Post Ideas for Sustainable Jewelry</h3>
                <ol className="space-y-2 pl-5 list-decimal">
                  <li className="text-sm">"10 Reasons to Choose Sustainable Jewelry for Your Collection"</li>
                  <li className="text-sm">"The Story Behind Our Materials: How We Source Ethically"</li>
                  <li className="text-sm">"Styling Guide: How to Pair Handcrafted Jewelry with Everyday Outfits"</li>
                  <li className="text-sm">"Meet the Artisans: The Skilled Hands Behind Our Jewelry"</li>
                  <li className="text-sm">"Sustainable Fashion: Building a Conscious Wardrobe from Accessories Up"</li>
                  <li className="text-sm">"Care Guide: How to Maintain Your Handcrafted Jewelry for Years to Come"</li>
                  <li className="text-sm">
                    "The Environmental Impact of Traditional Jewelry (And How We're Different)"
                  </li>
                  <li className="text-sm">
                    "Seasonal Trends: Incorporating Sustainable Jewelry into Your Summer Look"
                  </li>
                </ol>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Save Ideas to Library
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Content Calendar Suggestions</CardTitle>
                <CardDescription>Plan your content strategy with AI-generated suggestions.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Weekly Content Plan</h3>
                    <ul className="space-y-2">
                      <li className="text-sm">
                        <span className="font-medium">Monday:</span> Share a behind-the-scenes look at your workshop
                      </li>
                      <li className="text-sm">
                        <span className="font-medium">Tuesday:</span> Post a customer testimonial or review
                      </li>
                      <li className="text-sm">
                        <span className="font-medium">Wednesday:</span> Publish a blog post about sustainable practices
                      </li>
                      <li className="text-sm">
                        <span className="font-medium">Thursday:</span> Feature a product with styling tips
                      </li>
                      <li className="text-sm">
                        <span className="font-medium">Friday:</span> Share an inspirational quote related to
                        sustainability
                      </li>
                      <li className="text-sm">
                        <span className="font-medium">Weekend:</span> Engage with followers through a poll or question
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full">Generate Monthly Calendar</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
                <CardDescription>Stay relevant with current trends in your industry.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Trending in Sustainable Fashion</h3>
                    <ul className="space-y-2">
                      <li className="text-sm flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Upcycled materials in jewelry design
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Transparent supply chains and ethical sourcing
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Minimalist designs with sustainable materials
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Carbon-neutral shipping options
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Biodegradable packaging solutions
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full">Refresh Trends</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Generation History</CardTitle>
              <CardDescription>Access your previously generated content and images.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="text-history">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="text-history">Text Content</TabsTrigger>
                  <TabsTrigger value="image-history">Images</TabsTrigger>
                </TabsList>

                <TabsContent value="text-history" className="mt-4 space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border p-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          {i === 1
                            ? "Product Description"
                            : i === 2
                              ? "About Us Page"
                              : i === 3
                                ? "Blog Post"
                                : i === 4
                                  ? "Service Description"
                                  : "Social Media Post"}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Generated{" "}
                          {i === 1
                            ? "2 hours ago"
                            : i === 2
                              ? "Yesterday"
                              : i === 3
                                ? "3 days ago"
                                : i === 4
                                  ? "1 week ago"
                                  : "2 weeks ago"}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="image-history" className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="relative group overflow-hidden rounded-lg border">
                        <Image
                          src={`/placeholder.svg?height=150&width=150&text=Image+${i}`}
                          alt={`Generated image ${i}`}
                          width={150}
                          height={150}
                          className="w-full object-cover aspect-square"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <Button size="sm" variant="secondary">
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Clear History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


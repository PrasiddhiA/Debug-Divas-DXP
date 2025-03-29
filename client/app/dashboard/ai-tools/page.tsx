"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Sparkles, Copy, Check, RefreshCw, FileText } from "lucide-react"

export default function AIToolsPage() {
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [contentInput, setContentInput] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")

  const handleGenerate = () => {
    setLoading(true)
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(
        "Our handcrafted jewelry collection features unique pieces designed with sustainable materials and ethical practices. Each item tells a story of craftsmanship and creativity, perfect for those who appreciate artisanal quality and distinctive style. Browse our selection of necklaces, earrings, and bracelets to find the perfect accent for any outfit or occasion.",
      )
      setLoading(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Tools</h1>
        <p className="text-muted-foreground">Use AI to generate content, images, and more for your business.</p>
      </div>
      <Tabs defaultValue="content">
        <TabsList>
          <TabsTrigger value="content">Content Generator</TabsTrigger>
          <TabsTrigger value="images">Image Generator</TabsTrigger>
          <TabsTrigger value="seo">SEO Assistant</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Content Generator</CardTitle>
              <CardDescription>
                Generate professional content for your website, product descriptions, and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">What would you like to generate?</label>
                  <select className="w-full rounded-md border px-3 py-2 text-sm">
                    <option>Product Description</option>
                    <option>About Us Page</option>
                    <option>Blog Post</option>
                    <option>Service Description</option>
                    <option>FAQ Section</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tell us about your business or product</label>
                  <Textarea
                    placeholder="E.g., I sell handcrafted jewelry made from sustainable materials..."
                    className="min-h-[100px]"
                    value={contentInput}
                    onChange={(e) => setContentInput(e.target.value)}
                  />
                </div>
                <Button onClick={handleGenerate} disabled={loading || !contentInput.trim()} className="w-full">
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
                    <label className="text-sm font-medium">Generated Content</label>
                    <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 gap-1">
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
                  <div className="rounded-md border bg-muted/50 p-4 text-sm">{generatedContent}</div>
                </div>
              )}
            </CardContent>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Generations</CardTitle>
                <CardDescription>Your recently generated content.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border p-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Product Description</div>
                        <div className="text-xs text-muted-foreground">Generated 2 days ago</div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
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
                      If you're not satisfied, try rephrasing your input.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="images" className="mt-6">
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
                  <label className="text-sm font-medium">Describe the image you want to create</label>
                  <Textarea
                    placeholder="E.g., A professional photo of handcrafted jewelry on a wooden table with natural lighting..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Style</label>
                    <select className="w-full rounded-md border px-3 py-2 text-sm">
                      <option>Photorealistic</option>
                      <option>Artistic</option>
                      <option>Minimalist</option>
                      <option>Vintage</option>
                      <option>Abstract</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Size</label>
                    <select className="w-full rounded-md border px-3 py-2 text-sm">
                      <option>Square (1:1)</option>
                      <option>Landscape (16:9)</option>
                      <option>Portrait (9:16)</option>
                      <option>Custom</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Image
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="seo" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>SEO Assistant</CardTitle>
              <CardDescription>Optimize your content for search engines.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Enter your target keywords</label>
                  <Input placeholder="E.g., handcrafted jewelry, sustainable accessories, artisan necklaces" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Paste your content to analyze</label>
                  <Textarea
                    placeholder="Paste your website content, product descriptions, or blog post here..."
                    className="min-h-[200px]"
                  />
                </div>
                <Button className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Analyze & Optimize
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="social" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Assistant</CardTitle>
              <CardDescription>Generate engaging social media posts for your business.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">What would you like to promote?</label>
                  <Input placeholder="E.g., New summer jewelry collection, Special discount, Upcoming workshop" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Platform</label>
                    <select className="w-full rounded-md border px-3 py-2 text-sm">
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>Twitter</option>
                      <option>LinkedIn</option>
                      <option>Pinterest</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tone</label>
                    <select className="w-full rounded-md border px-3 py-2 text-sm">
                      <option>Professional</option>
                      <option>Casual</option>
                      <option>Enthusiastic</option>
                      <option>Informative</option>
                      <option>Promotional</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Additional details</label>
                  <Textarea
                    placeholder="E.g., Include hashtags, mention specific features, include a call to action..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Social Media Posts
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


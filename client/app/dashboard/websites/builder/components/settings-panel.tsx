"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface SettingsPanelProps {
  selectedElement: {
    id: string
    type: string
    properties: Record<string, any>
  } | null
  onUpdateElement: (id: string, properties: Record<string, any>) => void
}

export function SettingsPanel({ selectedElement, onUpdateElement }: SettingsPanelProps) {
  const [activeTab, setActiveTab] = useState("content")

  if (!selectedElement) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center text-muted-foreground">
        <p>Select an element to edit its properties</p>
      </div>
    )
  }

  const handlePropertyChange = (property: string, value: any) => {
    onUpdateElement(selectedElement.id, {
      ...selectedElement.properties,
      [property]: value,
    })
  }

  const renderContentTab = () => {
    switch (selectedElement.type) {
      case "heading1":
      case "heading2":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="heading-text">Text</Label>
              <Input
                id="heading-text"
                value={selectedElement.properties.text || ""}
                onChange={(e) => handlePropertyChange("text", e.target.value)}
              />
            </div>
          </div>
        )

      case "text":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text-content">Text Content</Label>
              <Textarea
                id="text-content"
                rows={5}
                value={selectedElement.properties.text || ""}
                onChange={(e) => handlePropertyChange("text", e.target.value)}
              />
            </div>
          </div>
        )

      case "image":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image-src">Image URL</Label>
              <Input
                id="image-src"
                value={selectedElement.properties.src || ""}
                onChange={(e) => handlePropertyChange("src", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image-alt">Alt Text</Label>
              <Input
                id="image-alt"
                value={selectedElement.properties.alt || ""}
                onChange={(e) => handlePropertyChange("alt", e.target.value)}
              />
            </div>
          </div>
        )

      case "button":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="button-text">Button Text</Label>
              <Input
                id="button-text"
                value={selectedElement.properties.text || ""}
                onChange={(e) => handlePropertyChange("text", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="button-url">URL</Label>
              <Input
                id="button-url"
                value={selectedElement.properties.url || ""}
                onChange={(e) => handlePropertyChange("url", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="button-variant">Variant</Label>
              <Select
                value={selectedElement.properties.variant || "default"}
                onValueChange={(value) => handlePropertyChange("variant", value)}
              >
                <SelectTrigger id="button-variant">
                  <SelectValue placeholder="Select variant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="destructive">Destructive</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                  <SelectItem value="ghost">Ghost</SelectItem>
                  <SelectItem value="link">Link</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="button-size">Size</Label>
              <Select
                value={selectedElement.properties.size || "default"}
                onValueChange={(value) => handlePropertyChange("size", value)}
              >
                <SelectTrigger id="button-size">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="sm">Small</SelectItem>
                  <SelectItem value="lg">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case "quote":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quote-text">Quote Text</Label>
              <Textarea
                id="quote-text"
                rows={4}
                value={selectedElement.properties.text || ""}
                onChange={(e) => handlePropertyChange("text", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-author">Author (Optional)</Label>
              <Input
                id="quote-author"
                value={selectedElement.properties.author || ""}
                onChange={(e) => handlePropertyChange("author", e.target.value)}
              />
            </div>
          </div>
        )

      case "code":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="code-content">Code</Label>
              <Textarea
                id="code-content"
                rows={8}
                value={selectedElement.properties.code || ""}
                onChange={(e) => handlePropertyChange("code", e.target.value)}
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="code-language">Language (Optional)</Label>
              <Input
                id="code-language"
                value={selectedElement.properties.language || ""}
                onChange={(e) => handlePropertyChange("language", e.target.value)}
              />
            </div>
          </div>
        )

      case "list":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>List Items</Label>
              <div className="space-y-2">
                {(selectedElement.properties.items || ["Item 1", "Item 2", "Item 3"]).map(
                  (item: string, index: number) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={item}
                        onChange={(e) => {
                          const newItems = [...(selectedElement.properties.items || ["Item 1", "Item 2", "Item 3"])]
                          newItems[index] = e.target.value
                          handlePropertyChange("items", newItems)
                        }}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          const newItems = [...(selectedElement.properties.items || ["Item 1", "Item 2", "Item 3"])]
                          newItems.splice(index, 1)
                          handlePropertyChange("items", newItems)
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trash-2"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          <line x1="10" x2="10" y1="11" y2="17" />
                          <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                      </Button>
                    </div>
                  ),
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => {
                  const newItems = [...(selectedElement.properties.items || ["Item 1", "Item 2", "Item 3"]), "New Item"]
                  handlePropertyChange("items", newItems)
                }}
              >
                Add Item
              </Button>
            </div>
          </div>
        )

      case "video":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="video-url">Video URL (YouTube or Vimeo)</Label>
              <Input
                id="video-url"
                value={selectedElement.properties.videoUrl || ""}
                onChange={(e) => handlePropertyChange("videoUrl", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="video-title">Title</Label>
              <Input
                id="video-title"
                value={selectedElement.properties.title || ""}
                onChange={(e) => handlePropertyChange("title", e.target.value)}
              />
            </div>
          </div>
        )

      case "map":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="map-url">Map Embed URL (Google Maps)</Label>
              <Input
                id="map-url"
                value={selectedElement.properties.mapUrl || ""}
                onChange={(e) => handlePropertyChange("mapUrl", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="map-title">Title</Label>
              <Input
                id="map-title"
                value={selectedElement.properties.title || ""}
                onChange={(e) => handlePropertyChange("title", e.target.value)}
              />
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone</Label>
              <Input
                id="contact-phone"
                value={selectedElement.properties.phone || ""}
                onChange={(e) => handlePropertyChange("phone", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                value={selectedElement.properties.email || ""}
                onChange={(e) => handlePropertyChange("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-address">Address</Label>
              <Textarea
                id="contact-address"
                rows={3}
                value={selectedElement.properties.address || ""}
                onChange={(e) => handlePropertyChange("address", e.target.value)}
              />
            </div>
          </div>
        )

      case "newsletter":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-title">Title</Label>
              <Input
                id="newsletter-title"
                value={selectedElement.properties.title || ""}
                onChange={(e) => handlePropertyChange("title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newsletter-description">Description</Label>
              <Textarea
                id="newsletter-description"
                rows={3}
                value={selectedElement.properties.description || ""}
                onChange={(e) => handlePropertyChange("description", e.target.value)}
              />
            </div>
          </div>
        )

      case "calendar":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="calendar-title">Title</Label>
              <Input
                id="calendar-title"
                value={selectedElement.properties.title || ""}
                onChange={(e) => handlePropertyChange("title", e.target.value)}
              />
            </div>
          </div>
        )

      case "store":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="store-title">Title</Label>
              <Input
                id="store-title"
                value={selectedElement.properties.title || ""}
                onChange={(e) => handlePropertyChange("title", e.target.value)}
              />
            </div>
          </div>
        )

      case "menu":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="menu-title">Title</Label>
              <Input
                id="menu-title"
                value={selectedElement.properties.title || ""}
                onChange={(e) => handlePropertyChange("title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Menu Items</Label>
              <div className="space-y-2">
                {(selectedElement.properties.items || ["Home", "About", "Services", "Contact"]).map(
                  (item: string, index: number) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={item}
                        onChange={(e) => {
                          const newItems = [
                            ...(selectedElement.properties.items || ["Home", "About", "Services", "Contact"]),
                          ]
                          newItems[index] = e.target.value
                          handlePropertyChange("items", newItems)
                        }}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          const newItems = [
                            ...(selectedElement.properties.items || ["Home", "About", "Services", "Contact"]),
                          ]
                          newItems.splice(index, 1)
                          handlePropertyChange("items", newItems)
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trash-2"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          <line x1="10" x2="10" y1="11" y2="17" />
                          <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                      </Button>
                    </div>
                  ),
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => {
                  const newItems = [
                    ...(selectedElement.properties.items || ["Home", "About", "Services", "Contact"]),
                    "New Item",
                  ]
                  handlePropertyChange("items", newItems)
                }}
              >
                Add Item
              </Button>
            </div>
          </div>
        )

      case "profile":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profile-name">Name</Label>
              <Input
                id="profile-name"
                value={selectedElement.properties.name || ""}
                onChange={(e) => handlePropertyChange("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-title">Title/Position</Label>
              <Input
                id="profile-title"
                value={selectedElement.properties.title || ""}
                onChange={(e) => handlePropertyChange("title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-bio">Bio</Label>
              <Textarea
                id="profile-bio"
                rows={3}
                value={selectedElement.properties.bio || ""}
                onChange={(e) => handlePropertyChange("bio", e.target.value)}
              />
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-4">
            <p className="text-muted-foreground">No specific content settings for this element type.</p>
          </div>
        )
    }
  }

  const renderStyleTab = () => {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Text Color</Label>
          <div className="flex gap-2">
            <Input
              type="color"
              value={selectedElement.properties.color || "#000000"}
              onChange={(e) => handlePropertyChange("color", e.target.value)}
              className="w-12 h-8 p-1"
            />
            <Input
              type="text"
              value={selectedElement.properties.color || "#000000"}
              onChange={(e) => handlePropertyChange("color", e.target.value)}
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Background Color</Label>
          <div className="flex gap-2">
            <Input
              type="color"
              value={selectedElement.properties.backgroundColor || "#ffffff"}
              onChange={(e) => handlePropertyChange("backgroundColor", e.target.value)}
              className="w-12 h-8 p-1"
            />
            <Input
              type="text"
              value={selectedElement.properties.backgroundColor || "#ffffff"}
              onChange={(e) => handlePropertyChange("backgroundColor", e.target.value)}
              className="flex-1"
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>Font Size</Label>
          <div className="flex items-center gap-2">
            <Slider
              value={[selectedElement.properties.fontSize || 16]}
              min={8}
              max={72}
              step={1}
              onValueChange={(value) => handlePropertyChange("fontSize", value[0])}
              className="flex-1"
            />
            <span className="w-12 text-center">{selectedElement.properties.fontSize || 16}px</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="font-family">Font Family</Label>
          <Select
            value={selectedElement.properties.fontFamily || "sans-serif"}
            onValueChange={(value) => handlePropertyChange("fontFamily", value)}
          >
            <SelectTrigger id="font-family">
              <SelectValue placeholder="Select font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sans-serif">Sans Serif</SelectItem>
              <SelectItem value="serif">Serif</SelectItem>
              <SelectItem value="monospace">Monospace</SelectItem>
              <SelectItem value="cursive">Cursive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="text-align">Text Alignment</Label>
          <Select
            value={selectedElement.properties.textAlign || "left"}
            onValueChange={(value) => handlePropertyChange("textAlign", value)}
          >
            <SelectTrigger id="text-align">
              <SelectValue placeholder="Select alignment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="right">Right</SelectItem>
              <SelectItem value="justify">Justify</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>Padding</Label>
          <div className="grid grid-cols-4 gap-2">
            <div className="space-y-1">
              <Label className="text-xs">Top</Label>
              <Input
                type="number"
                min="0"
                value={selectedElement.properties.paddingTop || 0}
                onChange={(e) => handlePropertyChange("paddingTop", Number.parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Right</Label>
              <Input
                type="number"
                min="0"
                value={selectedElement.properties.paddingRight || 0}
                onChange={(e) => handlePropertyChange("paddingRight", Number.parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Bottom</Label>
              <Input
                type="number"
                min="0"
                value={selectedElement.properties.paddingBottom || 0}
                onChange={(e) => handlePropertyChange("paddingBottom", Number.parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Left</Label>
              <Input
                type="number"
                min="0"
                value={selectedElement.properties.paddingLeft || 0}
                onChange={(e) => handlePropertyChange("paddingLeft", Number.parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Margin</Label>
          <div className="grid grid-cols-4 gap-2">
            <div className="space-y-1">
              <Label className="text-xs">Top</Label>
              <Input
                type="number"
                value={selectedElement.properties.marginTop || 0}
                onChange={(e) => handlePropertyChange("marginTop", Number.parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Right</Label>
              <Input
                type="number"
                value={selectedElement.properties.marginRight || 0}
                onChange={(e) => handlePropertyChange("marginRight", Number.parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Bottom</Label>
              <Input
                type="number"
                value={selectedElement.properties.marginBottom || 0}
                onChange={(e) => handlePropertyChange("marginBottom", Number.parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Left</Label>
              <Input
                type="number"
                value={selectedElement.properties.marginLeft || 0}
                onChange={(e) => handlePropertyChange("marginLeft", Number.parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderAdvancedTab = () => {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="element-id">Element ID</Label>
          <Input
            id="element-id"
            value={selectedElement.properties.id || ""}
            onChange={(e) => handlePropertyChange("id", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="element-class">CSS Classes</Label>
          <Input
            id="element-class"
            value={selectedElement.properties.className || ""}
            onChange={(e) => handlePropertyChange("className", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Width</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              value={selectedElement.properties.width || ""}
              onChange={(e) => handlePropertyChange("width", e.target.value ? Number.parseInt(e.target.value) : "")}
              className="flex-1"
            />
            <Select
              value={selectedElement.properties.widthUnit || "%"}
              onValueChange={(value) => handlePropertyChange("widthUnit", value)}
            >
              <SelectTrigger className="w-20">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="%">%</SelectItem>
                <SelectItem value="px">px</SelectItem>
                <SelectItem value="em">em</SelectItem>
                <SelectItem value="rem">rem</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Max Width</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              value={selectedElement.properties.maxWidth || ""}
              onChange={(e) => handlePropertyChange("maxWidth", e.target.value ? Number.parseInt(e.target.value) : "")}
              className="flex-1"
            />
            <Select
              value={selectedElement.properties.maxWidthUnit || "px"}
              onValueChange={(value) => handlePropertyChange("maxWidthUnit", value)}
            >
              <SelectTrigger className="w-20">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="%">%</SelectItem>
                <SelectItem value="px">px</SelectItem>
                <SelectItem value="em">em</SelectItem>
                <SelectItem value="rem">rem</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Border</Label>
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-1">
              <Label className="text-xs">Width</Label>
              <Input
                type="number"
                min="0"
                value={selectedElement.properties.borderWidth || ""}
                onChange={(e) =>
                  handlePropertyChange("borderWidth", e.target.value ? Number.parseInt(e.target.value) : "")
                }
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Style</Label>
              <Select
                value={selectedElement.properties.borderStyle || "solid"}
                onValueChange={(value) => handlePropertyChange("borderStyle", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solid">Solid</SelectItem>
                  <SelectItem value="dashed">Dashed</SelectItem>
                  <SelectItem value="dotted">Dotted</SelectItem>
                  <SelectItem value="double">Double</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Color</Label>
              <div className="flex">
                <Input
                  type="color"
                  value={selectedElement.properties.borderColor || "#000000"}
                  onChange={(e) => handlePropertyChange("borderColor", e.target.value)}
                  className="w-full p-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Border Radius</Label>
          <div className="flex items-center gap-2">
            <Slider
              value={[selectedElement.properties.borderRadius || 0]}
              min={0}
              max={50}
              step={1}
              onValueChange={(value) => handlePropertyChange("borderRadius", value[0])}
              className="flex-1"
            />
            <span className="w-12 text-center">{selectedElement.properties.borderRadius || 0}px</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ScrollArea className="h-full pr-4">
      <div className="space-y-4 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">
            {selectedElement.type.charAt(0).toUpperCase() + selectedElement.type.slice(1)} Settings
          </h3>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4 pt-4">
            {renderContentTab()}
          </TabsContent>

          <TabsContent value="style" className="space-y-4 pt-4">
            {renderStyleTab()}
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4 pt-4">
            {renderAdvancedTab()}
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import {
  ImageIcon,
  VideoIcon,
  MapIcon,
  Mail,
  Calendar,
  Search,
  User,
  MenuIcon,
  ShoppingCart,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ElementRendererProps {
  element: any
  isSelected: boolean
  onSelect: () => void
  onDelete: () => void
  onDuplicate: () => void
  onUpdate: (properties: Record<string, any>) => void
  isPreview?: boolean
}

export function ElementRenderer({
  element,
  isSelected,
  onSelect,
  onDelete,
  onDuplicate,
  onUpdate,
  isPreview = false,
}: ElementRendererProps) {
  const [isEditing, setIsEditing] = useState(false)

  const handleDoubleClick = () => {
    if ((!isPreview && element.type.includes("text")) || element.type.includes("heading") || element.type === "quote") {
      setIsEditing(true)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsEditing(false)
    onUpdate({ text: e.target.value })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      setIsEditing(false)
      onUpdate({ text: (e.target as HTMLInputElement | HTMLTextAreaElement).value })
    }
  }

  const style = {
    color: element.properties.color,
    backgroundColor: element.properties.backgroundColor,
    fontSize: element.properties.fontSize ? `${element.properties.fontSize}px` : undefined,
    fontFamily: element.properties.fontFamily,
    textAlign: element.properties.textAlign as any,
    padding: `${element.properties.paddingTop || 0}px ${element.properties.paddingRight || 0}px ${element.properties.paddingBottom || 0}px ${element.properties.paddingLeft || 0}px`,
    margin: `${element.properties.marginTop || 0}px ${element.properties.marginRight || 0}px ${element.properties.marginBottom || 0}px ${element.properties.marginLeft || 0}px`,
    borderRadius: element.properties.borderRadius ? `${element.properties.borderRadius}px` : undefined,
    border: element.properties.borderWidth
      ? `${element.properties.borderWidth}px ${element.properties.borderStyle || "solid"} ${element.properties.borderColor || "#000"}`
      : undefined,
    width: element.properties.width ? `${element.properties.width}${element.properties.widthUnit || "%"}` : undefined,
    maxWidth: element.properties.maxWidth
      ? `${element.properties.maxWidth}${element.properties.maxWidthUnit || "px"}`
      : undefined,
  }

  const wrapperClasses = `relative ${isSelected && !isPreview ? "ring-2 ring-primary" : ""} ${element.properties.className || ""}`

  const renderElementContent = () => {
    switch (element.type) {
      case "heading1":
        return isEditing ? (
          <Input
            autoFocus
            defaultValue={element.properties.text || "Heading 1"}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full p-0 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        ) : (
          <h1 style={style} className="text-3xl font-bold">
            {element.properties.text || "Heading 1"}
          </h1>
        )

      case "heading2":
        return isEditing ? (
          <Input
            autoFocus
            defaultValue={element.properties.text || "Heading 2"}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full p-0 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        ) : (
          <h2 style={style} className="text-2xl font-bold">
            {element.properties.text || "Heading 2"}
          </h2>
        )

      case "text":
        return isEditing ? (
          <Textarea
            autoFocus
            defaultValue={element.properties.text || "Text block content"}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full p-0 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[100px]"
          />
        ) : (
          <p style={style}>{element.properties.text || "Text block content"}</p>
        )

      case "image":
        return (
          <div className="relative" style={style}>
            <img
              src={element.properties.src || "/placeholder.svg?height=200&width=400"}
              alt={element.properties.alt || "Image"}
              className="max-w-full h-auto"
            />
            {!element.properties.src && (
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-10 w-10 text-muted-foreground opacity-50" />
              </div>
            )}
          </div>
        )

      case "button":
        return (
          <Button
            style={style}
            variant={element.properties.variant || "default"}
            size={element.properties.size || "default"}
            className={element.properties.buttonClassName || ""}
          >
            {element.properties.text || "Button"}
          </Button>
        )

      case "quote":
        return isEditing ? (
          <Textarea
            autoFocus
            defaultValue={element.properties.text || "Quote text"}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full p-0 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[100px]"
          />
        ) : (
          <blockquote style={style} className="pl-4 border-l-4 border-muted italic">
            {element.properties.text || "Quote text"}
            {element.properties.author && (
              <footer className="text-sm mt-2 text-muted-foreground">— {element.properties.author}</footer>
            )}
          </blockquote>
        )

      case "code":
        return (
          <pre style={style} className="p-4 bg-muted rounded-md overflow-x-auto">
            <code>{element.properties.code || "// Code block"}</code>
          </pre>
        )

      case "list":
        return (
          <ul style={style} className="list-disc pl-5">
            {(element.properties.items || ["Item 1", "Item 2", "Item 3"]).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )

      case "video":
        return (
          <div className="relative" style={style}>
            {element.properties.videoUrl ? (
              <iframe
                src={element.properties.videoUrl}
                title={element.properties.title || "Video"}
                className="w-full aspect-video"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full aspect-video bg-muted flex items-center justify-center">
                <VideoIcon className="h-10 w-10 text-muted-foreground opacity-50" />
                <span className="ml-2 text-muted-foreground">Add a video URL</span>
              </div>
            )}
          </div>
        )

      case "map":
        return (
          <div className="relative" style={style}>
            {element.properties.mapUrl ? (
              <iframe
                src={element.properties.mapUrl}
                title={element.properties.title || "Map"}
                className="w-full aspect-video"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full aspect-video bg-muted flex items-center justify-center">
                <MapIcon className="h-10 w-10 text-muted-foreground opacity-50" />
                <span className="ml-2 text-muted-foreground">Add a map embed URL</span>
              </div>
            )}
          </div>
        )

      case "contact":
        return (
          <div style={style} className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{element.properties.phone || "Phone number"}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{element.properties.email || "Email address"}</span>
              </div>
              <p>{element.properties.address || "Address"}</p>
            </div>
          </div>
        )

      case "newsletter":
        return (
          <div style={style} className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">{element.properties.title || "Subscribe to our newsletter"}</h3>
            <p className="mb-4">{element.properties.description || "Stay updated with our latest news and updates."}</p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        )

      case "calendar":
        return (
          <div style={style} className="p-4 border rounded-md">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
              <h3 className="text-lg font-medium">{element.properties.title || "Calendar"}</h3>
            </div>
            <div className="bg-muted p-4 rounded-md text-center">
              <p>Calendar placeholder</p>
              <p className="text-sm text-muted-foreground mt-2">Configure calendar settings in the properties panel</p>
            </div>
          </div>
        )

      case "store":
        return (
          <div style={style} className="p-4 border rounded-md">
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-5 w-5 mr-2 text-muted-foreground" />
              <h3 className="text-lg font-medium">{element.properties.title || "Store Products"}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border rounded-md p-2">
                  <div className="aspect-square bg-muted mb-2 rounded-md"></div>
                  <p className="font-medium">Product {item}</p>
                  <p className="text-sm text-muted-foreground">$99.99</p>
                </div>
              ))}
            </div>
          </div>
        )

      case "menu":
        return (
          <div style={style} className="p-4 border rounded-md">
            <div className="flex items-center mb-4">
              <MenuIcon className="h-5 w-5 mr-2 text-muted-foreground" />
              <h3 className="text-lg font-medium">{element.properties.title || "Menu"}</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {(element.properties.items || ["Home", "About", "Services", "Contact"]).map(
                (item: string, index: number) => (
                  <a key={index} href="#" className="text-primary hover:underline">
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        )

      case "search":
        return (
          <div style={style} className="p-4 border rounded-md">
            <div className="flex items-center">
              <Input placeholder="Search..." className="rounded-r-none" />
              <Button className="rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case "profile":
        return (
          <div style={style} className="p-4 border rounded-md flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
              <User className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium">{element.properties.name || "User Name"}</h3>
              <p className="text-sm text-muted-foreground">{element.properties.title || "Job Title"}</p>
              <p className="text-sm mt-1">{element.properties.bio || "User biography or description"}</p>
            </div>
          </div>
        )

      case "layout":
      case "columns":
      case "table":
        return (
          <div style={style} className="p-4 border border-dashed rounded-md">
            <div className="text-center text-muted-foreground">
              <p>{element.type.charAt(0).toUpperCase() + element.type.slice(1)} Element</p>
              <p className="text-sm">Configure in the properties panel</p>
            </div>
          </div>
        )

      default:
        return (
          <div style={style} className="p-4 border border-dashed rounded-md">
            <div className="text-center text-muted-foreground">
              <p>Unknown Element Type: {element.type}</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div
      className={wrapperClasses}
      onClick={(e) => {
        e.stopPropagation()
        onSelect()
      }}
      onDoubleClick={handleDoubleClick}
      style={{
        position: "relative",
      }}
    >
      {renderElementContent()}

      {isSelected && !isPreview && (
        <div className="absolute -top-4 right-0 flex gap-1 bg-background border rounded-md shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation()
              onDuplicate()
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
              className="lucide lucide-copy"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive"
            onClick={(e) => {
              e.stopPropagation()
              onDelete()
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
      )}
    </div>
  )
}


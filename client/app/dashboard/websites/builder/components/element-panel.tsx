"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Type,
  ImageIcon,
  LayoutGrid,
  Code,
  Heading1,
  Heading2,
  ListOrdered,
  Video,
  Map,
  ShoppingCart,
  Columns,
  Quote,
  Table,
  Phone,
  Mail,
  Calendar,
  Menu,
  Search,
  User,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ElementPanelProps {
  onDragStart: (elementType: string) => void
}

export function ElementPanel({ onDragStart }: ElementPanelProps) {
  const textElements = [
    { type: "heading1", icon: Heading1, label: "Heading 1" },
    { type: "heading2", icon: Heading2, label: "Heading 2" },
    { type: "text", icon: Type, label: "Text Block" },
    { type: "quote", icon: Quote, label: "Quote" },
    { type: "code", icon: Code, label: "Code Block" },
    { type: "list", icon: ListOrdered, label: "List" },
  ]

  const mediaElements = [
    { type: "image", icon: ImageIcon, label: "Image" },
    { type: "video", icon: Video, label: "Video" },
    { type: "map", icon: Map, label: "Map" },
  ]

  const layoutElements = [
    { type: "layout", icon: LayoutGrid, label: "Layout" },
    { type: "columns", icon: Columns, label: "Columns" },
    { type: "table", icon: Table, label: "Table" },
  ]

  const interactiveElements = [
    { type: "button", icon: Code, label: "Button" },
    { type: "contact", icon: Phone, label: "Contact Info" },
    { type: "newsletter", icon: Mail, label: "Newsletter" },
    { type: "calendar", icon: Calendar, label: "Calendar" },
    { type: "search", icon: Search, label: "Search" },
  ]

  const businessElements = [
    { type: "store", icon: ShoppingCart, label: "Store Section" },
    { type: "menu", icon: Menu, label: "Menu" },
    { type: "profile", icon: User, label: "Profile" },
  ]

  const renderElementGroup = (elements: any[], title: string) => (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <div className="grid grid-cols-2 gap-2">
        {elements.map((element) => (
          <Card
            key={element.type}
            className="cursor-grab hover:border-primary transition-colors"
            draggable
            onDragStart={() => onDragStart(element.type)}
          >
            <CardContent className="flex flex-col items-center justify-center p-4">
              <element.icon className="h-6 w-6 text-muted-foreground" />
              <span className="mt-2 text-xs">{element.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <ScrollArea className="h-full pr-4">
      <div className="pb-4">
        {renderElementGroup(textElements, "Text Elements")}
        {renderElementGroup(mediaElements, "Media Elements")}
        {renderElementGroup(layoutElements, "Layout Elements")}
        {renderElementGroup(interactiveElements, "Interactive Elements")}
        {renderElementGroup(businessElements, "Business Elements")}
      </div>
    </ScrollArea>
  )
}


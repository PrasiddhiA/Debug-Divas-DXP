"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ChevronRight, Columns, Eye, Save, Smartphone, Undo, Redo, FileUp, FileDown } from "lucide-react"
import Link from "next/link"
import { ElementPanel } from "./components/element-panel"
import { LayersPanel } from "./components/layers-panel"
import { SettingsPanel } from "./components/settings-panel"
import { ElementRenderer } from "./components/element-renderer"
import { v4 as uuidv4 } from "uuid"
import { toast } from "@/components/ui/use-toast"

type ElementProperties = {
  x: number
  y: number
  text?: string
  src?: string
  alt?: string
  url?: string
  code?: string
  items?: string[]
  phone?: string
  email?: string
  address?: string
  title?: string
  description?: string
  name?: string
  bio?: string
  variant?: string
  size?: string
  author?: string
  language?: string
  videoUrl?: string
  mapUrl?: string
  color?: string
  backgroundColor?: string
}

type Element = {
  id: string
  type: string
  name: string
  visible: boolean
  locked: boolean
  properties: ElementProperties
}

export default function WebsiteBuilderPage() {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop")
  const [activeTab, setActiveTab] = useState("elements")
  const [elements, setElements] = useState<Element[]>([])
  const [selectedElement, setSelectedElement] = useState<Element | null>(null)
  const [history, setHistory] = useState<Element[][]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [draggedElement, setDraggedElement] = useState<string | null>(null)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const canvasRef = useRef<HTMLDivElement>(null)

  // Initialize with empty state
  useEffect(() => {
    const initialElements: Element[] = []
    setElements(initialElements)
    setHistory([initialElements])
    setHistoryIndex(0)
  }, [])

  // Save state to history when elements change
  const saveToHistory = (newElements: Element[]) => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(newElements)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  // Undo action
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setElements(history[historyIndex - 1])
      setSelectedElement(null)
    }
  }

  // Redo action
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setElements(history[historyIndex + 1])
      setSelectedElement(null)
    }
  }

  // Handle element drag start
  const handleDragStart = (elementType: string) => {
    setDraggedElement(elementType)
  }

  // Handle drop on canvas
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (!draggedElement) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Create new element based on type
    const newElement: Element = {
      id: uuidv4(),
      type: draggedElement,
      name: `${draggedElement.charAt(0).toUpperCase() + draggedElement.slice(1)} ${elements.length + 1}`,
      visible: true,
      locked: false,
      properties: {
        x,
        y,
      },
    }

    // Add default properties based on element type
    switch (draggedElement) {
      case "heading1":
        newElement.properties.text = "Heading 1"
        break
      case "heading2":
        newElement.properties.text = "Heading 2"
        break
      case "text":
        newElement.properties.text = "This is a text block. Click to edit."
        break
      case "image":
        newElement.properties.src = "/placeholder.svg?height=200&width=400"
        newElement.properties.alt = "Image"
        break
      case "button":
        newElement.properties.text = "Click Me"
        newElement.properties.url = "#"
        break
      case "quote":
        newElement.properties.text = "This is a quote block."
        break
      case "code":
        newElement.properties.code = "// Code block"
        break
      case "list":
        newElement.properties.items = ["Item 1", "Item 2", "Item 3"]
        break
      case "video":
        newElement.properties.title = "Video"
        break
      case "map":
        newElement.properties.title = "Map"
        break
      case "contact":
        newElement.properties.phone = "(123) 456-7890"
        newElement.properties.email = "contact@example.com"
        newElement.properties.address = "123 Main St, City, Country"
        break
      case "newsletter":
        newElement.properties.title = "Subscribe to our newsletter"
        newElement.properties.description = "Stay updated with our latest news and updates."
        break
      case "calendar":
        newElement.properties.title = "Calendar"
        break
      case "store":
        newElement.properties.title = "Store Products"
        break
      case "menu":
        newElement.properties.title = "Menu"
        newElement.properties.items = ["Home", "About", "Services", "Contact"]
        break
      case "profile":
        newElement.properties.name = "User Name"
        newElement.properties.title = "Job Title"
        newElement.properties.bio = "User biography or description"
        break
    }

    const newElements = [...elements, newElement]
    setElements(newElements)
    saveToHistory(newElements)
    setSelectedElement(newElement)
    setActiveTab("settings")
    setDraggedElement(null)
  }

  // Handle element selection
  const handleElementSelect = (element: Element) => {
    if (isPreviewMode) return
    setSelectedElement(element)
    setActiveTab("settings")
  }

  // Handle canvas click (deselect)
  const handleCanvasClick = () => {
    if (isPreviewMode) return
    setSelectedElement(null)
  }

  // Handle element update
  const handleUpdateElement = (id: string, properties: Partial<ElementProperties>) => {
    const newElements = elements.map((element) =>
      element.id === id ? { ...element, properties: { ...element.properties, ...properties } } : element,
    )
    setElements(newElements)
    setSelectedElement(newElements.find((element) => element.id === id) || null)
    saveToHistory(newElements)
  }

  // Handle toggle visibility
  const handleToggleVisibility = (id: string) => {
    const newElements = elements.map((element) =>
      element.id === id ? { ...element, visible: !element.visible } : element,
    )
    setElements(newElements)
    saveToHistory(newElements)
  }

  // Handle toggle lock
  const handleToggleLock = (id: string) => {
    const newElements = elements.map((element) =>
      element.id === id ? { ...element, locked: !element.locked } : element,
    )
    setElements(newElements)
    saveToHistory(newElements)
  }

  // Handle delete element
  const handleDeleteElement = (id: string) => {
    const newElements = elements.filter((element) => element.id !== id)
    setElements(newElements)
    saveToHistory(newElements)
    if (selectedElement && selectedElement.id === id) {
      setSelectedElement(null)
    }
  }

  // Handle duplicate element
  const handleDuplicateElement = (id: string) => {
    const elementToDuplicate = elements.find((element) => element.id === id)
    if (!elementToDuplicate) return

    const newElement: Element = {
      ...elementToDuplicate,
      id: uuidv4(),
      name: `${elementToDuplicate.name} (Copy)`,
      properties: { ...elementToDuplicate.properties },
    }

    const newElements = [...elements, newElement]
    setElements(newElements)
    saveToHistory(newElements)
    setSelectedElement(newElement)
  }

  // Handle move layer
  const handleMoveLayer = (id: string, direction: "up" | "down") => {
    const index = elements.findIndex((element) => element.id === id)
    if (index === -1) return

    if (direction === "up" && index > 0) {
      const newElements = [...elements]
      const temp = newElements[index]
      newElements[index] = newElements[index - 1]
      newElements[index - 1] = temp
      setElements(newElements)
      saveToHistory(newElements)
    } else if (direction === "down" && index < elements.length - 1) {
      const newElements = [...elements]
      const temp = newElements[index]
      newElements[index] = newElements[index + 1]
      newElements[index + 1] = temp
      setElements(newElements)
      saveToHistory(newElements)
    }
  }

  // Toggle preview mode
  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode)
    if (!isPreviewMode) {
      setSelectedElement(null)
    }
  }

  // Export website data
  const handleExport = () => {
    const data = JSON.stringify(elements, null, 2)
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "website-elements.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({
      title: "Export Successful",
      description: "Your website data has been exported successfully.",
    })
  }

  // Import website data
  const handleImport = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".json"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string)
          setElements(data)
          saveToHistory(data)
          setSelectedElement(null)
          toast({
            title: "Import Successful",
            description: "Your website data has been imported successfully.",
          })
        } catch (error) {
          toast({
            title: "Import Failed",
            description: "There was an error importing your website data.",
            variant: "destructive",
          })
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex h-14 items-center justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/websites">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex items-center gap-1 text-sm font-medium">
            <span>My Website</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span>Home Page</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleUndo}
              disabled={historyIndex <= 0 || isPreviewMode}
              title="Undo"
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleRedo}
              disabled={historyIndex >= history.length - 1 || isPreviewMode}
              title="Redo"
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center rounded-lg border p-1">
            <Button
              variant={viewMode === "desktop" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("desktop")}
              disabled={isPreviewMode}
              title="Desktop View"
            >
              <Columns className="h-4 w-4" />
              <span className="sr-only">Desktop view</span>
            </Button>
            <Button
              variant={viewMode === "mobile" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("mobile")}
              disabled={isPreviewMode}
              title="Mobile View"
            >
              <Smartphone className="h-4 w-4" />
              <span className="sr-only">Mobile view</span>
            </Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={togglePreviewMode}
            className={isPreviewMode ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
          >
            <Eye className="mr-2 h-4 w-4" />
            {isPreviewMode ? "Exit Preview" : "Preview"}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleExport}
            disabled={isPreviewMode}
            title="Export"
          >
            <FileDown className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleImport}
            disabled={isPreviewMode}
            title="Import"
          >
            <FileUp className="h-4 w-4" />
          </Button>
          <Button size="sm" disabled={isPreviewMode}>
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Link href="/dashboard/websites/builder/content">
            <Button>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className={`grid flex-1 ${isPreviewMode ? "" : "grid-cols-[300px_1fr]"}`}>
        {!isPreviewMode && (
          <div className="border-r">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="elements">Elements</TabsTrigger>
                <TabsTrigger value="layers">Layers</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="elements" className="p-4 overflow-auto h-[calc(100vh-8rem)]">
                <ElementPanel onDragStart={handleDragStart} />
              </TabsContent>
              <TabsContent value="layers" className="m-0 h-full border-0">
                <LayersPanel
                  layers={elements.map(element => ({
                    id: element.id,
                    name: element.name,
                    type: element.type,
                    visible: element.visible,
                    locked: element.locked
                  }))}
                  onToggleVisibility={handleToggleVisibility}
                  onToggleLock={handleToggleLock}
                  onDeleteLayer={handleDeleteElement}
                  onDuplicateLayer={handleDuplicateElement}
                  onMoveLayer={handleMoveLayer}
                />
              </TabsContent>
              <TabsContent value="settings" className="m-0 h-full border-0">
                <SettingsPanel
                  selectedElement={selectedElement}
                  onUpdateElement={handleUpdateElement}
                />
              </TabsContent>
            </Tabs>
          </div>
        )}
        <div className="flex flex-col items-center justify-center bg-muted/30 p-4 overflow-auto">
          <div
            ref={canvasRef}
            className={`bg-background ${viewMode === "mobile" ? "w-[375px]" : "w-full max-w-4xl"} h-full overflow-auto rounded-lg border shadow-sm`}
            onDragOver={(e) => !isPreviewMode && e.preventDefault()}
            onDrop={(e) => !isPreviewMode && handleDrop(e)}
            onClick={handleCanvasClick}
          >
            <div className="min-h-[2000px] p-4">
              {elements.length === 0 ? (
                <div className="rounded-lg border border-dashed border-muted-foreground/50 p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    {isPreviewMode
                      ? "No elements added to this page yet."
                      : "Drag and drop elements here to build your page"}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {elements.map(
                    (element) =>
                      element.visible && (
                        <ElementRenderer
                          key={element.id}
                          element={element}
                          isSelected={selectedElement?.id === element.id}
                          onSelect={() => handleElementSelect(element)}
                          onDelete={() => handleDeleteElement(element.id)}
                          onDuplicate={() => handleDuplicateElement(element.id)}
                          onUpdate={(properties) => handleUpdateElement(element.id, properties)}
                          isPreview={isPreviewMode}
                        />
                      ),
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


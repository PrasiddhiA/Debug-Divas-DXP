"use client"
import { useState, useEffect } from "react"
import { LucideIcon } from "lucide-react"

interface DraggableElementProps {
  element: {
    type: string
    icon: React.ReactNode
    label: string
  }
  onDragStart: (elementType: string) => void
}

export function DraggableElement({ element, onDragStart }: DraggableElementProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", element.type)
    onDragStart(element.type)
  }

  return (
    <div
      className="flex flex-col items-center justify-center rounded-md border border-dashed p-3 text-center hover:bg-accent cursor-move"
      draggable={true}
      onDragStart={handleDragStart}
    >
      <div className="mb-2 rounded-md bg-primary/10 p-2 text-primary">
        {element.icon}
      </div>
      <div className="text-xs font-medium">{element.label}</div>
    </div>
  )
}
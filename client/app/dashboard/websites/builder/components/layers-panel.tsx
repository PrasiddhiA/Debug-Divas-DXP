"use client"

import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Layers, Lock, Unlock, Trash2, Copy, MoveUp, MoveDown } from "lucide-react"

interface LayersPanelProps {
  layers: Array<{
    id: string
    name: string
    type: string
    visible: boolean
    locked: boolean
  }>
  onToggleVisibility: (id: string) => void
  onToggleLock: (id: string) => void
  onDeleteLayer: (id: string) => void
  onDuplicateLayer: (id: string) => void
  onMoveLayer: (id: string, direction: "up" | "down") => void
}

export function LayersPanel({
  layers,
  onToggleVisibility,
  onToggleLock,
  onDeleteLayer,
  onDuplicateLayer,
  onMoveLayer,
}: LayersPanelProps) {
  if (layers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center text-muted-foreground">
        <Layers className="h-12 w-12 mb-2 opacity-20" />
        <p>No elements added yet</p>
        <p className="text-sm mt-1">Drag elements from the Elements panel to add them to your page</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">Layers ({layers.length})</div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Layers className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2">
        {layers.map((layer) => (
          <div key={layer.id} className="flex items-center justify-between rounded-lg border p-2 text-sm">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onToggleVisibility(layer.id)}>
                {layer.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </Button>
              <span className="truncate max-w-[150px]">{layer.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onMoveLayer(layer.id, "up")}>
                <MoveUp className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onMoveLayer(layer.id, "down")}>
                <MoveDown className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onDuplicateLayer(layer.id)}>
                <Copy className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onToggleLock(layer.id)}>
                {layer.locked ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-destructive"
                onClick={() => onDeleteLayer(layer.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


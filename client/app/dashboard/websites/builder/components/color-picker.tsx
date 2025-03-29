"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
}

export function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [currentColor, setCurrentColor] = useState(color)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setCurrentColor(color)
  }, [color])

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setCurrentColor(newColor)
    onChange(newColor)
  }

  const presetColors = [
    "#000000",
    "#ffffff",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#9e9e9e",
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="flex h-8 w-full items-center justify-between rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          style={{ backgroundColor: currentColor }}
        >
          <span className="sr-only">Pick a color</span>
          <span
            className={`text-xs ${
              currentColor === "transparent" || currentColor === "#ffffff" || currentColor === "#FFFFFF"
                ? "text-black"
                : "text-white"
            }`}
          >
            {currentColor}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <div className="flex justify-between">
            <input
              ref={inputRef}
              type="color"
              value={currentColor === "transparent" ? "#ffffff" : currentColor}
              onChange={handleColorChange}
              className="h-8 w-8 cursor-pointer rounded border-0 p-0"
            />
            <input
              type="text"
              value={currentColor}
              onChange={(e) => {
                setCurrentColor(e.target.value)
                onChange(e.target.value)
              }}
              className="h-8 flex-1 ml-2 rounded-md border border-input px-3 py-1 text-sm"
            />
          </div>
          <div className="grid grid-cols-10 gap-1">
            {presetColors.map((presetColor) => (
              <button
                key={presetColor}
                className="h-4 w-4 rounded-sm border border-muted-foreground/20"
                style={{ backgroundColor: presetColor }}
                onClick={() => {
                  setCurrentColor(presetColor)
                  onChange(presetColor)
                }}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <button
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={() => {
                setCurrentColor("transparent")
                onChange("transparent")
              }}
            >
              Transparent
            </button>
            <button
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.click()
                }
              }}
            >
              Custom...
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}


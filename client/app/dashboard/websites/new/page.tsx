"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const templates = [
  {
    id: 1,
    name: "E-commerce Store",
    description: "Perfect for selling products online",
    image: "/placeholder.svg?height=200&width=300&text=E-commerce",
  },
  {
    id: 2,
    name: "Portfolio",
    description: "Showcase your work and skills",
    image: "/placeholder.svg?height=200&width=300&text=Portfolio",
  },
  {
    id: 3,
    name: "Blog",
    description: "Share your thoughts and ideas",
    image: "/placeholder.svg?height=200&width=300&text=Blog",
  },
  {
    id: 4,
    name: "Service Business",
    description: "Promote your services",
    image: "/placeholder.svg?height=200&width=300&text=Services",
  },
  {
    id: 5,
    name: "Landing Page",
    description: "Promote a product or service",
    image: "/placeholder.svg?height=200&width=300&text=Landing",
  },
  {
    id: 6,
    name: "Blank",
    description: "Start from scratch",
    image: "/placeholder.svg?height=200&width=300&text=Blank",
  },
]

export default function NewWebsitePage() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/websites">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create New Website</h1>
          <p className="text-muted-foreground">Choose a template to get started.</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all hover:border-primary ${
              selectedTemplate === template.id ? "border-2 border-primary" : ""
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  width={300}
                  height={200}
                  className="aspect-video w-full rounded-t-lg object-cover"
                />
                {selectedTemplate === template.id && (
                  <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          disabled={!selectedTemplate}
          onClick={() => {
            // In a real app, this would navigate to the website builder
            window.location.href = "/dashboard/websites/builder"
          }}
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}


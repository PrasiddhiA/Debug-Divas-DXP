"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export default function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated portfolio data - replace with actual API call
    const mockPortfolioData: PortfolioItem[] = [
      {
        id: "1",
        title: "E-commerce Website",
        description: "A modern e-commerce platform built with Next.js and Tailwind CSS",
        image: "/placeholder.svg?height=400&width=600",
        category: "Web Development"
      },
      {
        id: "2",
        title: "Mobile App Design",
        description: "UI/UX design for a fitness tracking mobile application",
        image: "/placeholder.svg?height=400&width=600",
        category: "UI/UX Design"
      },
      {
        id: "3",
        title: "Brand Identity",
        description: "Complete brand identity design for a tech startup",
        image: "/placeholder.svg?height=400&width=600",
        category: "Branding"
      }
    ]

    // Simulate API call
    setTimeout(() => {
      setPortfolioItems(mockPortfolioData)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Portfolio</h1>
          <p className="text-muted-foreground mt-4">
            Explore our collection of successful projects and client work
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.id}`}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  features: string[]
  technologies: string[]
}

export default function PortfolioPage() {
  const params = useParams()
  const [portfolioItem, setPortfolioItem] = useState<PortfolioItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated portfolio data - replace with actual API call
    const mockPortfolioData: PortfolioItem = {
      id: params.id as string,
      title: "E-commerce Website",
      description: "A modern e-commerce platform built with Next.js and Tailwind CSS",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web Development",
      features: [
        "Responsive design",
        "Shopping cart functionality",
        "User authentication",
        "Product management",
        "Order tracking"
      ],
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB"
      ]
    }

    // Simulate API call
    setTimeout(() => {
      setPortfolioItem(mockPortfolioData)
      setLoading(false)
    }, 1000)
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  if (!portfolioItem) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Item Not Found</CardTitle>
            <CardDescription>The requested portfolio item could not be found.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/portfolio">
              <Button>Back to Portfolio</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <Image
            src={portfolioItem.image}
            alt={portfolioItem.title}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-wrap gap-2">
            {portfolioItem.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{portfolioItem.title}</h1>
            <p className="text-muted-foreground mt-2">{portfolioItem.category}</p>
          </div>
          <p className="text-muted-foreground">{portfolioItem.description}</p>
          <div>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              {portfolioItem.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <Button>View Live Site</Button>
            <Button variant="outline">View Source Code</Button>
          </div>
        </div>
      </div>
    </div>
  )
} 
"use client"

import { Button } from "@/components/ui/button"
import { Globe, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"

export function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/dashboard/websites/new">
        <Button className="w-full sm:w-auto" size="lg">
          <Globe className="mr-2 h-4 w-4" />
          Create New Website
        </Button>
      </Link>
      <Link href="/dashboard/store/products/new">
        <Button className="w-full sm:w-auto" size="lg" variant="outline">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add New Product
        </Button>
      </Link>
      <Link href="/dashboard/community">
        <Button className="w-full sm:w-auto" size="lg" variant="outline">
          <Users className="mr-2 h-4 w-4" />
          Join Community
        </Button>
      </Link>
    </div>
  )
} 
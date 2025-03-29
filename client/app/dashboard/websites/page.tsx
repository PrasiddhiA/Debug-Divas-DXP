"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Edit, Plus } from "lucide-react"
import Image from "next/image"

export default function WebsitesPage() {
  const router = useRouter()

  // This function will handle the "Create New Website" action
  const handleCreateNew = () => {
    router.push("/dashboard/websites/builder")
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">My Websites</h1>
        <p className="text-muted-foreground">
          Manage your websites and create new ones with our drag-and-drop builder.
        </p>
      </div>
      <div className="flex justify-end">
        <Button onClick={handleCreateNew}>
          <Plus className="mr-2 h-4 w-4" />
          Create New Website
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>My Online Store</CardTitle>
            <CardDescription>Last updated 2 days ago</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Website preview"
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className="font-medium">Published</p>
              </div>
              <div>
                <p className="text-muted-foreground">Visitors</p>
                <p className="font-medium">1,234</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={() => router.push("/dashboard/websites/builder")}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button size="sm" onClick={() => router.push("/dashboard/websites/1")}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>My Portfolio</CardTitle>
            <CardDescription>Last updated 5 days ago</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Website preview"
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className="font-medium">Published</p>
              </div>
              <div>
                <p className="text-muted-foreground">Visitors</p>
                <p className="font-medium">567</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={() => router.push("/dashboard/websites/builder")}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button size="sm" onClick={() => router.push("/dashboard/websites/2")}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <Plus className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-xl font-medium">Create a New Website</h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Use our drag-and-drop builder to create a professional website.
            </p>
            <Button className="mt-6" onClick={handleCreateNew}>
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


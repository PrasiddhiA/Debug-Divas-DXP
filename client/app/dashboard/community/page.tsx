import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Search, Users } from "lucide-react"
import Image from "next/image"

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Community</h1>
        <p className="text-muted-foreground">Connect with other women entrepreneurs and grow your network.</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search the community..." className="w-full pl-8" />
        </div>
        <Button>
          <Users className="mr-2 h-4 w-4" />
          Find Connections
        </Button>
      </div>
      <Tabs defaultValue="discussions">
        <TabsList>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
        </TabsList>
        <TabsContent value="discussions" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Discussions</CardTitle>
              <CardDescription>Join conversations with other entrepreneurs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4 rounded-lg border p-4">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Marketing Strategies for Small Businesses</h3>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      I'm looking for advice on cost-effective marketing strategies for my new online boutique...
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        <span>12 replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>5 participants</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Discussions
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Start a Discussion</CardTitle>
              <CardDescription>Share your thoughts or ask for advice.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Topic</label>
                  <Input placeholder="Enter a topic title" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    rows={4}
                    placeholder="Share your thoughts or questions..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Post Discussion</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="members" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full bg-muted" />
                    <h3 className="mt-4 font-medium">Jane Smith</h3>
                    <p className="text-sm text-muted-foreground">Fashion Designer</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Owner of a sustainable fashion brand with 5 years of experience.
                    </p>
                    <Button className="mt-4" variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="events" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Event ${i}`}
                    alt={`Event ${i}`}
                    width={300}
                    height={200}
                    className="aspect-video w-full rounded-t-lg object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Entrepreneurship Workshop</h3>
                      <span className="text-xs text-muted-foreground">Virtual</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Learn essential skills for growing your business in this interactive workshop.
                    </p>
                    <div className="mt-4 text-xs text-muted-foreground">
                      <div>Date: April 15, 2023</div>
                      <div>Time: 2:00 PM - 4:00 PM EST</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="mentorship" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Find a Mentor</CardTitle>
                <CardDescription>Connect with experienced entrepreneurs who can guide you.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 rounded-lg border p-4">
                      <div className="h-12 w-12 rounded-full bg-muted" />
                      <div className="flex-1">
                        <h3 className="font-medium">Sarah Johnson</h3>
                        <p className="text-sm text-muted-foreground">Marketing Expert with 10+ years of experience</p>
                        <Button className="mt-2" size="sm">
                          Request Mentorship
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Mentors
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Become a Mentor</CardTitle>
                <CardDescription>Share your knowledge and experience with others.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    As a mentor, you'll have the opportunity to guide other entrepreneurs, share your expertise, and
                    give back to the community.
                  </p>
                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="font-medium">Benefits of Mentoring:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>Strengthen your leadership skills</li>
                      <li>Expand your professional network</li>
                      <li>Gain fresh perspectives on your own business</li>
                      <li>Make a meaningful impact in someone's entrepreneurial journey</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply to Become a Mentor</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


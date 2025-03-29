import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, DollarSign, FileText, GraduationCap, Search, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
        <p className="text-muted-foreground">Access funding opportunities, learning resources, and business tools.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search resources..." className="w-full pl-8" />
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Browse All Resources
        </Button>
      </div>

      <Tabs defaultValue="funding">
        <TabsList>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="tools">Business Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="funding" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Available Grants</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">Matching your business profile</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Loan Programs</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Low-interest options available</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Investor Connections</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20+</div>
                <p className="text-xs text-muted-foreground">Angel investors and VCs</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Featured Funding Opportunities</CardTitle>
              <CardDescription>Grants and programs specifically for women entrepreneurs.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Women's Business Development Grant",
                    organization: "National Women's Business Council",
                    amount: "$25,000",
                    deadline: "April 30, 2023",
                    tags: ["Women-Owned", "Small Business"],
                  },
                  {
                    title: "Amber Grant for Women",
                    organization: "WomensNet",
                    amount: "$10,000",
                    deadline: "Monthly",
                    tags: ["Women-Owned", "Early-Stage"],
                  },
                  {
                    title: "SBA Women-Owned Small Business Federal Contracting Program",
                    organization: "Small Business Administration",
                    amount: "Varies",
                    deadline: "Ongoing",
                    tags: ["Federal", "Contracting"],
                  },
                  {
                    title: "Cartier Women's Initiative Award",
                    organization: "Cartier",
                    amount: "$100,000",
                    deadline: "May 15, 2023",
                    tags: ["International", "Social Impact"],
                  },
                ].map((opportunity, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-medium">{opportunity.title}</h3>
                        <p className="text-sm text-muted-foreground">{opportunity.organization}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {opportunity.tags.map((tag, j) => (
                            <Badge key={j} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:text-right">
                        <p className="text-sm font-medium">{opportunity.amount}</p>
                        <p className="text-xs text-muted-foreground">Deadline: {opportunity.deadline}</p>
                        <Button className="mt-2" size="sm">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Funding Opportunities
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Funding Application Assistance</CardTitle>
              <CardDescription>Get help with your funding applications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-medium">Grant Writing Services</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our professional grant writers can help you craft compelling applications that stand out.
                </p>
                <Button className="mt-3" size="sm">
                  Learn More
                </Button>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-medium">Application Review</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Get expert feedback on your funding applications before submission.
                </p>
                <Button className="mt-3" size="sm">
                  Learn More
                </Button>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-medium">Business Plan Development</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create a comprehensive business plan to support your funding applications.
                </p>
                <Button className="mt-3" size="sm">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business Fundamentals",
                description: "Learn the essentials of starting and running a successful business.",
                lessons: 12,
                duration: "6 hours",
                image: "/placeholder.svg?height=200&width=300&text=Business",
              },
              {
                title: "Digital Marketing Mastery",
                description: "Develop effective digital marketing strategies for your business.",
                lessons: 10,
                duration: "5 hours",
                image: "/placeholder.svg?height=200&width=300&text=Marketing",
              },
              {
                title: "Financial Management",
                description: "Master the financial aspects of running your business.",
                lessons: 8,
                duration: "4 hours",
                image: "/placeholder.svg?height=200&width=300&text=Finance",
              },
              {
                title: "E-commerce Strategies",
                description: "Build and grow a successful online store.",
                lessons: 10,
                duration: "5 hours",
                image: "/placeholder.svg?height=200&width=300&text=E-commerce",
              },
              {
                title: "Social Media Growth",
                description: "Leverage social media to expand your business reach.",
                lessons: 8,
                duration: "4 hours",
                image: "/placeholder.svg?height=200&width=300&text=Social",
              },
              {
                title: "Leadership Skills",
                description: "Develop essential leadership skills for entrepreneurs.",
                lessons: 6,
                duration: "3 hours",
                image: "/placeholder.svg?height=200&width=300&text=Leadership",
              },
            ].map((course, i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="aspect-video w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Learning Paths</CardTitle>
              <CardDescription>Curated courses to help you achieve specific business goals.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "New Entrepreneur",
                  description: "Essential courses for those just starting their business journey.",
                  courses: 5,
                  duration: "20 hours",
                },
                {
                  title: "E-commerce Growth",
                  description: "Strategies to scale your online store and increase sales.",
                  courses: 4,
                  duration: "16 hours",
                },
                {
                  title: "Digital Marketing Specialist",
                  description: "Master digital marketing across multiple channels.",
                  courses: 6,
                  duration: "24 hours",
                },
              ].map((path, i) => (
                <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{path.title}</h3>
                    <p className="text-sm text-muted-foreground">{path.description}</p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{path.courses} courses</span>
                      <span>•</span>
                      <span>{path.duration}</span>
                    </div>
                  </div>
                  <Button>View Path</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Workshops, webinars, and networking opportunities.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Women in Business Summit",
                  type: "Conference",
                  date: "April 15-16, 2023",
                  location: "Virtual",
                  description: "Connect with successful women entrepreneurs and industry leaders.",
                },
                {
                  title: "E-commerce Optimization Workshop",
                  type: "Workshop",
                  date: "April 22, 2023",
                  location: "Virtual",
                  description: "Learn strategies to improve your online store's conversion rate.",
                },
                {
                  title: "Funding Your Business: Investor Panel",
                  type: "Webinar",
                  date: "April 28, 2023",
                  location: "Virtual",
                  description: "Hear from investors about what they look for in businesses.",
                },
                {
                  title: "Local Entrepreneurs Networking Mixer",
                  type: "Networking",
                  date: "May 5, 2023",
                  location: "San Francisco, CA",
                  description: "Meet and connect with other entrepreneurs in your area.",
                },
              ].map((event, i) => (
                <div key={i} className="flex gap-4 rounded-lg border p-4">
                  <div className="hidden sm:block">
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <span className="text-xs">{event.date.split(", ")[0].split(" ")[0]}</span>
                      <span className="text-lg font-bold">{event.date.split(" ")[1].split("-")[0]}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline">{event.type}</Badge>
                          <span>•</span>
                          <span>{event.date}</span>
                          <span>•</span>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button className="mt-2 sm:mt-0" size="sm">
                        Register
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Calendar</CardTitle>
              <CardDescription>Plan your schedule with our event calendar.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <Calendar className="h-60 w-60 text-muted-foreground" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Open Full Calendar
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="tools" className="mt-6 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business Plan Template",
                description: "Comprehensive template to create your business plan.",
                category: "Planning",
                icon: FileText,
              },
              {
                title: "Financial Projections Calculator",
                description: "Create detailed financial projections for your business.",
                category: "Finance",
                icon: DollarSign,
              },
              {
                title: "Marketing Plan Builder",
                description: "Step-by-step guide to create your marketing strategy.",
                category: "Marketing",
                icon: BookOpen,
              },
              {
                title: "Social Media Content Calendar",
                description: "Plan and organize your social media content.",
                category: "Marketing",
                icon: Calendar,
              },
              {
                title: "Competitor Analysis Template",
                description: "Analyze your competitors and identify opportunities.",
                category: "Strategy",
                icon: Search,
              },
              {
                title: "Invoice Generator",
                description: "Create professional invoices for your clients.",
                category: "Finance",
                icon: FileText,
              },
            ].map((tool, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    <tool.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{tool.category}</Badge>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Access Tool</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Business Resources</CardTitle>
              <CardDescription>Helpful guides and templates for your business.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Ultimate Guide to E-commerce SEO",
                  type: "Guide",
                  pages: 25,
                  downloads: "1.2k",
                },
                {
                  title: "Small Business Legal Checklist",
                  type: "Checklist",
                  pages: 10,
                  downloads: "3.5k",
                },
                {
                  title: "Social Media Strategy Workbook",
                  type: "Workbook",
                  pages: 30,
                  downloads: "2.8k",
                },
                {
                  title: "Email Marketing Templates",
                  type: "Templates",
                  pages: 15,
                  downloads: "4.2k",
                },
              ].map((resource, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{resource.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline">{resource.type}</Badge>
                        <span>•</span>
                        <span>{resource.pages} pages</span>
                        <span>•</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm">Download</Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Resources
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { CalendarClock, Plus } from "lucide-react"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Appointment Booking</h1>
        <p className="text-muted-foreground">Manage your service appointments and bookings.</p>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Today</CardTitle>
                <CalendarClock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Appointments scheduled</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">This Week</CardTitle>
                <CalendarClock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Appointments scheduled</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
                <CalendarClock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48</div>
                <p className="text-xs text-muted-foreground">Appointments scheduled</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>View and manage your upcoming appointments.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 border-b p-4 text-sm font-medium">
                    <div>Client</div>
                    <div>Service</div>
                    <div>Date</div>
                    <div>Time</div>
                    <div>Status</div>
                  </div>
                  {[
                    {
                      client: "Sarah Johnson",
                      service: "Business Consultation",
                      date: "Today",
                      time: "2:00 PM",
                      status: "Confirmed",
                    },
                    {
                      client: "Emily Davis",
                      service: "Website Review",
                      date: "Today",
                      time: "4:30 PM",
                      status: "Confirmed",
                    },
                    {
                      client: "Michael Brown",
                      service: "Marketing Strategy",
                      date: "Today",
                      time: "6:00 PM",
                      status: "Pending",
                    },
                    {
                      client: "Jessica Wilson",
                      service: "Business Consultation",
                      date: "Tomorrow",
                      time: "10:00 AM",
                      status: "Confirmed",
                    },
                    {
                      client: "David Miller",
                      service: "Product Photography",
                      date: "Tomorrow",
                      time: "1:30 PM",
                      status: "Confirmed",
                    },
                  ].map((appointment, i) => (
                    <div key={i} className="grid grid-cols-5 border-b p-4 text-sm">
                      <div>{appointment.client}</div>
                      <div>{appointment.service}</div>
                      <div>{appointment.date}</div>
                      <div>{appointment.time}</div>
                      <div>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            appointment.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Appointments
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Your appointment schedule.</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Past Appointments</CardTitle>
              <CardDescription>View your appointment history.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b p-4 text-sm font-medium">
                  <div>Client</div>
                  <div>Service</div>
                  <div>Date</div>
                  <div>Time</div>
                  <div>Status</div>
                </div>
                {[
                  {
                    client: "John Smith",
                    service: "Business Consultation",
                    date: "Mar 15, 2023",
                    time: "2:00 PM",
                    status: "Completed",
                  },
                  {
                    client: "Lisa Johnson",
                    service: "Website Review",
                    date: "Mar 12, 2023",
                    time: "4:30 PM",
                    status: "Completed",
                  },
                  {
                    client: "Robert Davis",
                    service: "Marketing Strategy",
                    date: "Mar 10, 2023",
                    time: "6:00 PM",
                    status: "Cancelled",
                  },
                  {
                    client: "Amanda Wilson",
                    service: "Business Consultation",
                    date: "Mar 8, 2023",
                    time: "10:00 AM",
                    status: "Completed",
                  },
                  {
                    client: "Thomas Miller",
                    service: "Product Photography",
                    date: "Mar 5, 2023",
                    time: "1:30 PM",
                    status: "Completed",
                  },
                ].map((appointment, i) => (
                  <div key={i} className="grid grid-cols-5 border-b p-4 text-sm">
                    <div>{appointment.client}</div>
                    <div>{appointment.service}</div>
                    <div>{appointment.date}</div>
                    <div>{appointment.time}</div>
                    <div>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          appointment.status === "Completed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="mt-6">
          <div className="flex justify-end mb-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Business Consultation",
                duration: "60 min",
                price: "$150",
                description: "One-on-one business strategy session",
              },
              {
                name: "Website Review",
                duration: "45 min",
                price: "$100",
                description: "Detailed review of your website with recommendations",
              },
              {
                name: "Marketing Strategy",
                duration: "90 min",
                price: "$200",
                description: "Comprehensive marketing plan development",
              },
              {
                name: "Product Photography",
                duration: "120 min",
                price: "$250",
                description: "Professional product photography session",
              },
              {
                name: "Social Media Audit",
                duration: "30 min",
                price: "$75",
                description: "Review of social media presence and strategy",
              },
              {
                name: "E-commerce Setup",
                duration: "180 min",
                price: "$350",
                description: "Complete setup of your online store",
              },
            ].map((service, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Price</p>
                      <p className="font-medium">{service.price}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Settings</CardTitle>
              <CardDescription>Configure your appointment booking preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Business Hours</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="flex items-center justify-between space-x-2 rounded-lg border p-3">
                      <div className="flex items-center space-x-2">
                        <Switch id={`${day.toLowerCase()}-toggle`} defaultChecked={day !== "Sunday"} />
                        <Label htmlFor={`${day.toLowerCase()}-toggle`}>{day}</Label>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Select defaultValue={day !== "Sunday" ? "09:00" : "closed"}>
                          <SelectTrigger className="w-[110px]">
                            <SelectValue placeholder="Start Time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="closed">Closed</SelectItem>
                            <SelectItem value="08:00">8:00 AM</SelectItem>
                            <SelectItem value="09:00">9:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                          </SelectContent>
                        </Select>
                        <span>to</span>
                        <Select defaultValue={day !== "Sunday" ? "17:00" : "closed"}>
                          <SelectTrigger className="w-[110px]">
                            <SelectValue placeholder="End Time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="closed">Closed</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                            <SelectItem value="17:00">5:00 PM</SelectItem>
                            <SelectItem value="18:00">6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Booking Preferences</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="space-y-0.5">
                      <Label>Minimum notice required</Label>
                      <p className="text-xs text-muted-foreground">How much advance notice is required for bookings</p>
                    </div>
                    <Select defaultValue="24">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour</SelectItem>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="4">4 hours</SelectItem>
                        <SelectItem value="24">24 hours</SelectItem>
                        <SelectItem value="48">48 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="space-y-0.5">
                      <Label>Maximum booking window</Label>
                      <p className="text-xs text-muted-foreground">How far in advance clients can book</p>
                    </div>
                    <Select defaultValue="60">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="space-y-0.5">
                      <Label>Buffer time between appointments</Label>
                      <p className="text-xs text-muted-foreground">Time between consecutive appointments</p>
                    </div>
                    <Select defaultValue="15">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select minutes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0 minutes</SelectItem>
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="10">10 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="email-notifications" defaultChecked />
                    <Label htmlFor="email-notifications">Email notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="sms-notifications" defaultChecked />
                    <Label htmlFor="sms-notifications">SMS notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="reminder-notifications" defaultChecked />
                    <Label htmlFor="reminder-notifications">Send appointment reminders</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


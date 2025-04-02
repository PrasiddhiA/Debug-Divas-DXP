"use client"

import { useState } from "react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DashboardChartsProps {
  revenueData: {
    weekly: Array<{ name: string; revenue: number }>
    monthly: Array<{ name: string; revenue: number }>
    yearly: Array<{ name: string; revenue: number }>
  }
  trafficData: {
    weekly: Array<{ name: string; visitors: number; pageViews: number }>
    monthly: Array<{ name: string; visitors: number; pageViews: number }>
    yearly: Array<{ name: string; visitors: number; pageViews: number }>
  }
}

export function DashboardCharts({ revenueData, trafficData }: DashboardChartsProps) {
  const [revenuePeriod, setRevenuePeriod] = useState<"weekly" | "monthly" | "yearly">("weekly")
  const [trafficPeriod, setTrafficPeriod] = useState<"weekly" | "monthly" | "yearly">("weekly")

  const currentRevenueData = revenueData[revenuePeriod]
  const currentTrafficData = trafficData[trafficPeriod]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Revenue Overview</h3>
          <Select value={revenuePeriod} onValueChange={(value: "weekly" | "monthly" | "yearly") => setRevenuePeriod(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#8884d8" 
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Website Traffic</h3>
          <Select value={trafficPeriod} onValueChange={(value: "weekly" | "monthly" | "yearly") => setTrafficPeriod(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentTrafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visitors" fill="#8884d8" name="Visitors" />
              <Bar dataKey="pageViews" fill="#82ca9d" name="Page Views" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
} 
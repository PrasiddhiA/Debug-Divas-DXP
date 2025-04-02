"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { apiClient } from "@/lib/api"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

declare global {
  interface Window {
    Razorpay: any
  }
}

interface PlanDetails {
  name: string
  price: number
  features: string[]
  description: string
}

const plans: Record<string, PlanDetails> = {
  starter: {
    name: "Starter",
    price: 19,
    description: "Perfect for beginners",
    features: [
      "1 Website",
      "5 Pages",
      "Basic Analytics",
      "Drag-and-Drop Builder",
      "Basic Templates"
    ]
  },
  professional: {
    name: "Professional",
    price: 49,
    description: "For growing businesses",
    features: [
      "3 Websites",
      "Unlimited Pages",
      "Advanced Analytics",
      "E-commerce Features",
      "Premium Templates",
      "Priority Support"
    ]
  },
  enterprise: {
    name: "Enterprise",
    price: 99,
    description: "For large businesses",
    features: [
      "10 Websites",
      "Unlimited Pages",
      "Premium Analytics",
      "Priority Support",
      "Custom Domain",
      "API Access",
      "Dedicated Support"
    ]
  }
}

interface PaymentDetails {
  cardNumber: string
  expiryDate: string
  cvv: string
  name: string
}

interface FieldErrors {
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  name?: string
}

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [plan, setPlan] = useState<PlanDetails | null>(null)
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: ""
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  useEffect(() => {
    const planType = searchParams.get("plan") || "starter"
    setPlan(plans[planType] || plans.starter)
  }, [searchParams])

  const validateCardNumber = (value: string) => {
    // Remove spaces and non-numeric characters
    const cleaned = value.replace(/\D/g, "")
    if (cleaned.length !== 16) {
      return "Card number must be 16 digits"
    }
    return ""
  }

  const validateExpiryDate = (value: string) => {
    // Format: MM/YY
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
    if (!regex.test(value)) {
      return "Invalid format. Use MM/YY"
    }

    const [month, year] = value.split("/")
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear() % 100
    const currentMonth = currentDate.getMonth() + 1

    if (parseInt(year) < currentYear || 
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      return "Card has expired"
    }

    return ""
  }

  const validateCVV = (value: string) => {
    if (!/^\d{3,4}$/.test(value)) {
      return "CVV must be 3 or 4 digits"
    }
    return ""
  }

  const validateName = (value: string) => {
    if (value.length < 2) {
      return "Name must be at least 2 characters"
    }
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      return "Name can only contain letters and spaces"
    }
    return ""
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    setFieldErrors(prev => ({
      ...prev,
      [name]: ""
    }))
  }

  const validatePaymentDetails = () => {
    const errors: FieldErrors = {}
    let isValid = true

    // Validate card number
    const cardNumberError = validateCardNumber(paymentDetails.cardNumber)
    if (cardNumberError) {
      errors.cardNumber = cardNumberError
      isValid = false
    }

    // Validate expiry date
    const expiryDateError = validateExpiryDate(paymentDetails.expiryDate)
    if (expiryDateError) {
      errors.expiryDate = expiryDateError
      isValid = false
    }

    // Validate CVV
    const cvvError = validateCVV(paymentDetails.cvv)
    if (cvvError) {
      errors.cvv = cvvError
      isValid = false
    }

    // Validate name
    const nameError = validateName(paymentDetails.name)
    if (nameError) {
      errors.name = nameError
      isValid = false
    }

    setFieldErrors(errors)
    return isValid
  }

  const handlePayment = async () => {
    if (!plan || !validatePaymentDetails()) {
      toast.error("Please fix the errors before proceeding")
      return
    }

    try {
      setLoading(true)
      setError(null)

      // For testing purposes, we'll simulate a successful payment
      setTimeout(() => {
        setPaymentSuccess(true)
        toast.success("Payment successful! Redirecting to dashboard...")
        
        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)
      }, 1500)

    } catch (error: any) {
      setError(error.message || "Failed to initiate payment")
      setLoading(false)
      toast.error("Failed to initiate payment")
    }
  }

  if (!plan) return null

  if (paymentSuccess) {
    return (
      <div className="container mx-auto py-10">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-green-600">Payment Successful!</CardTitle>
            <CardDescription>Thank you for subscribing to {plan.name} plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Your subscription has been activated successfully.</p>
              <p>Redirecting you to the dashboard...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{plan.name} Plan</CardTitle>
          <CardDescription>{plan.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span>Monthly Plan</span>
              <span className="font-bold">${plan.price}</span>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Cardholder Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter cardholder name"
                  value={paymentDetails.name}
                  onChange={handleInputChange}
                  className={fieldErrors.name ? "border-red-500" : ""}
                  required
                />
                {fieldErrors.name && (
                  <p className="text-sm text-red-500">{fieldErrors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  maxLength={19}
                  className={fieldErrors.cardNumber ? "border-red-500" : ""}
                  required
                />
                {fieldErrors.cardNumber && (
                  <p className="text-sm text-red-500">{fieldErrors.cardNumber}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={handleInputChange}
                    maxLength={5}
                    className={fieldErrors.expiryDate ? "border-red-500" : ""}
                    required
                  />
                  {fieldErrors.expiryDate && (
                    <p className="text-sm text-red-500">{fieldErrors.expiryDate}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    value={paymentDetails.cvv}
                    onChange={handleInputChange}
                    maxLength={4}
                    className={fieldErrors.cvv ? "border-red-500" : ""}
                    required
                  />
                  {fieldErrors.cvv && (
                    <p className="text-sm text-red-500">{fieldErrors.cvv}</p>
                  )}
                </div>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            <Button
              className="w-full"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay Now"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
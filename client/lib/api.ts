import axios from "axios"

// API Response Types
export interface ApiResponse<T = any> {
  data: T
  status: number
  message?: string
}

// API Error Type
export interface ApiError {
  message: string
  status: number
  errors?: Record<string, string[]>
}

// Model Types
export interface User {
  _id: string
  name: string
  email: string
  plan: string | null
  subscriptionId: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
}

// Payment Types
export interface PaymentOrderRequest {
  amount: number
  plan: string
}

export interface PaymentVerification {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

export interface PaymentOrder {
  id: string
  amount: number
  currency: string
  receipt: string
}

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem("token")
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
)

// API Methods
export const apiClient = {
  // Auth methods
  auth: {
    login: async (credentials: LoginCredentials): Promise<ApiResponse<{ success: boolean; token: string; user: User }>> => {
      try {
        const response = await api.post<{ success: boolean; token: string; user: User }>("/auth/login", credentials)
        return {
          data: response.data,
          status: response.status,
        }
      } catch (error: any) {
        throw {
          message: error.response?.data?.message || "Login failed",
          status: error.response?.status || 500,
          errors: error.response?.data?.errors,
        }
      }
    },

    register: async (data: RegisterData): Promise<ApiResponse<{ success: boolean; token: string; user: User }>> => {
      try {
        const response = await api.post<{ success: boolean; token: string; user: User }>("/auth/register", data)
        return {
          data: response.data,
          status: response.status,
        }
      } catch (error: any) {
        throw {
          message: error.response?.data?.message || "Registration failed",
          status: error.response?.status || 500,
          errors: error.response?.data?.errors,
        }
      }
    },
  },

  // Payment methods
  payment: {
    createOrder: async (data: PaymentOrderRequest): Promise<ApiResponse<{ success: boolean; data: PaymentOrder }>> => {
      try {
        const response = await api.post<{ success: boolean; data: PaymentOrder }>("/payment/create-order", data)
        return {
          data: response.data,
          status: response.status,
        }
      } catch (error: any) {
        throw {
          message: error.response?.data?.message || "Failed to create payment order",
          status: error.response?.status || 500,
          errors: error.response?.data?.errors,
        }
      }
    },

    verifyPayment: async (data: PaymentVerification): Promise<ApiResponse<{ success: boolean; message: string; data: any }>> => {
      try {
        const response = await api.post<{ success: boolean; message: string; data: any }>("/payment/verify", data)
        return {
          data: response.data,
          status: response.status,
        }
      } catch (error: any) {
        throw {
          message: error.response?.data?.message || "Payment verification failed",
          status: error.response?.status || 500,
          errors: error.response?.data?.errors,
        }
      }
    },
  },

  // Generic methods for future use
  get: async <T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> => {
    try {
      const response = await api.get<T>(url, { params })
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error: any) {
      throw {
        message: error.response?.data?.message || "An error occurred",
        status: error.response?.status || 500,
        errors: error.response?.data?.errors,
      }
    }
  },

  post: async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await api.post<T>(url, data)
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error: any) {
      throw {
        message: error.response?.data?.message || "An error occurred",
        status: error.response?.status || 500,
        errors: error.response?.data?.errors,
      }
    }
  },

  put: async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await api.put<T>(url, data)
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error: any) {
      throw {
        message: error.response?.data?.message || "An error occurred",
        status: error.response?.status || 500,
        errors: error.response?.data?.errors,
      }
    }
  },

  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await api.delete<T>(url)
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error: any) {
      throw {
        message: error.response?.data?.message || "An error occurred",
        status: error.response?.status || 500,
        errors: error.response?.data?.errors,
      }
    }
  },

  patch: async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await api.patch<T>(url, data)
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error: any) {
      throw {
        message: error.response?.data?.message || "An error occurred",
        status: error.response?.status || 500,
        errors: error.response?.data?.errors,
      }
    }
  },
}

// API Endpoints
export const endpoints = {
  // Auth endpoints
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refreshToken: "/auth/refresh-token",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },

  // User endpoints
  user: {
    profile: "/user/profile",
    updateProfile: "/user/profile",
    changePassword: "/user/change-password",
  },

  // Website endpoints
  website: {
    list: "/websites",
    create: "/websites",
    get: (id: string) => `/websites/${id}`,
    update: (id: string) => `/websites/${id}`,
    delete: (id: string) => `/websites/${id}`,
    publish: (id: string) => `/websites/${id}/publish`,
    unpublish: (id: string) => `/websites/${id}/unpublish`,
  },

  // Product endpoints
  product: {
    list: "/products",
    create: "/products",
    get: (id: string) => `/products/${id}`,
    update: (id: string) => `/products/${id}`,
    delete: (id: string) => `/products/${id}`,
  },

  // Service endpoints
  service: {
    list: "/services",
    create: "/services",
    get: (id: string) => `/services/${id}`,
    update: (id: string) => `/services/${id}`,
    delete: (id: string) => `/services/${id}`,
  },

  // Content generation endpoints
  content: {
    generate: "/content/generate",
    save: "/content/save",
    apply: "/content/apply",
  },
} 
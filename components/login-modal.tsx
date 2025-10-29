"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient" // Import Supabase client
import { useRouter } from 'next/navigation' // Import router for redirection

export function LoginModal() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState<string | null>(null) // State for errors
  const router = useRouter() // Initialize router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors

    try {
      if (isSignUp) {
        // Sign Up Logic
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        })
        if (signUpError) throw signUpError
        // Optional: Show a message like "Check your email to verify!"
        alert("Sign up successful! Please check your email to verify.")
        // Keep them on the login page or redirect to a specific verification page
      } else {
        // Log In Logic
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (signInError) throw signInError
        // On successful login, redirect to dashboard
        router.push('/dashboard')
      }
    } catch (err: any) {
      console.error("Auth error:", err)
      setError(err.message || "An unexpected error occurred.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-foreground text-center">
            {isSignUp ? "Create Your Account" : "Welcome Back"}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-border rounded-md bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={isSignUp ? "new-password" : "current-password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-border rounded-md bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Error Message Display */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg disabled:opacity-50"
          >
            {isLoading ? "Processing..." : (isSignUp ? "Sign Up" : "Log In")}
          </button>
        </form>

        {/* Toggle Sign Up/Log In */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null); // Clear errors when toggling
            }}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {isSignUp ? "Already have an account? Log In" : "Need an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  )
}
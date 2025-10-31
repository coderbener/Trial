"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient" // Import Supabase client
import { useRouter } from 'next/navigation' // Import router for redirection

export default function LoginModal() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState<string | null>(null) // State for errors
  const router = useRouter() // Initialize router

  // src/components/login-modal.tsx

  // ... (keep all your imports and useState hooks) ...

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null) 

    try {
      if (isSignUp) {
        // --- Sign Up Logic ---
        const { error: signUpError } = await supabase.auth.signUp({ email, password })
        if (signUpError) throw signUpError
        alert("Sign up successful! Please check your email to verify.")
        setIsSignUp(false); 
        setIsLoading(false);

      } else {
        // --- Log In Logic ---
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (signInError) throw signInError
        
        // --- THIS IS THE NEW FIX ---
        // Instead of router.push, we force a full-page reload.
        // This guarantees the browser sends the new cookie to the server.
        window.location.href = '/dashboard';
        // --- END OF NEW FIX ---
      }
    } catch (err: any) {
      console.error("Auth error:", err)
      setError(err.message || "An unexpected error occurred.")
      setIsLoading(false) 
    } 
  }

  // ... (keep the rest of your return() code) ...

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
            type="button" // Add type="button" to prevent form submission
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
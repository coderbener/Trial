"use client"

import { LoginModal } from "@/components/login-modal"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <LoginModal />
    </div>
  )
}

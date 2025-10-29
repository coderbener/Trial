"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
<div className="w-8 h-8 flex items-center justify-center">
  <Image
    src="/log.png"      // Path to your logo in the public folder
    alt="BenetS Logo"
    width={18}           // Adjust size as needed
    height={18}
  />
</div>
            <span className="text-xl font-bold text-foreground">BenetS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#programs" className="text-foreground/80 hover:text-foreground transition">
              Programs
            </Link>
            <Link href="#community" className="text-foreground/80 hover:text-foreground transition">
              Community
            </Link>
            <Link href="#about" className="text-foreground/80 hover:text-foreground transition">
              About
            </Link>
          </div>

          {/* Desktop CTA Button */}
<div className="hidden md:block">
  <Link href="/login">
    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
      Join Now
    </Button>
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link href="#programs" className="block text-foreground/80 hover:text-foreground">
              Programs
            </Link>
            <Link href="#community" className="block text-foreground/80 hover:text-foreground">
              Community
            </Link>
            <Link href="#about" className="block text-foreground/80 hover:text-foreground">
              About
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              Join Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

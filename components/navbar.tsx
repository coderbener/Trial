"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react" // Make sure lucide-react is installed
import { Button } from "@/components/ui/button" // Assuming your Button component path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
             {/* Ensure logo path is correct and image is in /public */}
            <Image
              src="/log.png"
              alt="BenetS Logo"
              width={32} // Adjusted size for better proportion
              height={32}
            />
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
            {/* Using Button component from shadcn/ui */}
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* --- Mobile Navigation Menu --- */}
      {/* Conditionally render based on isOpen state */}
      {isOpen && (
        // Container for the dropdown menu
        // Added absolute positioning, background, full width, and shadow for better layering
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-md py-4 px-4 sm:px-6 lg:px-8 space-y-4 z-40"> {/* Applied z-40 */}

          <Link href="#programs" className="block text-foreground/80 hover:text-foreground" onClick={closeMenu}>
            Programs
          </Link>
          <Link href="#community" className="block text-foreground/80 hover:text-foreground" onClick={closeMenu}>
            Community
          </Link>
          <Link href="#about" className="block text-foreground/80 hover:text-foreground" onClick={closeMenu}>
            About
          </Link>

          {/* Mobile CTA Button Link */}
          {/* Added relative z-50 to ensure it's on top within this container */}
          <Link href="/login" className="relative z-50 block" onClick={closeMenu}>
             {/* Use the Button component for consistency */}
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Join Now
            </Button>
          </Link>

        </div>
      )}
    </nav>
  )
}
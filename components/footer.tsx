import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <Image
            src="/log.png"      // Path to your logo in the public folder
            alt="BenetS Logo"
            width={18}           // Adjust size as needed
            height={18}
          />
        </div>
              <span className="text-lg font-bold text-foreground">BenetS</span>
            </div>
            <p className="text-foreground/60 text-sm">
              India's community platform for aspiring cybersecurity professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground transition">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground transition">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-foreground/60 hover:text-primary transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; 2025 BenetS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

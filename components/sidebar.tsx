"use client"

import Link from "next/link"
import { Home, Book, Compass, Award, Briefcase as Certificate, HelpCircle, LogOut } from "lucide-react"
import { useState } from "react"

// interface SidebarProps {
//   userName: string
// }
type SidebarProps = {
  open: boolean
  onToggle: () => void
  userName: string
  userEmail?: string // optional, since it might be undefined
}


export default function Sidebar({ userName }: SidebarProps) {
  const [activeLink, setActiveLink] = useState("dashboard")

  const navLinks = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/" },
    { id: "learning", label: "My Learning", icon: Book, href: "/learning" },
    { id: "explore", label: "Explore Programs", icon: Compass, href: "/explore" },
    { id: "badges", label: "My Badges", icon: Award, href: "/badges" },
    { id: "certificates", label: "My Certificates", icon: Certificate, href: "/certificates" },
    { id: "support", label: "Support", icon: HelpCircle, href: "/support" },
  ]

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col fixed h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold text-lg">B</span>
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">BenetS</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navLinks.map((link) => {
          const Icon = link.icon
          const isActive = activeLink === link.id
          return (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/10"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sidebar-primary-foreground font-bold text-sm">
              {userName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">{userName}</p>
            <p className="text-xs text-sidebar-foreground/60">Cyber Agent</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-sidebar-accent/10 hover:bg-sidebar-accent/20 text-sidebar-foreground transition-colors">
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}

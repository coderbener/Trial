"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import {
  Home,
  Book,
  Compass,
  Award,
  Briefcase as Certificate,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";

type SidebarProps = {
  open: boolean;
  onToggle: () => void;
  userName: string;
  userEmail?: string;
};

export default function Sidebar({ open, onToggle, userName, userEmail }: SidebarProps) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("dashboard");
  const [isConfirmingLogout, setIsConfirmingLogout] = useState(false);

  const navLinks = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard" },
    { id: "learning", label: "My Learning", icon: Book, href: "/learning" },
    { id: "explore", label: "Explore Programs", icon: Compass, href: "/explore" },
    { id: "badges", label: "My Badges", icon: Award, href: "/badges" },
    { id: "certificates", label: "My Certificates", icon: Certificate, href: "/certificates" },
    { id: "support", label: "Support", icon: HelpCircle, href: "/support" },
  ];

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <>
      {/* Sidebar Toggle (mobile) */}
      <button
        className="absolute top-4 left-4 z-50 bg-primary text-white p-2 rounded-md md:hidden"
        onClick={() => {
          setIsConfirmingLogout(false);
          router.refresh();
        }}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.aside
            key="sidebar"
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed z-40 w-64 bg-black border-r border-sidebar-border flex flex-col h-screen shadow-lg"
          >
            {/* Logo */}
            <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
              <Link href="/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold text-white">BenetS</span>
              </Link>
              <button
                onClick={() => router.refresh()}
                className="text-white hover:text-primary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeLink === link.id;
                return (
                  <motion.div
                    key={link.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setActiveLink(link.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* User Info */}
            <div className="p-4 border-t border-sidebar-border space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {userName}
                  </p>
                  <p className="text-xs text-gray-400">{userEmail || "Cyber Agent"}</p>
                </div>
              </div>

              {/* Logout with Confirmation */}
              {!isConfirmingLogout ? (
                <button
                  onClick={() => setIsConfirmingLogout(true)}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-gray-400 text-center">Confirm logout?</p>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={handleSignOut}
                      className="px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsConfirmingLogout(false)}
                      className="px-3 py-1 text-xs bg-gray-700 text-gray-200 rounded-md hover:bg-gray-600"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

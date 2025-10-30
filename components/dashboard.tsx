"use client"; 


import { useState } from "react";
// --- CORRECTED IMPORTS ---

// Named Imports (keep the braces)
import { Sidebar } from "./sidebar";
import { MyLearning } from "./my-learning";
import { ExplorePrograms } from "./explore-programs";
import { MyCertificates } from "./my-certificates";

// Default Imports (remove the braces)
import WelcomeHeader from "./welcome-section"; 
import QuickStats from "./stats-bar";     
import Achievements from "./my-achievements"; 
import Footer from "./footer";                   
// --- END CORRECTED IMPORTS ---
// --- END CORRECTED IMPORTS ---
// --- END CORRECTED IMPORTS ---
// --- END CORRECTED IMPORTS ---

// Define the props this component expects to receive from page.tsx
interface DashboardLayoutProps {
    userName: string;
    userEmail?: string;
}

export default function DashboardLayout({ userName, userEmail }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- Placeholder Data (Components will still need props) ---
  const stats = { xp: 0, level: "Level 1", badgesEarned: 0, totalBadges: 0 };
  const enrolledCourses: any[] = [];
  const availableCourses: any[] = [];
  const badges: any[] = [];
  const certificates: any[] = [];
  // --- End Placeholder Data ---

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        open={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
        userName={userName} 
        userEmail={userEmail} 
      />

      <main className="flex-1 overflow-y-auto">
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
            <WelcomeHeader userName={userName} />
            <QuickStats />
            <MyLearning />
            <Achievements /> {/* Pass props */}
            <ExplorePrograms />
            <MyCertificates /> {/* Pass props */}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
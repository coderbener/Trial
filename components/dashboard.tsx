"use client"; 

import { useState } from "react";
// 1. IMPORT THE ICONS YOU ARE USING
import { Zap, Shield, Award } from "lucide-react";

// Import your components
import  Sidebar  from "./sidebar";
import WelcomeHeader from "./welcome-section"; 
import QuickStats from "./stats-bar";     
import  MyLearning  from "./my-learning"; 
import Achievements from "./my-achievements"; 
import  ExplorePrograms  from "./explore-programs"; 
import Footer from "./footer";                   
import  MyCertificates  from "./my-certificates";

// Define the props this component expects from page.tsx
interface DashboardLayoutProps {
    userName: string;
    userEmail?: string;
}

export default function DashboardLayout({ userName, userEmail }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- Placeholder Data ---
  const placeholderStats = [
    {
      label: "XP Earned",
      value: "2,500",
      icon: Zap, // This will now work
      color: "from-primary to-primary/50",
    },
    {
      label: "Current Rank",
      value: "Level 3: Cyber Cadet",
      icon: Shield, // This will now work
      color: "from-accent to-accent/50",
    },
    {
      label: "Badges Collected",
      value: "5 / 20",
      icon: Award, // This will now work
      color: "from-primary/80 to-accent/80",
    },
  ];
  
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

            {/* 2. FIX: Pass 'placeholderStats' to the 'stats' prop */}
            <QuickStats stats={placeholderStats} /> 
            
            <MyLearning courses={enrolledCourses} />
            <Achievements badges={badges} /> 
            <ExplorePrograms courses={availableCourses} />
            <MyCertificates certificates={certificates} />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
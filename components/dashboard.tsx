"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { WelcomeSection } from "./welcome-section"
import { StatsBar } from "./stats-bar"
import { MyLearning } from "./my-learning"
import { ExplorePrograms } from "./explore-programs"
import { MyAchievements } from "./my-achievements"
import { MyCertificates } from "./my-certificates"

export function Dashboard() {
  const [userName] = useState("Agent")

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar userName={userName} />
      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          <WelcomeSection userName={userName} />
          <StatsBar />
          <MyLearning />
          <ExplorePrograms />
          <MyAchievements />
          <MyCertificates />
        </div>
      </main>
    </div>
  )
}

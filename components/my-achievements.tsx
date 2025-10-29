import { Card } from "@/components/ui/card"

export function MyAchievements() {
  const badges = [
    { id: 1, name: "First Steps", icon: "🎯", earned: true },
    { id: 2, name: "Network Master", icon: "🌐", earned: true },
    { id: 3, name: "Crypto Expert", icon: "🔐", earned: true },
    { id: 4, name: "Threat Hunter", icon: "🎯", earned: true },
    { id: 5, name: "Security Architect", icon: "🏗️", earned: true },
    { id: 6, name: "Incident Commander", icon: "⚡", earned: false },
    { id: 7, name: "Forensics Master", icon: "🔍", earned: false },
    { id: 8, name: "Compliance Expert", icon: "📋", earned: false },
  ]

  return (
    <div className="ml-64">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Your Arsenal: Badges Earned</h2>
        <p className="text-foreground/60 text-sm mt-1">Showcase your cybersecurity achievements</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {badges.map((badge) => (
          <Card
            key={badge.id}
            className={`aspect-square flex flex-col items-center justify-center rounded-lg border transition-all ${
              badge.earned
                ? "bg-gradient-to-br from-accent/20 to-primary/20 border-accent/50 hover:border-accent"
                : "bg-card/30 border-border/30 opacity-50"
            }`}
          >
            <div className="text-4xl mb-2">{badge.icon}</div>
            <p className="text-xs font-medium text-center text-foreground px-2">{badge.name}</p>
            {badge.earned && <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />}
          </Card>
        ))}
      </div>
    </div>
  )
}

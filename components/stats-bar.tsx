import { Zap, Shield, Award } from "lucide-react"

export function StatsBar() {
  const stats = [
    {
      label: "XP Earned",
      value: "2,500",
      icon: Zap,
      color: "from-primary to-primary/50",
    },
    {
      label: "Current Rank",
      value: "Level 3: Cyber Cadet",
      icon: Shield,
      color: "from-accent to-accent/50",
    },
    {
      label: "Badges Collected",
      value: "5 / 20",
      icon: Award,
      color: "from-primary/80 to-accent/80",
    },
  ]

  return (
    <div className="ml-64 grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-lg border border-border/50 backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-foreground/70 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
              </div>
              <Icon className="w-8 h-8 text-foreground/40" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

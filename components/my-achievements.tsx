// src/components/my-achievements.tsx
import { Card } from "@/components/ui/card"

// 1. Define the props interface to expect 'badges'
interface MyAchievementsProps {
  badges: any[];
}

// 2. Accept the 'badges' prop in the function
export default function MyAchievements({ badges }: MyAchievementsProps) {
  
  // 3. REMOVED the hardcoded 'badges' variable.
  //    We now use the 'badges' prop passed from the dashboard.

  return (
    // 4. REMOVED 'ml-64'
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Your Arsenal: Badges Earned</h2>
        <p className="text-foreground/60 text-sm mt-1">Showcase your cybersecurity achievements</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {badges.map((badge) => ( // Use 'badges' prop
          <Card
            key={badge.id}
            className={`aspect-square flex flex-col items-center justify-center rounded-lg border transition-all ${
              badge.earned // Assuming your 'badges' data has an 'earned' property
                ? "bg-gradient-to-br from-accent/20 to-primary/20 border-accent/50 hover:border-accent"
                : "bg-card/30 border-border/30 opacity-50"
            }`}
          >
            <div className="text-4xl mb-2">{badge.icon}</div>
            <p className="text-xs font-medium text-center text-foreground px-2">{badge.name}</p>
            {badge.earned && <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />}
          </Card>
        ))}
        {badges.length === 0 && (
          <p className="text-muted-foreground col-span-full text-center">No badges earned yet.</p>
        )}
      </div>
    </div>
  )
}
// src/components/my-learning.tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// 1. Define the props interface to expect 'courses'
interface MyLearningProps {
  courses: any[]; // Expects an array named 'courses'
}

// 2. Accept the 'courses' prop in the function
export default function MyLearning({ courses }: MyLearningProps) {
  
  // 3. REMOVED the hardcoded 'programs' variable. We now use the 'courses' prop.

  return (
    // 4. REMOVED 'ml-64' - this will be handled by the main layout
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Active Missions: Your Enrolled Programs</h2>
        <p className="text-foreground/60 text-sm mt-1">Continue your current learning paths</p>
      </div>

      {courses.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((program) => ( // Use 'courses' prop
            <Card
              key={program.id}
              className="bg-card border-border/50 overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{program.title}</h3>
                  <p className="text-sm text-foreground/60 mt-1">
                    Week {program.week} of {program.totalWeeks} • {program.progress}% Complete
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-full bg-card/50 rounded-full h-2 overflow-hidden border border-border/30">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent/50 transition-all"
                      style={{ width: `${program.progress}%` }}
                    />
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Continue Learning
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-card border-border/50 p-8 text-center">
          <p className="text-foreground/60">No active missions yet! Explore programs below to start your journey.</p>
        </Card>
      )}
    </div>
  )
}
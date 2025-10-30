// src/components/explore-programs.tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// 1. Define the props interface to expect 'courses'
interface ExploreProgramsProps {
  courses: any[];
}

// 2. Accept the 'courses' prop in the function
export default function ExplorePrograms({ courses }: ExploreProgramsProps) {

  // 3. REMOVED the hardcoded 'programs' variable. We now use the 'courses' prop.

  return (
    // 4. REMOVED 'ml-64'
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">New Missions Available: Explore Programs</h2>
        <p className="text-foreground/60 text-sm mt-1">Discover new learning opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((program) => ( // Use 'courses' prop
          <Card
            key={program.id}
            className="bg-card border-border/50 overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <img
                src={program.image || "/placeholder.svg"}
                alt={program.title}
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col">
              <div>
                <h3 className="text-lg font-bold text-foreground">{program.title}</h3>
                <p className="text-sm text-foreground/60 mt-2 line-clamp-2">{program.description}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  {program.duration}
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  {program.level}
                </Badge>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                View Details & Enroll
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
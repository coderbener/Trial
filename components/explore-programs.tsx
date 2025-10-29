import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExplorePrograms() {
  const programs = [
    {
      id: 1,
      title: "Ethical Hacking Fundamentals",
      description: "Learn the basics of ethical hacking and penetration testing",
      duration: "6 Weeks",
      level: "Beginner",
      image: "/ethical-hacking-course.jpg",
    },
    {
      id: 2,
      title: "Network Security Essentials",
      description: "Master network protocols and security implementations",
      duration: "8 Weeks",
      level: "Intermediate",
      image: "/network-security-concept.png",
    },
    {
      id: 3,
      title: "Incident Response & Forensics",
      description: "Respond to security incidents and conduct digital forensics",
      duration: "10 Weeks",
      level: "Advanced",
      image: "/incident-response.jpg",
    },
  ]

  return (
    <div className="ml-64">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">New Missions Available: Explore Programs</h2>
        <p className="text-foreground/60 text-sm mt-1">Discover new learning opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
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

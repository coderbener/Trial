import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

const programs = [
  {
    title: "Virtual Internship: SOC Analyst",
    description: "Learn to monitor and respond to security incidents in a real-world SOC environment.",
    duration: "2 Weeks",
    image: "🔍",
  },
  {
    title: "Ethical Hacking Fundamentals",
    description: "Master penetration testing techniques and vulnerability assessment methodologies.",
    duration: "2 Weeks",
    image: "🎯",
  },
  {
    title: "Cloud Security Essentials",
    description: "Secure cloud infrastructure and understand cloud-native security best practices.",
    duration: "2 Weeks",
    image: "☁️",
  },
]

export default function FeaturedPrograms() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50" id="programs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Flagship Programs
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Industry-designed learning paths to accelerate your career
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors group"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {program.image}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                <p className="text-foreground/60 text-sm">{program.description}</p>

                {/* Duration tag */}
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Clock size={16} />
                  <span>{program.duration}</span>
                </div>

                {/* Learn More button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg mt-4">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { GraduationCap, AlertCircle, Users } from "lucide-react"

const reasons = [
  {
    icon: GraduationCap,
    title: "Outdated Curriculum",
    description: "Traditional education doesn't keep pace with industry demands",
  },
  {
    icon: AlertCircle,
    title: "No Practical Experience",
    description: "Theory alone won't land you a job in cybersecurity",
  },
  {
    icon: Users,
    title: "Lack of Industry Network",
    description: "Missing connections to professionals and opportunities",
  },
]

export default function WhyBenetS() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Why BenetS?</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We solve the real problems aspiring cybersecurity professionals face
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-foreground/60">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

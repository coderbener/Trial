import { BookOpen, Code2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Choose Your Path",
    description: "Enroll in a virtual internship or a specialized learning path designed by industry experts.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Build Real Projects",
    description: "Get your hands dirty with practical labs and a capstone project that you can add to your portfolio.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch Your Career",
    description: "Use your new portfolio and certificate to land interviews and start your career in cybersecurity.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Three simple steps to transform your cybersecurity career
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="relative z-10 bg-background border border-border rounded-xl p-8">
                  <div className="text-5xl font-bold text-primary/30 mb-4">{step.number}</div>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground/60">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

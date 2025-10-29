import { Linkedin } from "lucide-react"

const testimonials = [
  {
    name: "Priya S.",
    quote:
      "BenetS transformed my career. The hands-on labs and industry mentorship gave me the confidence to land my first SOC analyst role.",
    initials: "PS",
  },
  {
    name: "Arjun M.",
    quote:
      "The community aspect of BenetS is incredible. I've made connections with professionals who helped me navigate the cybersecurity landscape.",
    initials: "AM",
  },
  {
    name: "Neha K.",
    quote:
      "From zero practical experience to a certified ethical hacker. BenetS made it possible with their structured learning paths.",
    initials: "NK",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by Aspiring Professionals
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">See what our community members have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-8">
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <Linkedin size={16} className="text-primary mt-1" />
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground/70 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

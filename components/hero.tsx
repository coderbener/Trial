"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Go from Classroom Theory to a Career in Cybersecurity.
            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed text-balance">
              BenetS is India's community platform for aspiring professionals, offering hands-on virtual internships,
              real-world labs, and a direct path to the industry.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
<a href="#programs">
  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold flex items-center gap-2">
    Explore Internships
    <ArrowRight size={18} />
  </Button>
</a>
<a href="https://discord.gg/WcHKmASKEA" target="_blank" rel="noopener noreferrer">
  <Button
    variant="outline"
    className="border-primary/50 text-foreground hover:bg-primary/10 rounded-full px-8 py-6 text-base font-semibold bg-transparent"
  >
    Join our Discord
  </Button>
</a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <p className="text-foreground/60 text-sm">Digital Security Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

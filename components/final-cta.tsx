import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-background to-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
          Ready to Build Your Cybersecurity Career?
        </h2>

        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Join thousands of aspiring professionals who are transforming their careers with BenetS
        </p>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg font-semibold">
          Start Learning Today
        </Button>
      </div>
    </section>
  )
}

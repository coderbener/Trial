import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import WhyBenetS from "@/components/why-benets"
import HowItWorks from "@/components/how-it-works"
import FeaturedPrograms from "@/components/featured-programs"
import Testimonials from "@/components/testimonials"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyBenetS />
      <HowItWorks />
      <FeaturedPrograms />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}

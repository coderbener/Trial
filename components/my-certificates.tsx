import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"

export function MyCertificates() {
  const certificates = [
    {
      id: 1,
      title: "Certificate: SOC Analyst Virtual Internship",
      dateAwarded: "October 15, 2024",
    },
  ]

  return (
    <div className="ml-64">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Mission Complete: Certificates Awarded</h2>
        <p className="text-foreground/60 text-sm mt-1">Your official credentials</p>
      </div>

      {certificates.length > 0 ? (
        <div className="space-y-4">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="bg-card border-border/50 p-6 flex items-center justify-between hover:border-primary/50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                <p className="text-sm text-foreground/60 mt-1">Awarded on {cert.dateAwarded}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-card border-border/50 p-8 text-center">
          <p className="text-foreground/60">Complete a program to earn your first certificate!</p>
        </Card>
      )}
    </div>
  )
}

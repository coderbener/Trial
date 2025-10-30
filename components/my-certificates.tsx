// src/components/my-certificates.tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"

// 1. Define the props interface to expect 'certificates'
interface MyCertificatesProps {
  certificates: any[];
}

// 2. Accept the 'certificates' prop in the function
export default function MyCertificates({ certificates }: MyCertificatesProps) {
  
  // 3. REMOVED the hardcoded 'certificates' variable.
  //    We now use the 'certificates' prop passed from the dashboard.

  return (
    // 4. REMOVED 'ml-64' - this will be handled by the main layout
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Mission Complete: Certificates Awarded</h2>
        <p className="text-foreground/60 text-sm mt-1">Your official credentials</p>
      </div>

      {certificates.length > 0 ? (
        <div className="space-y-4">
          {certificates.map((cert) => ( // Use 'certificates' prop
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
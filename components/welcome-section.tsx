interface WelcomeSectionProps {
  userName: string
}

export default function WelcomeSection({ userName }: WelcomeSectionProps) {
  return (
    <div className="ml-64">
      <h1 className="text-4xl font-bold text-balance">
        Welcome back, <span className="text-primary">{userName}</span>! Ready for your next mission?
      </h1>
      <p className="text-foreground/60 mt-2">Continue your cybersecurity journey and unlock new skills</p>
    </div>
  )
}

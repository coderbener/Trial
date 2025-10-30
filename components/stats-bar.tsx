// src/components/stats-bar.tsx
import { Zap, Shield, Award, LucideIcon } from "lucide-react";

// 1. Define the types for the props we will receive
interface StatItem {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}

interface QuickStatsProps {
  stats: /*StatItem[];*/any;
}

// 2. Change function name to QuickStats and accept the 'stats' prop
export default function QuickStats({ stats }: QuickStatsProps) {
  
  // 3. We have REMOVED the hardcoded 'stats' variable here.
  //    The 'stats' variable now comes from the props.

  return (
    // Note: 'ml-64' might be part of your old layout, you may need to remove it
    <div className="ml-64 grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-lg border border-border/50 backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-foreground/70 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
              </div>
              <Icon className="w-8 h-8 text-foreground/40" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
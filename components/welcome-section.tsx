// interface WelcomeSectionProps {
//   userName: string
// }

// export default function WelcomeSection({ userName }: WelcomeSectionProps) {
//   return (
//     <div className="ml-64">
//       <h1 className="text-4xl font-bold text-balance">
//         Welcome back, <span className="text-primary">{userName}</span>! Ready for your next mission?
//       </h1>
//       <p className="text-foreground/60 mt-2">Continue your cybersecurity journey and unlock new skills</p>
//     </div>
//   )
// }
"use client";

import { supabase } from "lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function WelcomeHeader({ userName }: { userName: string }) {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Welcome back, {userName} 👋</h1>
      <button
        onClick={handleSignOut}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}

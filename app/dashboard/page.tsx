// // src/app/dashboard/page.tsx

// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
// // 1. Import your dashboard layout component (using relative path)
// import DashboardLayout from '../../components/dashboard'; 

// export default async function DashboardPage() {
//   const cookieStore = cookies();
//   const supabase = createServerComponentClient({ cookies: () => cookieStore });

//   // 2. Get the user session
//   const { data: { session } } = await supabase.auth.getSession();

//   // 3. If no user, redirect to login
//   if (!session) {
//     redirect('/login');
//   }

//   // 4. Get the user's name
//   const userName = session.user?.user_metadata?.full_name || session.user?.email || "Agent";
//   const userEmail = session.user?.email;

//   // 5. Render your layout and pass the name down as a prop
//   return (
//     <DashboardLayout 
//       userName={userName} 
//       userEmail={userEmail} 
//     />
//   );
// }
// export const dynamic = 'force-dynamic';
// "use client";

// import { useEffect, useState } from "react";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useRouter } from "next/navigation";
// import DashboardLayout from "../../components/dashboard";

// export default function DashboardPage() {
//   const router = useRouter();
//   const supabase = createClientComponentClient();
//   const [session, setSession] = useState<any>(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data }) => {
//       setSession(data.session);
//       if (!data.session) router.push("/login");
//     });
//   }, []);

//   if (!session) return <p>Loading...</p>;

//   const userName = session.user?.user_metadata?.full_name || session.user?.email || "Agent";
//   const userEmail = session.user?.email;

//   return <DashboardLayout userName={userName} userEmail={userEmail} />;
// }
// src/app/dashboard/page.tsx







// "use client";

// export const dynamic = 'force-dynamic'; // <-- THIS IS THE FIX

// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
// import DashboardLayout from '../../components/dashboard'; 

// export default async function DashboardPage() {
//   const cookieStore = cookies();
//   const supabase = createServerComponentClient({ cookies: () => cookieStore });

//   // Get the user session
//   const { data: { session } } = await supabase.auth.getSession();

//   // If no user, redirect to login
//   if (!session) {
//     redirect('/login');
//   }

//   // Get the user's name
//   const userName = session.user?.user_metadata?.full_name || session.user?.email || "Agent";
//   const userEmail = session.user?.email;

//   // Render your layout and pass the name down as a prop
//   return (
//     <DashboardLayout 
//       userName={userName} 
//       userEmail={userEmail} 
//     />
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabaseClient";
// import { useRouter } from "next/navigation";

// export default function DashboardPage() {
//   const [user, setUser] = useState<any>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const getSession = async () => {
//       const { data, error } = await supabase.auth.getSession();
//       if (error) {
//         console.error("Session fetch error:", error.message);
//         router.push("/login");
//         return;
//       }

//       if (!data.session) {
//         router.push("/login");
//         return;
//       }

//       setUser(data.session.user);
//     };

//     getSession();
//   }, [router]);

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-screen text-lg">
//         Loading your dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
//       <p className="mt-2 text-gray-600">You are now logged in 🎉</p>
//     </div>
//   );
// }

//   "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabaseClient";
// import { useRouter } from "next/navigation";
// import Dashboard from "@/components/dashboard"; // 👈 your main dashboard layout

// export default function DashboardPage() {
//   const [user, setUser] = useState<any>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const getSession = async () => {
//       const { data, error } = await supabase.auth.getSession();
//       if (error) {
//         console.error("Session fetch error:", error.message);
//         router.push("/login");
//         return;
//       }

//       if (!data.session) {
//         router.push("/login");
//         return;
//       }

//       setUser(data.session.user);
//     };

//     getSession();
//   }, [router]);

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-screen text-lg">
//         Loading your dashboard...
//       </div>
//     );
//   }

//   // ✅ Once logged in, render your dashboard component
//   return <Dashboard user={user} />;
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "lib/supabaseClient";
import DashboardLayout from "@/components/dashboard";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch current user
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.push("/login"); // redirect if not logged in
      } else {
        setUser(user);
      }
      setLoading(false);
    };

    getUser();
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading dashboard...
      </div>
    );
  }

  if (!user) return null;

  // ✅ Pass props correctly to DashboardLayout
  return (
    <DashboardLayout
      userName={user.user_metadata?.full_name || "User"}
      userEmail={user.email}
    />
  );
}

// src/app/dashboard/page.tsx

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// 1. Import your dashboard layout component (using relative path)
import DashboardLayout from '../../components/dashboard'; 

export default async function DashboardPage() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  // 2. Get the user session
  const { data: { session } } = await supabase.auth.getSession();

  // 3. If no user, redirect to login
  if (!session) {
    redirect('/login');
  }

  // 4. Get the user's name
  const userName = session.user?.user_metadata?.full_name || session.user?.email || "Agent";
  const userEmail = session.user?.email;

  // 5. Render your layout and pass the name down as a prop
  return (
    <DashboardLayout 
      userName={userName} 
      userEmail={userEmail} 
    />
  );
}
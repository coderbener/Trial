// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter" // <-- Import Adapter
import { PrismaClient } from "@prisma/client"       // <-- Import Prisma Client

console.log("SERVER: NextAuth.js API route file is loaded (with Prisma Adapter).");

const prisma = new PrismaClient() // <-- Initialize Prisma Client

const handler = NextAuth({
  adapter: PrismaAdapter(prisma), // <-- USE THE ADAPTER
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Email provider can be added back here later if needed
  ],
  pages: {
    signIn: '/login',
  }
  // Optional: Add session strategy if needed, usually defaults work fine
  // session: {
  //   strategy: "jwt",
  // },
})

export { handler as GET, handler as POST }
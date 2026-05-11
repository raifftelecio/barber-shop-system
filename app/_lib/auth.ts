import { PrismaAdapter } from "@auth/prisma-adapter"
import { AuthOptions, DefaultSession } from "next-auth"
import { db } from "./prisma"
import { Adapter } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string
    }
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (!session.user) return session

      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      }
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
}

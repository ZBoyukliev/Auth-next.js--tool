import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { UserRole } from "@prisma/client";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ token, session, user }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      };

      if(token.role && session.user) {
        session.user.role = token.role as UserRole; //same as: "as "ADMIN" | "USER"
      }

      return session
    },
    async jwt({ token }) {

      if(!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if(!existingUser) return token;
      token.role = existingUser.role;
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
})
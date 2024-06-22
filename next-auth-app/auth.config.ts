import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db"
;
 const config = {
    providers: [GitHub],
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
} satisfies NextAuthConfig;


export const {
    auth,
    handlers,
    signIn,
    signOut
} = NextAuth(config)
import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const config = { providers: [GitHub] } satisfies NextAuthConfig;

export const { auth, handlers, signIn, signOut } = NextAuth(config)
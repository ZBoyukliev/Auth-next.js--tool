import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendetUser = DefaultSession["user"] & {
    role: "ADMIN" | "USER";
    isTwoFactorEnabled: boolean;
}

declare module "next-auth" {

    interface Session {
        user: ExtendetUser;
    }
}
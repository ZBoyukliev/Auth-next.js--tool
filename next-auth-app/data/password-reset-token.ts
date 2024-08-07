import { db } from "@/lib/db";

export const getResetTokenByToken = async (token: string) => {
    try {
        const passwordResetToken = db.passwordResetToken.findUnique({
            where: { token }
        });

        return passwordResetToken;
    } catch {
        return null;
    }
};

export const getResetTokenByEmail = async (email: string) => {
    try {
        const passwordResetToken = db.passwordResetToken.findFirst({
            where: { email }
        });

        return passwordResetToken;
    } catch {
        return null;
    }
};
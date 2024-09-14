"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "../form-error";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRow: UserRole;
}

export const RoleGate = ({ children, allowedRow }: RoleGateProps) => {
    const role = useCurrentRole();

    if (role !== allowedRow) {
        return (
            <FormError message="You do not have permission to view this content!" />
        )
    }

    return (
        <>
            {children}
        </>
    )
}

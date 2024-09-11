"use client";

import { signOut } from "next-auth/react";

interface LogoutProps {
    children?: React.ReactNode;
}

export const LogoutButton = ({children}: LogoutProps) => {
    const onClick = () => {
        signOut();
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}
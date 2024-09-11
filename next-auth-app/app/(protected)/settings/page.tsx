"use client"

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

const SettingsPage = () => {

    const user = useCurrentUser();

    const onClick = () => {
        signOut();
    }

    return (
        <>
            <div className="bg-white p-10 rounded-xl">{JSON.stringify(user)}
                <Button type="submit" onClick={onClick}>
                    Signout
                </Button>
            </div>
        </>
    )
};

export default SettingsPage;
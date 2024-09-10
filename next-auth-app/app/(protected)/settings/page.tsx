"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const SettingsPage =  () => {
    const session = useSession();
    return (
        <>
            <div>{JSON.stringify(session)}</div>
            <form>
                <Button type="submit">
                    Signout
                </Button>
            </form>

        </>
    )
};

export default SettingsPage;
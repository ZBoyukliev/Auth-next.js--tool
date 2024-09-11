"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {

    const pathName = usePathname();

    return (
        <nav className="bg-secondary flex justify-between p-4 items-center rounded-xl w-[600px] shadow-sm">
            <div className="flex gap-x-2">
                <Button asChild>
                    <Link href="/settings">Settings</Link>
                </Button>
            </div>
            <p>User button</p>
        </nav>
    )
}
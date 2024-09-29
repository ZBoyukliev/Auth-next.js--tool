import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = async({ children }: ProtectedLayoutProps) => {
    const session = await auth();
    return (
        <SessionProvider session={session}>
            <div className="min-h-screen p-14 w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
                <Navbar/>
                {children}
            </div>
        </SessionProvider>
    )
}

export default ProtectedLayout;
"use client"

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({ children, mode="redirect", asChild }: LoginButtonProps) => {
    const onClick = () => {
        console.log("Login button clicked");
        
    }

    if (mode == 'modal') {
        return(
            <span>TODO: Implement modal</span>
        )
    }
    return (
        <span onClick={onClick} className="cursor-pointer block">
            {children}
        </span>
    )
}
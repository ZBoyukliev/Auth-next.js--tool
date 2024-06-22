import { auth } from "@/auth.config"

export default auth((req) => {
    // req.auth
    const isLoGgedIn = !!req.auth
    console.log("Rote:", req.nextUrl.pathname);
    console.log("IsLOggedIn?:", isLoGgedIn)
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
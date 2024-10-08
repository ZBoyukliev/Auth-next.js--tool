import { auth } from "@/auth";

import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes
} from "@/routes";

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRouth = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRouth) return undefined;

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }

        return undefined
    };

    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;

        if(nextUrl.search) {
            callbackUrl += nextUrl.search
        }

        const encodedCallbackUrl = encodeURIComponent(callbackUrl)

        return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl))
    }

    return undefined;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
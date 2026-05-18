import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// routes that don't require login
const publicRoutes = ["/sign-in", "/auth/callback"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // allow public routes through
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // check for SuperTokens session cookie
  const sessionToken =
    request.cookies.get("sAccessToken") || request.cookies.get("sFrontToken");

  if (!sessionToken) {
    // no session → redirect to sign-in
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

// which routes this middleware applies to
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
};

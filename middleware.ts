import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/profile", "/settings", "/"];

const authRoutes = ["/login", "/register"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (token) {
      const homeUrl = new URL("/", req.url);
      return NextResponse.redirect(homeUrl);
    }
    return NextResponse.next();
  }

  // if (protectedRoutes.some((route) => pathname.startsWith(route))) {
  //   if (!token) {
  //     const loginUrl = new URL("/login", req.url);
  //     return NextResponse.redirect(loginUrl);
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/login",
    "/"
  ],
};

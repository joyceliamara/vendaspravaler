import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyJWT } from "./lib/jwt"

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define which paths are protected (require authentication)
  const isProtected =
    path.startsWith("/admin") && !path.startsWith("/admin/login") && !path.startsWith("/admin/register")

  // If the path is protected, check for authentication
  if (isProtected) {
    const token = request.cookies.get("auth-token")?.value

    if (!token) {
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("callbackUrl", encodeURI(request.url))
      return NextResponse.redirect(url)
    }

    const payload = verifyJWT(token)
    if (!payload) {
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("callbackUrl", encodeURI(request.url))
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

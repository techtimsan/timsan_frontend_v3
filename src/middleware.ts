import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// export const config = {
//   matcher: '/admin/:path*',
// }

export async function middleware(request: NextRequest) {
  // Check if the path is already '/admin/login'
  // if (request.nextUrl.pathname === '/admin/login') {
  //   // If it's already the login page, allow the request to proceed
  //   return NextResponse.next()
  // }

  // Redirect to the login page for other paths under '/admin'
  // const redirectUrl = new URL('http://localhost:3000/dashboard/login')
  // return NextResponse.redirect(redirectUrl)
}

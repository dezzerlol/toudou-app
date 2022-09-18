import { NextRequest, NextResponse } from 'next/server'
import { verify } from './services/verifyJwt'

export default async function hanlder(req: NextRequest) {
  const { pathname } = req.nextUrl
  const jwt = req.cookies.get('AUTH_TOKEN')
  const url = req.url

  if(pathname === '/login' || pathname === '/signup') {
    if(jwt){
      req.nextUrl.pathname = '/'
      return NextResponse.redirect(req.nextUrl)
    }
  }

  if (jwt === undefined) {
    req.nextUrl.pathname = '/login'
    return NextResponse.redirect(req.nextUrl)
  }

  try {
    const isValid = await verify(jwt)
    return NextResponse.next()
  } catch (error) {
    req.nextUrl.pathname = '/login'
    return NextResponse.redirect(req.nextUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/folder/:id*', '/'],
}

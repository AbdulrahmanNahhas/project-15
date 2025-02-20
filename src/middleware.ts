import { supabaseMiddleware } from '@/supabase/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
import { DEFAULT_LOGIN_REDIRECT, LOGIN_ROUTE, privateRoutes, authRoutes } from './routes';
import { getUser } from './lib/auth';

export async function middleware(request: NextRequest) {
  try {
    // Create client and get session
    const { response, session } = await supabaseMiddleware(request);
    const userData = await getUser();

    // Unauthenticated users
    if (!session) {
      // Redirect unauthenticated users from private routes
      if (privateRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL(LOGIN_ROUTE, request.url));
      }
      return response;
    }

    // Redirect to onboarding if not completed
    if (!userData?.is_onboarded && request.nextUrl.pathname !== "/onboarding") {
      return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    // Prevent access to onboarding if already completed
    if (userData?.is_onboarded && request.nextUrl.pathname === "/onboarding") {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
    }

    // Auth routes (login, register) - redirect to dashboard if already logged in
    if (authRoutes.includes(request.nextUrl.pathname)) {
      if (session) {
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
      }
    }

    return response;
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // Skip Next-js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css||js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
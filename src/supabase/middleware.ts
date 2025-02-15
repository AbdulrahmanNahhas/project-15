import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

// This middleware creates a Supabase client specifically for handling server-side authentication in Next.js middleware
// It manages cookie-based session handling between the client and server
export const supabaseMiddleware = async (request: NextRequest) => {
  // Create an initial response to modify with auth cookies
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Initialize Supabase client with cookie handling for middleware context
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Get all cookies from the request
        getAll() {
          return request.cookies.getAll()
        },
        // Set cookies both on the request and response
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            // Add type safety for cookie options
            request.cookies.set({
              name,
              value,
              ...options
            });
            response.cookies.set({
              name,
              value,
              ...options
            });
          });
          response = NextResponse.next({
            request,
          });
        },
      },
    },
  );

  // Get the user's session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response, user };
};

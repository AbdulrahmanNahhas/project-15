/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const privateRoutes: string[] = [
  "/home",
  "/onboarding",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /home
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/login",
  "/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password"
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const API_AUTH_PREFIX: string = "/api/auth";
export const LOGIN_ROUTE: string = "/login";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/home";
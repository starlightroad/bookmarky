import type { NextAuthConfig } from "next-auth";
import { validateUserEmail } from "@/app/lib/validators";

export const authConfig = {
  basePath: "/auth",
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      const isOnSignIn = request.nextUrl.pathname.startsWith("/auth/login");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL("/auth/login", request.nextUrl));
      } else if (isOnSignIn) {
        if (isLoggedIn) {
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
      }
      return true;
    },
    async signIn({ user, email, account, profile }) {
      if (user.email) {
        const isEmailValid = await validateUserEmail(user.email);

        if (isEmailValid) {
          return true;
        }
      }

      return false;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

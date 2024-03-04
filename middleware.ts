import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// This is needed because Prisma does not support the Edge yet.
export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

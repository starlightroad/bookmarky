import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import EmailProvider from "next-auth/providers/nodemailer";
import nodemailer from "nodemailer";
import { authConfig } from "@/auth.config";
import prisma from "@/app/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,

      async sendVerificationRequest(params) {
        try {
          const transport = nodemailer.createTransport(params.provider.server);
          await transport.sendMail({
            to: params.identifier,
            from: params.provider.from,
            subject: "Sign in to Bookmarky",
            text: `To continue to sign in process, follow the link below.\n${params.url}`,
            html: `
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="left" style="padding: 2px 0px 2px 0px; font-size: 14px; font-family: Helvetica, Arial, sans-serif;">
                    To continue signing in as ${params.identifier}, follow the link below. The link will expire in 24 hours.
                  </td>
                  </tr>
                <tr>
                  <td align="left" style="padding: 2px 0px 2px 0px; font-size: 14px; font-family: Helvetica, Arial, sans-serif;">
                    <a href="${params.url}">Sign in to Bookmarky</a>
                  </td>
                </tr>
                <tr>
                  <td align="left" style="padding: 10px 0px 2px 0px; font-size: 12px; font-family: Helvetica, Arial, sans-serif;">
                    If you did not request this email, you can safely ignore it.
                  </td>
                </tr>
              </table>
          `,
          });
        } catch (error) {
          console.error("Email Error:", error);
          throw new Error("Failed to send the verification token.");
        }
      },
    }),
  ],
});

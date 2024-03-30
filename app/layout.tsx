import type { Metadata } from "next";
import "@/app/ui/globals.css";
import inter from "@/app/ui/fonts";
import { Toaster } from "@/app/ui/toaster";
import { Providers } from "./lib/providers";

export const metadata: Metadata = {
  title: {
    template: "%s | Bookmarky",
    default: "Bookmarky",
  },
  description:
    "Your bookmarks stored in the cloud for easy access on all of your devices.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} h-full w-full antialiased`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

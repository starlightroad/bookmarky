import type { Metadata } from "next";
import "@/app/ui/globals.css";
import inter from "@/app/ui/fonts";

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
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

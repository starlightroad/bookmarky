import type { Metadata } from "next";
import "@/app/ui/globals.css";
import inter from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Bookmarky",
  },
  description:
    "Your bookmarks stored in the cloud for easy access on all of your devices.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

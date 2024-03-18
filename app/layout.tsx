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
    <html lang="en" className="fixed h-full w-full overflow-hidden">
      <body
        className={`${inter.className} fixed h-full w-full overflow-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { TypographyMuted } from "@/app/ui/typography";

export const metadata: Metadata = {
  title: "Error",
};

type ErrorProps = {
  searchParams: {
    error: string;
  };
};

export default function Error({ searchParams }: ErrorProps) {
  const data = {
    title: "Error",
    message: "Something went wrong.",
  };

  if (searchParams.error.startsWith("Verification")) {
    data.title = "Unable to sign in";
    data.message = "The sign in link is no longer valid.";
  }

  return (
    <main>
      <header className="mb-3 flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{data.title}</h1>
        <TypographyMuted>{data.message}</TypographyMuted>
      </header>
      <Button className="w-full" size="sm" asChild>
        <Link href="/auth/login">Sign in</Link>
      </Button>
    </main>
  );
}

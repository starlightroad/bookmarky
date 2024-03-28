"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { AtSign } from "lucide-react";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import { authenticate } from "@/app/lib/actions/auth";
import { TypographyMuted } from "@/app/ui/typography";

export default function LoginForm() {
  const [form, dispatch] = useFormState(authenticate, undefined);

  if (form?.email) {
    return (
      <div className="flex flex-col">
        <header className="mb-3 flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Check your email
          </h1>
          <TypographyMuted>
            A verification link was sent to <strong>{form?.email}</strong>
          </TypographyMuted>
        </header>
        <Button variant="link" asChild>
          <Link href="/">Go to home</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <header className="mb-6 flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to Bookmarky
        </h1>
        <TypographyMuted>Enter your email to continue</TypographyMuted>
      </header>
      <form action={dispatch}>
        <div className="mb-3">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Input
              className="peer h-9 pl-[38px]"
              id="email"
              type="text"
              name="email"
              placeholder="name@vercel.com"
              autoComplete="off"
            />
            <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-muted-foreground peer-focus:text-gray-900" />
          </div>
        </div>

        {form?.errorMessage && (
          <div className="mb-3 rounded-md bg-red-50 px-3 py-2">
            <p className="text-sm text-red-500">{form.errorMessage}</p>
          </div>
        )}

        <LoginButton />
      </form>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" size="sm" type="submit" disabled={pending}>
      Continue
    </Button>
  );
}

import type { Metadata } from "next";
import LoginForm from "@/app/ui/login-form";
import { Button } from "@/app/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main>
      <LoginForm />
      <div className="mt-3 flex justify-center">
        <Button variant="link" asChild>
          <Link href="/">← Back to home</Link>
        </Button>
      </div>
    </main>
  );
}

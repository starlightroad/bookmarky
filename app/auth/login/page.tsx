import type { Metadata } from "next";
import LoginForm from "@/app/ui/login-form";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}

"use server";

import { z } from "zod";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";

type State = { errorMessage?: string; email?: string } | undefined;

export const authenticate = async (prevState: State, formData: FormData) => {
  const state: typeof prevState = {};
  const signInFormSchema = z.object({
    email: z.string().email(),
  });
  const parsed = signInFormSchema.safeParse({ email: formData.get("email") });

  try {
    if (!parsed.success) {
      throw new Error("Invalid email.");
    }

    await signIn("nodemailer", {
      email: parsed.data.email,
      redirect: false,
      redirectTo: "/dashboard",
    });

    return {
      ...state,
      email: parsed.data.email,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          state.errorMessage = "Invalid credentials.";
        case "AuthorizedCallbackError":
          state.errorMessage = "Authorization failed.";
        default:
          state.errorMessage = "Something went wrong.";
      }
    } else {
      state.errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";
    }
    return state;
  }
};

export const signOutUser = async () => {
  await signOut();
};

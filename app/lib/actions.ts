"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/auth";
import type { CategoryForm } from "@/app/lib/types";

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

const FormSchema = z.object({
  id: z.string().trim(),
  name: z.string().trim().min(2, "A minimum of two characters is required."),
  email: z.string().email().trim(),
  location: z.string().url().trim(),
});

const CreateCategory = FormSchema.omit({
  id: true,
  email: true,
  location: true,
  categoryId: true,
});

export const createCategory = async (
  userId: string | undefined,
  prevState: CategoryForm,
  formData: FormData,
) => {
  const parsed = CreateCategory.safeParse({
    name: formData.get("name"),
  });

  if (!userId) {
    return {
      message: "Failed to create category.",
    };
  }

  if (!parsed.success) {
    return {
      message: "Failed to create category.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const categoryExists = !!(await prisma?.category.findFirst({
    where: {
      userId,
      name: {
        equals: parsed.data.name,
        mode: "insensitive",
      },
    },
  }));

  if (categoryExists) {
    return {
      message: "Category already exists.",
    };
  }

  const date = new Date().toISOString();

  try {
    await prisma?.category.create({
      data: {
        name: parsed.data.name,
        userId,
        createdAt: date,
        updatedAt: date,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Category.",
    };
  }

  revalidatePath("/dashboard/categories");
  redirect("/dashboard/categories");
};

const UpdateCategory = FormSchema.omit({
  id: true,
  email: true,
  location: true,
});

export const updateCategory = async (
  id: string | undefined,
  prevState: CategoryForm,
  formData: FormData,
) => {
  const parsed = UpdateCategory.safeParse({
    name: formData.get("name"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: "Invalid field.",
    };
  }

  try {
    await prisma?.category.update({
      data: {
        name: parsed.data.name,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Category.",
    };
  }

  revalidatePath("/dashboard/categories");
  redirect("/dashboard/categories");
};

export const deleteCategory = async (id: string) => {
  try {
    await prisma?.category.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Category.",
    };
  }

  revalidatePath("/dashboard/categories");
  redirect("/dashboard/categories");
};

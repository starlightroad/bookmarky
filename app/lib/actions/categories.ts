"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type PreviousState = {
  message?: string | null;
  errors?: {
    name?: string[];
  };
};

const FormSchema = z.object({
  name: z.string().trim().min(2, "A minimum of two characters is required."),
});

export const createCategory = async (
  userId: string | undefined,
  prevState: PreviousState,
  formData: FormData,
) => {
  const parsed = FormSchema.safeParse({
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

export const updateCategory = async (
  id: string | undefined,
  prevState: PreviousState,
  formData: FormData,
) => {
  const parsed = FormSchema.safeParse({
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

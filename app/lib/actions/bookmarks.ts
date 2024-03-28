"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type PreviousState = {
  message?: string | null;
  errors?: {
    title?: string[];
    location?: string[];
    categoryId?: string[];
  };
};

const FormSchema = z.object({
  title: z.string().trim().min(1, "A bookmark name is required."),
  categoryId: z.string().trim().nullable(),
  location: z.string().url({ message: "Invalid URL." }).trim(),
});

export const createBookmark = async (
  userId: string | undefined,
  prevState: PreviousState,
  formData: FormData,
) => {
  const parsed = FormSchema.safeParse({
    title: formData.get("title"),
    categoryId: formData.get("categoryId") || null,
    location: formData.get("location"),
  });

  if (!userId) {
    return {
      message: "Something went wrong.",
    };
  }

  if (!parsed.success) {
    return {
      message: "Failed to create bookmark.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const bookmarkExists = !!(await prisma?.bookmark.findFirst({
      where: {
        userId,
        title: {
          equals: parsed.data.title,
          mode: "insensitive",
        },
      },
    }));

    if (bookmarkExists) {
      return {
        message: "Bookmark already exists.",
      };
    }
  } catch (error) {
    return {
      message: "Database Error: Something Went Wrong.",
    };
  }

  const date = new Date().toISOString();

  try {
    await prisma?.bookmark.create({
      data: {
        userId,
        title: parsed.data.title,
        href: parsed.data.location,
        categoryId: parsed.data.categoryId ?? undefined,
        createdAt: date,
        updatedAt: date,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      message: "Database Error: Failed to Create Bookmark.",
    };
  }

  revalidatePath("/dashboard/bookmarks");
  redirect("/dashboard/bookmarks");
};

export const updateBookmark = async (
  id: string | undefined,
  prevState: PreviousState,
  formData: FormData,
) => {
  const parsed = FormSchema.safeParse({
    title: formData.get("title"),
    categoryId: formData.get("categoryId") || null,
    location: formData.get("location"),
  });

  if (!parsed.success) {
    return {
      message: "Invalid fields.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const date = new Date().toISOString();

  try {
    await prisma?.bookmark.update({
      data: {
        title: parsed.data.title,
        href: parsed.data.location,
        categoryId: parsed.data.categoryId,
        updatedAt: date,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Bookmark.",
    };
  }

  revalidatePath("/dashboard/bookmarks");
  redirect("/dashboard/bookmarks");
};

export const deleteBookmark = async (id: string) => {
  try {
    await prisma?.bookmark.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Bookmark.",
    };
  }

  revalidatePath("/dashboard/bookmarks");
  redirect("/dashboard/bookmarks");
};

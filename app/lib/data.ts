import prisma from "@/app/lib/db";
import { ITEMS_PER_PAGE } from "@/app/lib/constants";

export const fetchUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch all users.");
  }
};

export const fetchUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user.");
  }
};

export const fetchExternalLinks = () => {
  const externalLinks = {
    repository: "https://github.com/starlightroad/bookmarky",
  };
  return externalLinks;
};

export const fetchFilteredCategories = async (
  userId: string,
  query: string,
  currentPage: number,
) => {
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;
  const take = currentPage * ITEMS_PER_PAGE;

  try {
    const categories = await prisma.category.findMany({
      where: {
        userId,
        name: {
          contains: query || undefined,
          mode: "insensitive",
        },
      },
      skip,
      take,
    });
    return categories;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch all categories.");
  }
};

export const fetchCategoryById = async (id: string) => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });
    return category;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch category.");
  }
};

export const fetchCategoriesPages = async (
  userId: string | undefined,
  query: string,
) => {
  try {
    const count = await prisma.category.count({
      where: {
        userId,
        name: {
          contains: query || undefined,
          mode: "insensitive",
        },
      },
    });
    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of categories.");
  }
};

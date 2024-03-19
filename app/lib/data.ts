import prisma from "@/app/lib/db";

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
  const ITEMS_PER_PAGE = 10;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const categories = await prisma.category.findMany({
      where: {
        userId,
        name: {
          contains: query || undefined,
          mode: "insensitive",
        },
      },
      skip: offset,
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

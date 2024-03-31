import prisma from "@/app/lib/db";
import { ITEMS_PER_PAGE } from "@/app/lib/constants";
import { Bookmark, Home, Layers3 } from "lucide-react";

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

export const fetchSidebarLinks = () => {
  return [
    {
      id: "071e60e8-8262-4930-9f39-ed8b6d143ca6",
      name: "Home",
      href: "/dashboard",
      icon: Home,
      bgColor: "bg-green-700",
    },
    {
      id: "0aa06a95-9418-4622-a992-3a75d1b6c943",
      name: "Bookmarks",
      href: "/dashboard/bookmarks",
      icon: Bookmark,
      bgColor: "bg-pink-700",
    },
    {
      id: "25f40db3-c0b2-4fc5-8d93-30763cb94022",
      name: "Categories",
      href: "/dashboard/categories",
      icon: Layers3,
      bgColor: "bg-violet-700",
    },
  ];
};

export const fetchCategories = async (userId: string) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        userId,
      },
    });
    return categories;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch all categories.");
  }
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

export const fetchFilteredBookmarks = async (
  userId: string,
  query: string,
  currentPage: number,
) => {
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;
  const take = currentPage * ITEMS_PER_PAGE;

  try {
    const bookmarks = await prisma.bookmark.findMany({
      where: {
        userId,
        title: {
          contains: query || undefined,
          mode: "insensitive",
        },
      },
      include: {
        category: {
          select: { name: true },
        },
      },
      skip,
      take,
    });
    return bookmarks;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch all bookmarks.");
  }
};

export const fetchBookmarkById = async (id: string) => {
  try {
    const bookmark = await prisma.bookmark.findUnique({
      where: {
        id,
      },
    });
    return bookmark;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch bookmark.");
  }
};

export const fetchBookmarksPages = async (
  userId: string | undefined,
  query: string,
) => {
  try {
    const count = await prisma.bookmark.count({
      where: {
        userId,
        title: {
          contains: query || undefined,
          mode: "insensitive",
        },
      },
    });
    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of bookmarks.");
  }
};

export const fetchCardData = async (userId?: string) => {
  try {
    const bookmarkCount = await prisma.bookmark.count({
      where: {
        userId,
      },
    });
    const categoryCount = await prisma.category.count({
      where: {
        userId,
      },
    });
    const data = await Promise.all([bookmarkCount, categoryCount]);

    return {
      numberOfBookmarks: data[0],
      numberOfCategories: data[1],
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
};

export const fetchLatestBookmarks = async (userId?: string) => {
  try {
    const latestBookmarks = await prisma.bookmark.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      take: 5,
    });

    return latestBookmarks.map(({ id, title, category, createdAt }) => ({
      id,
      title,
      category,
      createdAt,
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch latest bookmarks.");
  }
};

export const fetchLatestCategories = async (userId?: string) => {
  try {
    const latestCategories = await prisma.category.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    return latestCategories.map(({ id, name, createdAt }) => ({
      id,
      name,
      createdAt,
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch latest bookmarks.");
  }
};

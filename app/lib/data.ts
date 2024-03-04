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

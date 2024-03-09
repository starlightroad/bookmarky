"use client";

import { usePathname } from "next/navigation";
import { AddBookmark } from "@/app/ui/bookmarks/buttons";
import { AddCategory } from "@/app/ui/categories/buttons";

export default function NavbarButton() {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];

  if (currentPath === "bookmarks") {
    return <AddBookmark />;
  } else if (currentPath === "categories") {
    return <AddCategory />;
  } else {
    return null;
  }
}

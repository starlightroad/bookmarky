"use client";

import { Bookmark } from "@prisma/client";
import { Download } from "lucide-react";
import { generateCSV } from "@/app/lib/utils";
import { Button } from "@/app/ui/button";

type ExportButtonProps = {
  data: (Bookmark & { category: { name: string } | null })[];
};

export default function ExportButton({ data }: ExportButtonProps) {
  const downloadCSV = (bookmarks: typeof data) => {
    const extractedBookmarks = bookmarks.map((bookmark) => {
      return {
        title: bookmark.title,
        category: bookmark.category?.name,
        location: bookmark.href,
        createdAt: bookmark.createdAt.toDateString(),
        updatedAt: bookmark.updatedAt.toDateString(),
      };
    });

    let csvContent = "Title,Category,Location,Created At,Updated At\n";

    extractedBookmarks.forEach(
      ({ title, category, location, createdAt, updatedAt }) => {
        const row = [title, category ?? "-", location, createdAt, updatedAt];
        csvContent += `${row.join(",")}\n`;
      },
    );

    const link = document.createElement("a");
    link.href = generateCSV(csvContent);
    const filename = `Bookmarks-${new Date().toISOString()}.csv`;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Button
      className="h-8 min-w-8 rounded-full bg-secondary p-0 text-primary hover:bg-secondary/90"
      onClick={downloadCSV.bind(undefined, data)}
    >
      <Download size={16} />
    </Button>
  );
}

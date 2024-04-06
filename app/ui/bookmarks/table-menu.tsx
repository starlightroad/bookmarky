"use client";

import { MoreHorizontal } from "lucide-react";
import { UpdateBookmark } from "@/app/ui/bookmarks/buttons";
import DeleteBookmarkForm from "@/app/ui/bookmarks/delete-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/ui/dropdown-menu";

export default function TableMenu({ id }: { id: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-sm p-1.5 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-secondary">
          <MoreHorizontal size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuItem className="p-0">
          <UpdateBookmark id={id} />
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <DeleteBookmarkForm id={id} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

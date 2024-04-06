"use client";

import { MoreHorizontal } from "lucide-react";
import { UpdateCategory } from "@/app/ui/categories/buttons";
import DeleteCategoryForm from "@/app/ui/categories/delete-form";
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
          <UpdateCategory id={id} />
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <DeleteCategoryForm id={id} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import Link from "next/link";
import { Edit, Plus } from "lucide-react";
import { Button } from "@/app/ui/button";

export function AddCategory() {
  return (
    <Button className="h-8 min-w-8 rounded-full bg-primary p-0" asChild>
      <Link href="/dashboard/categories/create">
        <Plus size={16} />
      </Link>
    </Button>
  );
}

export function UpdateCategory({ id }: { id: string }) {
  const link = `/dashboard/categories/${id}/edit`;

  return (
    <Link
      className="flex w-full items-center gap-2 rounded-md py-1.5 pl-3 pr-2 text-slate-600 transition-colors dark:text-white/85"
      href={link}
    >
      <Edit size={16} />
      <span className="font-medium">Edit</span>
    </Link>
  );
}

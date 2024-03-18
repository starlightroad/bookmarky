"use client";

import Link from "next/link";
import { Edit, Plus } from "lucide-react";
import { Button } from "@/app/ui/button";

export function AddCategory() {
  return (
    <Button className="bg-lime-400 hover:bg-lime-400/90" size="sm" asChild>
      <Link href="/dashboard/categories/create">
        <Plus className="text-primary sm:hidden" size={16} />
        <span className="ml-1 hidden text-sm text-primary sm:block">
          Add Category
        </span>
      </Link>
    </Button>
  );
}

export function UpdateCategory({ id }: { id: string }) {
  const link = `/dashboard/categories/${id}/edit`;

  return (
    <Link
      className="block rounded-sm p-1.5 hover:cursor-pointer hover:bg-slate-100"
      href={link}
    >
      <Edit className="text-slate-600" size={16} />
    </Link>
  );
}

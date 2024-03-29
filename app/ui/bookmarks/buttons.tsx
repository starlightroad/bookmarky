import Link from "next/link";
import { Button } from "@/app/ui/button";
import { Edit, Plus } from "lucide-react";

export function AddBookmark() {
  return (
    <Button className="h-8 min-w-8 rounded-full bg-primary p-0" asChild>
      <Link href="/dashboard/bookmarks/create">
        <Plus size={16} />
      </Link>
    </Button>
  );
}

export function UpdateBookmark({ id }: { id: string }) {
  const link = `/dashboard/bookmarks/${id}/edit`;

  return (
    <Link
      className="flex w-full items-center gap-2 rounded-md py-1.5 pl-3 pr-2 text-slate-600 transition-colors hover:bg-blue-600 hover:text-secondary"
      href={link}
    >
      <Edit size={16} />
      <span className="font-medium">Edit</span>
    </Link>
  );
}

import { Button } from "@/app/ui/button";
import { Plus } from "lucide-react";

export function AddBookmark() {
  return (
    <Button size="sm">
      <Plus size={16} />
      <span className="ml-1 hidden text-sm font-normal sm:block">
        Add Bookmark
      </span>
    </Button>
  );
}

export function UpdateBookmark({ id }: { id: string }) {}

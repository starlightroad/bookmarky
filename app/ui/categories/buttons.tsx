import { Button } from "@/app/ui/button";
import { Plus } from "lucide-react";

export function AddCategory() {
  return (
    <Button size="sm">
      <Plus size={16} />
      <span className="ml-1 hidden text-sm font-normal sm:block">
        Add Category
      </span>
    </Button>
  );
}

export function UpdateCategory({ id }: { id: string }) {}

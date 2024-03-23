"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { Trash2 } from "lucide-react";
import { deleteCategory } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import { useToast } from "@/app/ui/use-toast";

type DeleteCategoryFormProps = {
  id: string;
};

export default function DeleteCategoryForm({ id }: DeleteCategoryFormProps) {
  const intitialState: { message?: string } = {};
  const deleteCategoryWithId = deleteCategory.bind(null, id);
  const [form, dispatch] = useFormState(deleteCategoryWithId, intitialState);
  const { toast } = useToast();

  useEffect(() => {
    if (form?.message) {
      toast({
        variant: "destructive",
        description: form.message,
      });
    }
  }, [form?.message, toast]);

  return (
    <form className="w-full" action={dispatch}>
      <div className="flex justify-end">
        <DeleteButton />
      </div>
    </form>
  );
}

export function DeleteButton() {
  const status = useFormStatus();

  return (
    <Button
      className="h-auto w-full justify-start gap-2 rounded-md bg-inherit py-1.5 pl-3 pr-2 text-slate-600 transition-colors hover:bg-blue-600 hover:text-secondary"
      type="submit"
      size="sm"
      disabled={status.pending}
    >
      <Trash2 size={16} />
      <span className="font-medium">Delete</span>
    </Button>
  );
}

"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { Trash2 } from "lucide-react";
import { deleteBookmark } from "@/app/lib/actions/bookmarks";
import { Button } from "@/app/ui/button";
import { useToast } from "@/app/ui/use-toast";

export default function DeleteBookmarkForm({ id }: { id: string }) {
  const intitialState: { message?: string } = {};
  const deleteBookmarkWithId = deleteBookmark.bind(null, id);
  const [form, dispatch] = useFormState(deleteBookmarkWithId, intitialState);
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
      className="h-auto w-full justify-start gap-2 rounded-md bg-inherit py-1.5 pl-3 pr-2 text-slate-600 transition-colors hover:bg-secondary dark:text-white/85"
      type="submit"
      size="sm"
      disabled={status.pending}
    >
      <Trash2 size={16} />
      <span className="font-medium">Delete</span>
    </Button>
  );
}

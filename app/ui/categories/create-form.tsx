"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { CaseSensitive } from "lucide-react";
import type { CategoryForm } from "@/app/lib/types";
import { Button } from "@/app/ui/button";
import { createCategory } from "@/app/lib/actions";
import { Input } from "@/app/ui/input";

type CreateCategoryFormProps = {
  userId?: string;
};

export default function CreateCategoryForm({
  userId,
}: CreateCategoryFormProps) {
  const initialState: CategoryForm = {};
  const createCategoryWithUserId = createCategory.bind(null, userId);
  const [form, dispatch] = useFormState(createCategoryWithUserId, initialState);

  return (
    <form action={dispatch}>
      <div className="mb-4">
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <div className="relative">
          <Input
            className="peer h-9 pl-[38px]"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
          />
          <CaseSensitive className="pointer-events-none absolute left-3 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-muted-foreground peer-focus:text-gray-900" />
        </div>
      </div>

      {form?.message && (
        <div className="mb-3 rounded-md bg-red-50 px-3 py-2">
          <p className="text-sm text-red-500">{form.message}</p>
        </div>
      )}

      {form?.errors && (
        <div className="mb-3 rounded-md bg-red-50 px-3 py-2">
          <p className="text-sm text-red-500">{form.errors.name}</p>
        </div>
      )}

      <div className="flex items-center gap-3">
        <SaveButton />
        <Button size="sm" variant="outline" asChild>
          <Link href="/dashboard/categories">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}

function SaveButton() {
  const status = useFormStatus();

  return (
    <Button
      className="bg-primary text-secondary"
      type="submit"
      size="sm"
      disabled={status.pending}
    >
      Save
    </Button>
  );
}

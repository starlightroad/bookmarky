"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { CaseSensitive, Layers3, Link2 } from "lucide-react";
import type { Bookmark, Category } from "@prisma/client";
import type { BookmarkState } from "@/app/lib/types";
import { Button } from "@/app/ui/button";
import { updateBookmark } from "@/app/lib/actions/bookmarks";
import { Input } from "@/app/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";

type EditBookmarkFormProps = {
  bookmark: Bookmark | null;
  categories: Category[];
};

export default function EditBookmarkForm({
  bookmark,
  categories,
}: EditBookmarkFormProps) {
  const initialState: BookmarkState = {};
  const updateCategoryWithId = updateBookmark.bind(null, bookmark?.id);
  const [form, dispatch] = useFormState(updateCategoryWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="mb-4">
        <label className="sr-only" htmlFor="title">
          Name
        </label>
        <div className="relative">
          <Input
            className="peer h-9 pl-[38px]"
            id="title"
            type="text"
            name="title"
            placeholder="Name"
            autoComplete="off"
            defaultValue={bookmark?.title}
          />
          <CaseSensitive className="pointer-events-none absolute left-3 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-muted-foreground peer-focus:text-gray-900" />
        </div>
      </div>

      <div className="mb-4">
        <label className="sr-only" htmlFor="location">
          URL
        </label>
        <div className="relative">
          <Input
            className="peer h-9 pl-[38px]"
            id="location"
            type="text"
            name="location"
            placeholder="URL"
            autoComplete="off"
            defaultValue={bookmark?.href}
          />
          <Link2 className="pointer-events-none absolute left-3 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-muted-foreground peer-focus:text-gray-900" />
        </div>
      </div>

      <div className="mb-4">
        <label className="sr-only" htmlFor="category">
          Category
        </label>
        <div className="relative">
          <Select
            name="categoryId"
            defaultValue={bookmark?.categoryId || undefined}
          >
            <SelectTrigger className="peer h-9 pl-[38px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(({ id, name }) => {
                return (
                  <SelectItem key={id} value={id}>
                    {name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <Layers3 className="pointer-events-none absolute left-3 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-muted-foreground peer-focus:text-gray-900" />
        </div>
      </div>

      {form?.message && (
        <div className="mb-3 rounded-md bg-red-50 px-3 py-2">
          <p className="text-sm text-red-500">{form.message}</p>
        </div>
      )}

      {form.errors?.title && (
        <div className="mb-3 rounded-md bg-red-50 px-3 py-2">
          <p className="text-sm text-red-500">{form.errors.title}</p>
        </div>
      )}

      {form.errors?.location && (
        <div className="mb-3 rounded-md bg-red-50 px-3 py-2">
          <p className="text-sm text-red-500">{form.errors.location}</p>
        </div>
      )}

      <div className="flex items-center gap-3">
        <SaveButton />
        <Button size="sm" variant="outline" asChild>
          <Link href="/dashboard/bookmarks">Cancel</Link>
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

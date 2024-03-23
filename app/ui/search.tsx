"use client";

import { Search as SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
  placeholder: string;
};

export default function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentPath = pathname.split("/");

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("page", "1");
      params.set("query", term);
    } else {
      params.delete("page");
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  if (currentPath.length === 2) {
    return null;
  }

  return (
    <div className="flex h-9 w-full max-w-80 items-center rounded-md">
      <SearchIcon className="pointer-events-none absolute ml-3" size={16} />
      <input
        className="h-full w-full rounded-md border border-input bg-background py-1 pl-9 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}

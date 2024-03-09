import { Menu, Plus, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/app/ui/avatar";
import { Button } from "@/app/ui/button";

export default function Navbar() {
  return (
    <header className="flex gap-3 px-5 py-3 lg:px-3">
      <div className="flex h-9 w-full max-w-9 cursor-pointer items-center justify-center rounded-md border border-input md:hidden">
        <Menu size={16} />
      </div>
      <div className="flex w-full gap-3">
        <div className="flex grow justify-end">
          <div className="flex h-9 w-full max-w-96 items-center rounded-md">
            <Search className="pointer-events-none absolute ml-3" size={16} />
            <input
              className="h-full w-full rounded-md border border-input bg-background py-1 pl-9 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              autoComplete="off"
            />
          </div>
        </div>
        <Button size="sm">
          <Plus size={16} />
          <span className="ml-2 hidden text-xs font-normal sm:block">
            Add Bookmark
          </span>
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarFallback className="text-sm">GO</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

import { Menu } from "lucide-react";
import { Avatar, AvatarFallback } from "@/app/ui/avatar";
import Search from "@/app/ui/search";
import NavbarButton from "@/app/ui/dashboard/navbar-button";

export default function Navbar() {
  return (
    <header className="flex gap-3 px-5 py-3 lg:px-3">
      <div className="flex h-9 w-full max-w-9 cursor-pointer items-center justify-center rounded-md border border-input md:hidden">
        <Menu size={16} />
      </div>
      <div className="flex w-full gap-3">
        <div className="flex grow justify-end">
          <Search placeholder="Search" />
        </div>
        <NavbarButton />
        <Avatar className="h-9 w-9">
          <AvatarFallback className="text-sm">GO</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

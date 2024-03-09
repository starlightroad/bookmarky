import { Menu } from "lucide-react";
import Search from "@/app/ui/search";
import NavbarButton from "@/app/ui/dashboard/navbar-button";
import UserMenu from "@/app/ui/dashboard/user-menu";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();

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
        <UserMenu user={session?.user} />
      </div>
    </header>
  );
}

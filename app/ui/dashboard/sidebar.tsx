import Link from "next/link";
import BookmarkyLogo from "@/app/ui/bookmarky-logo";
import NavLinks from "@/app/ui/dashboard/nav-links";
import UserMenu from "@/app/ui/dashboard/user-menu";
import { auth } from "@/auth";

export default async function Sidebar() {
  const session = await auth();

  return (
    <aside className="fixed bottom-0 top-0 z-10 hidden min-h-screen w-full max-w-56 border-r bg-slate-800 px-3 dark:bg-slate-900 md:block">
      <div className="flex items-center justify-between pb-8 pt-5">
        <Link className="block p-1" href="/dashboard">
          <BookmarkyLogo />
        </Link>
        <div className="flex p-1">
          <UserMenu user={session?.user} />
        </div>
      </div>
      <div>
        <NavLinks />
      </div>
    </aside>
  );
}

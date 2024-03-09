import Link from "next/link";
import BookmarkyLogo from "../bookmarky-logo";
import NavLinks from "./nav-links";

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-full max-w-56 border-r px-3 md:block">
      <div className="pb-8 pt-5">
        <Link className="block p-1" href="/dashboard">
          <BookmarkyLogo />
        </Link>
      </div>
      <div>
        <NavLinks />
      </div>
    </aside>
  );
}

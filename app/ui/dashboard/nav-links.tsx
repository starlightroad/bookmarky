"use client";

import { Bookmark, Home, Layers3 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type LinkProps = {
  id: string;
  name: string;
  href: string;
  icon: typeof Home;
};

const links: LinkProps[] = [
  {
    id: "071e60e8-8262-4930-9f39-ed8b6d143ca6",
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    id: "0aa06a95-9418-4622-a992-3a75d1b6c943",
    name: "Bookmarks",
    href: "/dashboard/bookmarks",
    icon: Bookmark,
  },
  {
    id: "25f40db3-c0b2-4fc5-8d93-30763cb94022",
    name: "Categories",
    href: "/dashboard/categories",
    icon: Layers3,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;

        const linkStyle = clsx(
          "flex items-center gap-3 rounded-md px-4 py-2 hover:bg-primary/5",
          {
            "bg-primary/5": pathname === link.href,
          },
        );

        const fontStyle = clsx("text-sm", {
          "font-semibold": pathname === link.href,
        });

        return (
          <li key={link.id}>
            <Link className={linkStyle} href={link.href}>
              <LinkIcon size={16} />
              <p className={fontStyle}>{link.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

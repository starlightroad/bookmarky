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
  bgColor: string;
};

const links: LinkProps[] = [
  {
    id: "071e60e8-8262-4930-9f39-ed8b6d143ca6",
    name: "Home",
    href: "/dashboard",
    icon: Home,
    bgColor: "bg-green-700",
  },
  {
    id: "0aa06a95-9418-4622-a992-3a75d1b6c943",
    name: "Bookmarks",
    href: "/dashboard/bookmarks",
    icon: Bookmark,
    bgColor: "bg-pink-700",
  },
  {
    id: "25f40db3-c0b2-4fc5-8d93-30763cb94022",
    name: "Categories",
    href: "/dashboard/categories",
    icon: Layers3,
    bgColor: "bg-violet-700",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;

        const linkStyle = clsx(
          "flex items-center gap-3 rounded-md px-4 py-2 hover:bg-secondary/10",
          {
            "bg-secondary/10": pathname === link.href,
          },
        );

        return (
          <li key={link.id}>
            <Link className={linkStyle} href={link.href}>
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full ${link.bgColor}`}
              >
                <LinkIcon className="text-secondary" size={12} />
              </div>
              <p className="text-sm font-medium text-secondary/80">
                {link.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

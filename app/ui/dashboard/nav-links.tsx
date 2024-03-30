"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { fetchSidebarLinks } from "@/app/lib/data";

const links = fetchSidebarLinks();

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

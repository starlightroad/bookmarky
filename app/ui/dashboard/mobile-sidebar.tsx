"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useSidebarProvider } from "@/app/lib/providers";
import BookmarkyLogo from "../bookmarky-logo";
import { signOutUser } from "@/app/lib/actions/auth";
import { fetchSidebarLinks } from "@/app/lib/data";

const links = fetchSidebarLinks();

export default function MobileSidebar() {
  const pathname = usePathname();
  const { push } = useRouter();
  const { show, setShow } = useSidebarProvider();

  const navigateTo = (href: string) => {
    setShow(false);
    push(href);
  };

  const endUserSession = async () => {
    await signOutUser();
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (document.body.clientWidth > 768 && show === true) {
        setShow(false);
      }
    });
  }, [show, setShow]);

  const asideStyle = clsx(
    "fixed bottom-0 top-0 z-20 min-h-screen w-full max-w-56 -translate-x-full transform-gpu bg-slate-800 px-3 transition-transform",
    {
      "translate-x-0": show,
    },
  );

  return (
    <aside className={asideStyle}>
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-8 pt-5">
            <Link className="block p-1" href="/dashboard">
              <BookmarkyLogo />
            </Link>
          </div>
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              const linkStyle = clsx(
                "flex items-center gap-3 rounded-md px-4 py-2 hover:bg-secondary/10 w-full",
                {
                  "bg-secondary/10": pathname === link.href,
                },
              );
              const LinkIcon = link.icon;

              return (
                <li key={link.id}>
                  <button
                    className={linkStyle}
                    onClick={navigateTo.bind(undefined, link.href)}
                  >
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${link.bgColor}`}
                    >
                      <LinkIcon className="text-secondary" size={12} />
                    </div>
                    <p className="text-sm font-medium text-secondary/80">
                      {link.name}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className="mb-3 w-full rounded-md bg-primary px-4 py-2 text-white"
          onClick={endUserSession}
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}

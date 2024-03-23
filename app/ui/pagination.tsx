"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { generatePagination } from "@/app/lib/utils";
import { ELLIPSIS } from "@/app/lib/constants";

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = generatePagination(currentPage, totalPages);

  if (!pages.length) return false;

  return (
    <nav>
      <ul className="flex items-center gap-3">
        <li className="flex items-center justify-center">
          <PaginationArrow
            direction="left"
            href={createPageURL(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </li>
        {pages.map((page) => {
          if (page === ELLIPSIS) return page;
          const isCurrentPage = page === currentPage;
          const linkStyles = `flex items-center justify-center rounded-full min-w-8 h-8 text-sm ${isCurrentPage ? "bg-primary text-secondary hover:bg-primary/90" : "hover:bg-slate-100"}`;

          return (
            <Link key={page} className={linkStyles} href={createPageURL(page)}>
              {page}
            </Link>
          );
        })}
        <li className="flex items-center justify-center">
          <PaginationArrow
            direction="right"
            href={createPageURL(currentPage + 1)}
            isDisabled={currentPage >= totalPages}
          />
        </li>
      </ul>
    </nav>
  );
}

function PaginationArrow({
  direction,
  href,
  isDisabled,
}: {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}) {
  const icon =
    direction === "left" ? (
      <ChevronLeft size={16} />
    ) : (
      <ChevronRight size={16} />
    );

  if (isDisabled)
    return (
      <span className="flex h-8 min-w-8 cursor-not-allowed items-center justify-center rounded-full text-slate-400">
        {icon}
      </span>
    );
  return (
    <Link
      className="flex h-8 min-w-8 items-center justify-center rounded-full hover:bg-slate-100"
      href={href}
    >
      {icon}
    </Link>
  );
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ELLIPSIS } from "@/app/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateYear = () => new Date().getFullYear();

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, ELLIPSIS, totalPages];
  }

  if (currentPage >= totalPages - 4) {
    return [
      1,
      ELLIPSIS,
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    ELLIPSIS,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    ELLIPSIS,
    totalPages,
  ];
};

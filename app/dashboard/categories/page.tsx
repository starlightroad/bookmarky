import type { Metadata } from "next";
import { Suspense } from "react";
import { auth } from "@/auth";
import type { CategoriesProps } from "@/app/lib/types";
import { AddCategory } from "@/app/ui/categories/buttons";
import Search from "@/app/ui/search";
import CategoriesTable from "@/app/ui/categories/table";
import Navbar from "@/app/ui/dashboard/navbar";
import Pagination from "@/app/ui/pagination";
import { fetchCategoriesPages } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Categories",
};

export default async function Categories({ searchParams }: CategoriesProps) {
  const session = await auth();
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCategoriesPages(session?.user?.id, query);

  return (
    <>
      <Navbar title="Categories" />
      <main className="px-5">
        <div className="pt-3">
          <div className="mb-4 flex items-center justify-between gap-3">
            <Search placeholder="Search" />
            <AddCategory />
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <CategoriesTable query={query} currentPage={currentPage} />
            <div className="mt-3 flex justify-end">
              <Pagination totalPages={totalPages} />
            </div>
          </Suspense>
        </div>
      </main>
    </>
  );
}

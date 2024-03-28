import type { Metadata } from "next";
import { Suspense } from "react";
import { auth } from "@/auth";
import type { SearchParamsProp } from "@/app/lib/types";
import { AddBookmark } from "@/app/ui/bookmarks/buttons";
import Search from "@/app/ui/search";
import Navbar from "@/app/ui/dashboard/navbar";
import BookmarksTable from "@/app/ui/bookmarks/table";
import Pagination from "@/app/ui/pagination";
import { fetchBookmarksPages } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Bookmarks",
};

export default async function Bookmarks({ searchParams }: SearchParamsProp) {
  const session = await auth();
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.query) || 1;
  const totalPages = await fetchBookmarksPages(session?.user?.id, query);

  return (
    <>
      <Navbar title="Bookmarks" />
      <main className="px-5">
        <div className="pt-3">
          <div className="mb-4 flex items-center justify-between gap-3">
            <Search placeholder="Search" />
            <AddBookmark />
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <BookmarksTable query={query} currentPage={currentPage} />
            <div className="mt-3 flex justify-end">
              <Pagination totalPages={totalPages} />
            </div>
          </Suspense>
        </div>
      </main>
    </>
  );
}

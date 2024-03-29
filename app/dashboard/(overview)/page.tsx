import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/app/ui/dashboard/navbar";
import Cards from "@/app/ui/dashboard/cards";
import LatestBookmarks from "@/app/ui/dashboard/latest-bookmarks";
import LatestCategories from "@/app/ui/dashboard/latest-categories";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Overview() {
  return (
    <>
      <Navbar title="Overview" />
      <main className="px-5">
        <div className="pt-3">
          <div className="grid grid-cols-2 gap-5">
            <Suspense fallback={<p>Loading cards...</p>}>
              <Cards />
            </Suspense>
          </div>
          <div className="my-5 grid gap-5 lg:grid-cols-2">
            <Suspense fallback={<p>Loading latest bookmarks...</p>}>
              <LatestBookmarks />
            </Suspense>
            <Suspense fallback={<p>Loading latest bookmarks...</p>}>
              <LatestCategories />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}

import { auth } from "@/auth";
import type { TableProps } from "@/app/lib/types";
import { formatDate } from "@/app/lib/utils";
import { fetchFilteredBookmarks } from "@/app/lib/data";
import TableMenu from "@/app/ui/bookmarks/table-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/table";

export default async function BookmarksTable({
  query,
  currentPage,
}: TableProps) {
  const session = await auth();
  const userId = String(session?.user?.id);
  const bookmarks = await fetchFilteredBookmarks(userId, query, currentPage);

  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="h-10">Name</TableHead>
            <TableHead className="h-10">Category</TableHead>
            <TableHead className="h-10">Location</TableHead>
            <TableHead className="h-10">Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookmarks.map(({ id, title, href, updatedAt, category }) => {
            return (
              <TableRow key={id}>
                <TableCell className="text-nowrap px-4 py-2">
                  <span>{title}</span>
                </TableCell>
                <TableCell className="text-nowrap px-4 py-2">
                  <span>{category?.name ?? "-"}</span>
                </TableCell>
                <TableCell className="text-nowrap px-4 py-2">
                  <span>{href}</span>
                </TableCell>
                <TableCell className="text-nowrap px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span>{formatDate(updatedAt.toString())}</span>
                    <span className="ml-8">
                      <TableMenu id={id} />
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {!bookmarks.length && (
        <div className="flex h-20 items-center justify-center px-4">
          <p className="text-center text-sm text-slate-600">
            {!query ? (
              "No bookmarks found."
            ) : (
              <>
                No results were found for your search&nbsp;
                <span className="font-medium">{query}</span>.
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

import { auth } from "@/auth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/table";
import { bookmarks } from "@/app/lib/placeholder-data";
import { formatDate } from "@/app/lib/utils";

type TableProps = {
  query: string;
  currentPage: number;
};

export default async function BookmarksTable({
  query,
  currentPage,
}: TableProps) {
  const session = await auth();
  const filteredBookmarks = bookmarks.filter((b) =>
    b.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

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
          {filteredBookmarks.map(
            ({ id, title, category_id, href, updated_at }) => {
              return (
                <TableRow key={id}>
                  <TableCell className="px-4 py-2">
                    <span>{title}</span>
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <span>{category_id}</span>
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <span>{href}</span>
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <div className="flex items-center justify-between">
                      <span>{formatDate(updated_at)}</span>
                    </div>
                  </TableCell>
                </TableRow>
              );
            },
          )}
        </TableBody>
      </Table>

      {!filteredBookmarks.length && (
        <div className="flex h-20 items-center justify-center px-4">
          <p className="text-center text-sm text-slate-600">
            No results were found for your search&nbsp;
            <span className="font-medium">{query}</span>.
          </p>
        </div>
      )}
    </div>
  );
}

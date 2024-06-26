import { fetchLatestBookmarks } from "@/app/lib/data";
import { formatDate } from "@/app/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/table";
import { auth } from "@/auth";

export default async function LatestBookmarks() {
  const session = await auth();
  const userId = session?.user?.id;
  const latestBookmarks = await fetchLatestBookmarks(userId);

  return (
    <div className="overflow-hidden rounded-lg border px-5 py-5">
      <header className="mb-5">
        <h3 className="text-lg font-semibold tracking-tight">
          Latest Bookmarks
        </h3>
      </header>
      {!latestBookmarks.length ? (
        <div className="flex h-24 items-center justify-center text-slate-600 dark:text-slate-400">
          <p className="text-sm">No bookmarks to display.</p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="h-10">Name</TableHead>
              <TableHead className="h-10">Category</TableHead>
              <TableHead className="h-10">Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {latestBookmarks.map(({ id, title, category, createdAt }) => {
              return (
                <TableRow key={id}>
                  <TableCell className="text-nowrap">{title}</TableCell>
                  <TableCell className="text-nowrap">
                    {category?.name ?? "-"}
                  </TableCell>
                  <TableCell className="text-nowrap">
                    {formatDate(createdAt.toString())}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

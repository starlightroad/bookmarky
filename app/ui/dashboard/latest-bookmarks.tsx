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

export default async function LatestBookmarks() {
  const latestBookmarks = await fetchLatestBookmarks();

  return (
    <div className="overflow-hidden rounded-lg border px-5 py-5">
      <header className="mb-5">
        <h3 className="text-lg font-semibold tracking-tight">
          Latest Bookmarks
        </h3>
      </header>
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
                <TableCell>{title}</TableCell>
                <TableCell>{category?.name ?? "-"}</TableCell>
                <TableCell>{formatDate(createdAt.toString())}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

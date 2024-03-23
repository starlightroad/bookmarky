import type { CategoriesTable } from "@/app/lib/types";
import { auth } from "@/auth";
import { fetchFilteredCategories } from "@/app/lib/data";
import TableMenu from "@/app/ui/categories/table-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/table";
import { formatDate } from "@/app/lib/utils";

export default async function CategoriesTable({
  query,
  currentPage,
}: CategoriesTable) {
  const session = await auth();
  const categories = await fetchFilteredCategories(
    String(session?.user?.id),
    query,
    currentPage,
  );

  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-full_ h-10">Name</TableHead>
            <TableHead className="w-full_ h-10">Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map(({ id, name, updatedAt }) => {
            return (
              <TableRow key={id}>
                <TableCell className="px-4 py-2">
                  <span>{name}</span>
                </TableCell>
                <TableCell className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span>{formatDate(updatedAt.toString())}</span>
                    <TableMenu id={id} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {!categories.length && (
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

import type { CategoriesTable } from "@/app/lib/types";
import { auth } from "@/auth";
import { fetchFilteredCategories } from "@/app/lib/data";
import TableMenu from "@/app/ui/dashboard/table-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/table";

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
            <TableHead className="h-10 w-full">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map(({ id, name }) => {
            return (
              <TableRow key={id}>
                <TableCell className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span>{name}</span>
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

import type { CategoriesTable } from "@/app/lib/types";
import { auth } from "@/auth";
import { fetchFilteredCategories } from "@/app/lib/data";
import { UpdateCategory } from "@/app/ui/categories/buttons";
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
          {new Array(1).fill(null).map(() => {
            return categories.map(({ id, name }) => {
              return (
                <TableRow key={id}>
                  <TableCell className="px-4 py-2">
                    <div className="flex items-center justify-between">
                      {name}
                      <UpdateCategory id={id} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            });
          })}
        </TableBody>
      </Table>
    </div>
  );
}

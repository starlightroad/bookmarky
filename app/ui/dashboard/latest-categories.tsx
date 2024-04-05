import { fetchLatestCategories } from "@/app/lib/data";
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

export default async function LatestCategories() {
  const session = await auth();
  const userId = session?.user?.id;
  const latestCategories = await fetchLatestCategories(userId);

  return (
    <div className="overflow-hidden rounded-lg border px-5 py-5">
      <header className="mb-5">
        <h3 className="text-lg font-semibold tracking-tight">
          Latest Categories
        </h3>
      </header>
      {!latestCategories.length ? (
        <div className="flex h-24 items-center justify-center">
          <p>No categories to display.</p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="h-10">Name</TableHead>
              <TableHead className="h-10">Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {latestCategories.map(({ id, name, createdAt }) => {
              return (
                <TableRow key={id}>
                  <TableCell className="text-nowrap">{name}</TableCell>
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

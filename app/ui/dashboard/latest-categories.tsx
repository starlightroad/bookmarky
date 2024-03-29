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

export default async function LatestCategories() {
  const latestCategories = await fetchLatestCategories();

  return (
    <div className="overflow-hidden rounded-lg border px-5 py-5">
      <header className="mb-5">
        <h3 className="text-lg font-semibold tracking-tight">
          Latest Categories
        </h3>
      </header>
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
                <TableCell>{name}</TableCell>
                <TableCell>{formatDate(createdAt.toString())}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

import { fetchBookmarks } from "@/app/lib/data";
import ExportButton from "@/app/ui/bookmarks/export-button";

export default async function ExportBookmarks({ userId }: { userId?: string }) {
  const bookmarks = await fetchBookmarks(userId);
  return !!bookmarks.length ? <ExportButton data={bookmarks} /> : null;
}

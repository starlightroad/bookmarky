import { fetchCardData } from "@/app/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";

export default async function Cards() {
  const { numberOfBookmarks, numberOfCategories } = await fetchCardData();

  return (
    <>
      <Card className="bg-slate-50">
        <CardHeader className="p-5">
          <CardTitle className="text-lg">Bookmarks</CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5">
          <p className="text-xl">{numberOfBookmarks}</p>
        </CardContent>
      </Card>
      <Card className="bg-slate-50">
        <CardHeader className="p-5">
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5">
          <p className="text-xl">{numberOfCategories}</p>
        </CardContent>
      </Card>
    </>
  );
}

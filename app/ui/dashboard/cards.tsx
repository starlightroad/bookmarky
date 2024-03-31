import { fetchCardData } from "@/app/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { auth } from "@/auth";

export default async function Cards() {
  const session = await auth();
  const userId = session?.user?.id;
  const { numberOfBookmarks, numberOfCategories } = await fetchCardData(userId);

  return (
    <>
      <Card>
        <CardHeader className="p-5">
          <CardTitle className="text-lg">Bookmarks</CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5">
          <p className="text-xl">{numberOfBookmarks}</p>
        </CardContent>
      </Card>
      <Card>
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

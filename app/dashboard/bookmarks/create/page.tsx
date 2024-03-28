import { auth } from "@/auth";
import CreateBookmarkForm from "@/app/ui/bookmarks/create-form";
import Navbar from "@/app/ui/dashboard/navbar";
import { fetchCategories } from "@/app/lib/data";

export default async function Create() {
  const session = await auth();
  const categories = await fetchCategories(String(session?.user?.id));

  return (
    <>
      <Navbar title="New Bookmark" />
      <main className="px-5">
        <CreateBookmarkForm
          userId={session?.user?.id}
          categories={categories}
        />
      </main>
    </>
  );
}

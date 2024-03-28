import { fetchBookmarkById, fetchCategories } from "@/app/lib/data";
import EditBookmarkForm from "@/app/ui/bookmarks/edit-form";
import Navbar from "@/app/ui/dashboard/navbar";
import { auth } from "@/auth";

type EditProps = {
  params: {
    id: string;
  };
};

export default async function Edit({ params }: EditProps) {
  const session = await auth();
  const bookmark = await fetchBookmarkById(params.id);
  const categories = await fetchCategories(String(session?.user?.id));

  return (
    <>
      <Navbar title="Edit Category" />
      <main className="px-5">
        <EditBookmarkForm bookmark={bookmark} categories={categories} />
      </main>
    </>
  );
}

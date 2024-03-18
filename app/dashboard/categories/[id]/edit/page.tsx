import { fetchCategoryById } from "@/app/lib/data";
import EditCategoryForm from "@/app/ui/categories/edit-form";
import Navbar from "@/app/ui/dashboard/navbar";

type EditProps = {
  params: {
    id: string;
  };
};

export default async function Edit({ params }: EditProps) {
  const category = await fetchCategoryById(params.id);

  return (
    <>
      <Navbar title="Edit Category" />
      <main className="px-5">
        <EditCategoryForm category={category} />
      </main>
    </>
  );
}

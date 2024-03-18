import { auth } from "@/auth";
import CreateCategoryForm from "@/app/ui/categories/create-form";
import Navbar from "@/app/ui/dashboard/navbar";

export default async function Create() {
  const session = await auth();

  return (
    <>
      <Navbar title="Create New Category" />
      <main className="px-5">
        <CreateCategoryForm userId={session?.user?.id} />
      </main>
    </>
  );
}

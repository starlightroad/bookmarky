import Navbar from "@/app/ui/dashboard/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Overview() {
  return (
    <>
      <Navbar />
      <main></main>
    </>
  );
}

"use client";

import { MenuSquare } from "lucide-react";
import { Button } from "@/app/ui/button";
import { useSidebarProvider } from "@/app/lib/providers/sidebar";

type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  const { show, setShow } = useSidebarProvider();

  const toggleMobileNavbar = () => {
    setShow(!show);
  };

  return (
    <header className="flex h-16 items-center gap-3 px-5">
      <Button
        className="h-8 w-8 p-0 md:hidden"
        type="button"
        variant="ghost"
        onClick={toggleMobileNavbar}
      >
        <MenuSquare size={16} />
      </Button>
      <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {title}
      </h1>
    </header>
  );
}

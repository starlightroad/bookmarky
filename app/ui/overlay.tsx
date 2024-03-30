"use client";

import clsx from "clsx";
import { useSidebarProvider } from "@/app/lib/providers";

export default function Overlay() {
  const { show, setShow } = useSidebarProvider();
  const overlayStyle = clsx("fixed z-10 h-full w-full bg-black/75", {
    hidden: show === false,
  });

  const closeOverlay = () => {
    setShow(false);
  };

  return <div className={overlayStyle} onClick={closeOverlay}></div>;
}

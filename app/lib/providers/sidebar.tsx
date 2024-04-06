"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export const SidebarContext = createContext<{
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}>({ show: false, setShow: () => {} });

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);

  return (
    <SidebarContext.Provider value={{ show, setShow }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarProvider = () => {
  return useContext(SidebarContext);
};

"use client";

import { User } from "next-auth";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/app/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/app/ui/avatar";
import { signOutUser } from "@/app/lib/actions/auth";

type UserMenuProps = {
  user?: User;
};

export default function UserMenu({ user }: UserMenuProps) {
  const endUserSession = async () => {
    await signOutUser();
  };

  const userDisplayName = user?.email?.slice(0, 2);
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-6 w-6">
          <AvatarFallback className="bg-primary text-xs uppercase text-secondary">
            {userDisplayName}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="start">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {["light", "dark", "system"].map((name) => {
              return (
                <DropdownMenuCheckboxItem
                  className="capitalize"
                  key={`b-theme-${name}`}
                  onClick={() => setTheme(name)}
                  checked={name === theme}
                >
                  {name}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem onClick={endUserSession}>
          <span className="font-medium">Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

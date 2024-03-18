"use client";

import { User } from "next-auth";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/app/ui/avatar";
import { signOutUser } from "@/app/lib/actions";

type UserMenuProps = {
  user?: User;
};

export default function UserMenu({ user }: UserMenuProps) {
  const endUserSession = async () => {
    await signOutUser();
  };

  const userDisplayName = user?.email?.slice(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-9 w-9">
          <AvatarFallback className="text-sm uppercase">
            {userDisplayName}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={endUserSession}>
          <LogOut className="mr-2" size={16} />
          <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
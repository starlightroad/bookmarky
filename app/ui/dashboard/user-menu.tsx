"use client";

import { User } from "next-auth";
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
        <Avatar className="h-6 w-6">
          <AvatarFallback className="bg-primary text-xs uppercase text-secondary">
            {userDisplayName}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="start">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="font-medium">Change Email</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={endUserSession}>
          <span className="font-medium">Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

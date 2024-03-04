import { Button } from "@/app/ui/button";
import { signOutUser } from "@/app/lib/actions";

export default function SignOutButton() {
  return (
    <form action={signOutUser}>
      <Button>Sign Out</Button>
    </form>
  );
}

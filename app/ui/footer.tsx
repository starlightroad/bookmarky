import Link from "next/link";
import { Code2 } from "lucide-react";
import Container from "@/app/ui/container";
import { Button } from "@/app/ui/button";
import { generateYear } from "@/app/lib/utils";
import { fetchExternalLinks } from "@/app/lib/data";
import ThemeButton from "@/app/ui/theme-button";

export default function Footer() {
  const externalLinks = fetchExternalLinks();

  return (
    <footer className="border-t py-3">
      <Container>
        <div className="flex items-center justify-between px-5">
          <p className="text-sm">&copy;{generateYear()} Bookmarky</p>
          <div className="flex">
            <ThemeButton />
            <Button variant="ghost" size="icon" asChild>
              <Link href={externalLinks.repository} target="_blank">
                <Code2 className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

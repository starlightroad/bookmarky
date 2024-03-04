import Link from "next/link";
import { Code2, Moon, Sun } from "lucide-react";
import Container from "@/app/ui/container";
import { Button } from "@/app/ui/button";
import { generateYear } from "@/app/lib/utils";
import { fetchExternalLinks } from "@/app/lib/data";

export default function Footer() {
  const externalLinks = fetchExternalLinks();

  return (
    <footer className="border-t py-3">
      <Container>
        <div className="flex items-center justify-between px-5">
          <p className="text-sm">&copy;{generateYear()} Bookmarky</p>
          <div className="flex">
            <Button variant="ghost" size="icon" aria-label="Toggle Theme">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
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

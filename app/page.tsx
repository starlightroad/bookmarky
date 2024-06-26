import Link from "next/link";
import { Button } from "@/app/ui/button";
import Container from "@/app/ui/container";
import BookmarkyLogo from "@/app/ui/bookmarky-logo";
import Footer from "@/app/ui/footer";
import Features from "@/app/ui/features";
import { TypographyH1, TypographyP } from "@/app/ui/typography";
import { fetchExternalLinks } from "@/app/lib/data";
import { auth } from "@/auth";

export default async function Home() {
  const externalLinks = fetchExternalLinks();
  const session = await auth();
  const isSignedIn = !!session?.user;

  return (
    <>
      <header className="fixed h-14 w-full border-b bg-slate-800 px-5 py-3 dark:bg-slate-900 sm:flex sm:items-center">
        <Container>
          <nav>
            <ul className="flex items-center justify-between">
              <li>
                <Link href="/">
                  <BookmarkyLogo />
                </Link>
              </li>
              <li>
                <Button className="h-8" size="sm" asChild>
                  {isSignedIn ? (
                    <Link href="/dashboard">Go to dashboard</Link>
                  ) : (
                    <Link href="/auth/login">Login</Link>
                  )}
                </Button>
              </li>
            </ul>
          </nav>
        </Container>
      </header>

      <Container>
        <main className="flex flex-col items-center pt-[152px]">
          <div className="mb-8 max-w-screen-md text-center">
            <header className="px-5">
              <TypographyH1>Your Bookmarks Stored in the Cloud</TypographyH1>
              <TypographyP>
                Forget about saving your favorite bookmarks across various
                browsers. Let Bookmarky keep your bookmarks in one central place
                and access them from anywhere.
              </TypographyP>
            </header>
          </div>

          <div className="flex gap-3">
            <Button size="sm" asChild>
              <Link href="/auth/login">Get Started</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href={externalLinks.repository} target="_blank">
                View Repo
              </Link>
            </Button>
          </div>

          <section className="mb-32 mt-32 w-full">
            <Features />
          </section>
        </main>
      </Container>

      <Footer />
    </>
  );
}

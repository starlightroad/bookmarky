import { Cloud, FileUp, Folder } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { TypographyH2, TypographyP } from "@/app/ui/typography";

const featuresContent = [
  {
    id: "0e3c6659-a8a0-4e62-bd75-e966ce019bc3",
    title: "Cloud Storage",
    description: "Your bookmarks in the cloud accessible from anywhere.",
    icon: Cloud,
  },
  {
    id: "74b4bfba-8085-4446-8578-878408687c05",
    title: "Organize by Category",
    description: "Organize your bookmarks into categories to make things tidy.",
    icon: Folder,
  },
  {
    id: "3efbb658-c07f-4e93-8476-7570ff8117cc",
    title: "Export to CSV",
    description: "Have a local backup of your bookmarks for safekeeping.",
    icon: FileUp,
  },
];

export default function Features() {
  return (
    <>
      <div className="items-center_ mb-10 flex justify-center">
        <div className="max-w-screen-md text-center">
          <header className="px-5">
            <TypographyH2>Features</TypographyH2>
            <TypographyP>Below are some features worth mentioning.</TypographyP>
          </header>
        </div>
      </div>

      <ul className="flex flex-col gap-5 px-5 sm:flex-row">
        {featuresContent.map((feature) => {
          const LinkIcon = feature.icon;
          return (
            <li key={feature.id} className="w-full">
              <Card>
                <CardHeader>
                  <div className="bg-primary mb-6 flex h-12 w-12 items-center justify-center rounded-md">
                    <LinkIcon className="text-primary-foreground" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
}

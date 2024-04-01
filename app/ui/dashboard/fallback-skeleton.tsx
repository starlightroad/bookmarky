import { Skeleton } from "@/app/ui/skeleton";

export default function FallbackSkeleton() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-9 w-full max-w-80 rounded-md" />
        <Skeleton className="h-9 w-9 rounded-full" />
      </div>
      <Skeleton className="h-96 rounded-md" />
    </>
  );
}

import Sidebar from "@/app/ui/dashboard/sidebar";
import Container from "@/app/ui/container";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="w-full md:pl-56">
        <Container>{children}</Container>
      </div>
    </div>
  );
}

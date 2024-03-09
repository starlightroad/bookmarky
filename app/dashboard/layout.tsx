import Sidebar from "@/app/ui/dashboard/sidebar";
import Container from "@/app/ui/container";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Container>
      <div className="flex">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </Container>
  );
}

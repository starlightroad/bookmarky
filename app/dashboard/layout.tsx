import Sidebar from "@/app/ui/dashboard/sidebar";
import Container from "@/app/ui/container";
import Navbar from "@/app/ui/dashboard/navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Container>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </Container>
  );
}

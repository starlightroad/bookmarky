import ThemeProvider from "@/app/lib/providers/theme";
import { SidebarProvider } from "@/app/lib/providers/sidebar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}

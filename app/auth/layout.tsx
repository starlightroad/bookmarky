type LayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="pt-24">
      <div className="relative mx-auto w-full max-w-96 p-8">{children}</div>
    </div>
  );
}

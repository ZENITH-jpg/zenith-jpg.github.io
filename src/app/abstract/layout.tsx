export default function AbstractLayout({
                                         children,
                                       }: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      {children}
    </main>
  );
}
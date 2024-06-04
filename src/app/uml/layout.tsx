export default function UMLLayout({
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
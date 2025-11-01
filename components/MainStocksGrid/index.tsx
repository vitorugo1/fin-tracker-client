export function MainStocksGrid({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-8'>
      {children}
    </div>
  );
}

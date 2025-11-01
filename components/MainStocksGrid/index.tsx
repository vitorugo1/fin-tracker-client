export function MainStocksGrid({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-2 gap-4 p-8 max-h-full'>{children}</div>
  );
}

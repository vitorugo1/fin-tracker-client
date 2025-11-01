export function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen bg-zinc-950 font-sans text-zinc-50'>
      <div className='mx-auto'>{children}</div>
    </div>
  );
}

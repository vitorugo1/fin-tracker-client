import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  return (
    <header className={clsx('shadow-sm min-w-full')}>
      <Link
        className={clsx(
          'px-8 font-extrabold py-4',
          'sm:text-3xl/normal sm:py-2',
          'md:text-4xl/normal md:py-3',
          'lg:text-5xl/normal lg:py-4',
        )}
        href={{ pathname: '/' }}
      >
        FIN-TRACKER
      </Link>
    </header>
  );
}

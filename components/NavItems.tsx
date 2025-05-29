'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Companions',
    href: '/companions',
  },
  {
    title: 'My Journey',
    href: '/my-journey',
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <>
      {navItems.map(({ title, href }) => (
        <Link
          href={href}
          key={title}
          className={pathname === href ? 'text-bold underline' : ''}
        >
          {title}
        </Link>
      ))}
    </>
  );
};

export default NavItems;

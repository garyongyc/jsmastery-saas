import Link from 'next/link';
import Image from 'next/image';
import NavItems from './NavItems';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <Image
          src='/images/logo.svg'
          alt='Converso logo'
          width={45}
          height={45}
        />
      </Link>
      <ul className='flex gap-2.5'>
        <NavItems />
      </ul>
    </nav>
  );
};

export default Navbar;

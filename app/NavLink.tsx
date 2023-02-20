import Link from 'next/link';
import React from 'react';

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link href={`/news/${category}`} className="navLink">
      {category}
    </Link>
  );
}

export default NavLink;

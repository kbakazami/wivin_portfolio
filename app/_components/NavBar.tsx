'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
      <nav
        className={`${isHome && atTop ? 'bg-transparent' : 'bg-[#30475E]'} fixed top-0 left-0 w-full p-4 text-white transition-colors duration-300 z-50`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link href="/">
              Wivin Struys
            </Link>
          </div>

          {/* Burger Icon (mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu links - Desktop */}
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="hover:text-[#7E8A97]">Accueil</Link></li>
            <li><Link href="/projects" className="hover:text-[#7E8A97]">Projets</Link></li>
            <li><Link href="/about" className="hover:text-[#7E8A97]">À propos</Link></li>
            <li><Link href="/skills" className="hover:text-[#7E8A97]">Compétences</Link></li>
            <li><Link href="/contact" className="hover:text-[#7E8A97]">Contact</Link></li>
          </ul>
        </div>

        {/* Menu déroulant - Mobile */}
        {menuOpen && (
            <div className="md:hidden mt-4 px-4 space-y-3">
              <Link href="/" className="block hover:text-[#7E8A97]">Accueil</Link>
              <Link href="/projects" className="block hover:text-[#7E8A97]">Projets</Link>
              <Link href="/about" className="block hover:text-[#7E8A97]">À propos</Link>
              <Link href="/skills" className="block hover:text-[#7E8A97]">Compétences</Link>
              <Link href="/contact" className="block hover:text-[#7E8A97]">Contact</Link>
            </div>
        )}
      </nav>
  );
};

export default NavBar;

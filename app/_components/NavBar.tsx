'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
      <nav className="bg-[#113F67] p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Mon Portfolio</div>

          {/* Burger Icon (mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu links - Desktop */}
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="hover:text-[#FDF5AA]">Accueil</Link></li>
            <li><Link href="/projects" className="hover:text-[#FDF5AA]">Projets</Link></li>
            <li><Link href="/about" className="hover:text-[#FDF5AA]">À propos</Link></li>
            <li><Link href="/skills" className="hover:text-[#FDF5AA]">Compétences</Link></li>
            <li><Link href="/contact" className="hover:text-[#FDF5AA]">Contact</Link></li>
          </ul>
        </div>

        {/* Menu déroulant - Mobile */}
        {menuOpen && (
            <div className="md:hidden mt-4 px-4 space-y-3">
              <Link href="/" className="block hover:text-[#FDF5AA]">Accueil</Link>
              <Link href="/projects" className="block hover:text-[#FDF5AA]">Projets</Link>
              <Link href="/about" className="block hover:text-[#FDF5AA]">À propos</Link>
              <Link href="/skills" className="block hover:text-[#FDF5AA]">Compétences</Link>
              <Link href="/contact" className="block hover:text-[#FDF5AA]">Contact</Link>
            </div>
        )}
      </nav>
  );
};

export default NavBar;

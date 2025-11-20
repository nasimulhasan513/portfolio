"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={twMerge(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
    )}>
      <div className="container-padding flex justify-between items-center">
        <Link href="/" className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">
          NHD.
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} 
               className="text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors relative group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-slate-800 p-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-slate-300 hover:text-primary-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

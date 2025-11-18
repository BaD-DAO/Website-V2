'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-black border-2 border-white px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="BuildaDAO" className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/first-500" className="text-white hover:underline transition-all duration-300 text-sm font-bold tracking-wide uppercase">
              First 500
            </Link>
            <Link href="/academy" className="text-white hover:underline transition-all duration-300 text-sm font-bold tracking-wide uppercase">
              Academy
            </Link>
            <Link href="/countries" className="text-white hover:underline transition-all duration-300 text-sm font-bold tracking-wide uppercase">
              Countries
            </Link>
            
            {/* Dropdown for Resources */}
            <div className="relative">
              <button
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
                className="text-white hover:underline transition-all duration-300 text-sm font-bold tracking-wide uppercase flex items-center gap-1"
              >
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'resources' && (
                <div
                  onMouseEnter={() => setOpenDropdown('resources')}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 mt-3 w-48 bg-black border-2 border-white py-2"
                >
                  <Link href="/events" className="block px-4 py-2.5 text-white hover:bg-white hover:text-black text-sm transition-all duration-300 font-bold">
                    Events
                  </Link>
                  <Link href="/talent-pool" className="block px-4 py-2.5 text-white hover:bg-white hover:text-black text-sm transition-all duration-300 font-bold">
                    Talent Pool
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            <button className="text-white hover:underline transition-all duration-300 flex items-center gap-2 px-3 py-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs">⌘K</span>
            </button>

            {/* Sign In */}
            <Link 
              href="/signin" 
              className="px-5 py-2 text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold"
            >
              SIGN IN
            </Link>

            {/* Downloads */}
            <Link 
              href="/downloads" 
              className="px-5 py-2 bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-all duration-300 text-sm font-bold"
            >
              DOWNLOADS
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:underline transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-white mt-2">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link href="/first-500" className="block px-3 py-2.5 text-white hover:underline text-sm font-bold transition-all duration-300">
                First 500
              </Link>
              <Link href="/academy" className="block px-3 py-2.5 text-white hover:underline text-sm font-bold transition-all duration-300">
                Academy
              </Link>
              <Link href="/countries" className="block px-3 py-2.5 text-white hover:underline text-sm font-bold transition-all duration-300">
                Countries
              </Link>
              <Link href="/events" className="block px-3 py-2.5 text-white hover:underline text-sm font-bold transition-all duration-300">
                Events
              </Link>
              <Link href="/talent-pool" className="block px-3 py-2.5 text-white hover:underline text-sm font-bold transition-all duration-300">
                Talent Pool
              </Link>
              <div className="pt-4 space-y-2">
                <Link href="/signin" className="block px-3 py-2.5 text-center bg-black border-2 border-white text-white text-sm hover:bg-white hover:text-black transition-all duration-300 font-bold">
                  SIGN IN
                </Link>
                <Link href="/downloads" className="block px-3 py-2.5 text-center bg-white text-black border-2 border-white text-sm font-bold hover:bg-black hover:text-white transition-all duration-300">
                  DOWNLOADS
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

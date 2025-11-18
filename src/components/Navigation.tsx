'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-black sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">BaD</span>
            </div>
            <span className="tracking-tight">BuildaDAO</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/first-500" className="text-gray-300 hover:text-white transition text-sm font-medium tracking-wide uppercase">
              First 500
            </Link>
            <Link href="/academy" className="text-gray-300 hover:text-white transition text-sm font-medium tracking-wide uppercase">
              Academy
            </Link>
            <Link href="/countries" className="text-gray-300 hover:text-white transition text-sm font-medium tracking-wide uppercase">
              Countries
            </Link>
            
            {/* Dropdown for Resources */}
            <div className="relative">
              <button
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
                className="text-gray-300 hover:text-white transition text-sm font-medium tracking-wide uppercase flex items-center gap-1"
              >
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'resources' && (
                <div
                  onMouseEnter={() => setOpenDropdown('resources')}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2"
                >
                  <Link href="/events" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white text-sm">
                    Events
                  </Link>
                  <Link href="/talent-pool" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white text-sm">
                    Talent Pool
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <button className="text-gray-400 hover:text-white transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs text-gray-500">⌘K</span>
            </button>

            {/* Sign In */}
            <Link 
              href="/signin" 
              className="px-5 py-2 text-white border border-gray-700 rounded-lg hover:bg-gray-900 transition text-sm font-medium"
            >
              SIGN IN
            </Link>

            {/* Downloads */}
            <Link 
              href="/downloads" 
              className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition text-sm font-medium"
            >
              DOWNLOADS
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-black">
            <Link href="/first-500" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-white rounded text-sm">
              First 500
            </Link>
            <Link href="/academy" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-white rounded text-sm">
              Academy
            </Link>
            <Link href="/countries" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-white rounded text-sm">
              Countries
            </Link>
            <Link href="/events" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-white rounded text-sm">
              Events
            </Link>
            <Link href="/talent-pool" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-white rounded text-sm">
              Talent Pool
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/signin" className="block px-3 py-2 text-center border border-gray-700 rounded-lg text-white text-sm">
                SIGN IN
              </Link>
              <Link href="/downloads" className="block px-3 py-2 text-center bg-white text-black rounded-lg text-sm font-medium">
                DOWNLOADS
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

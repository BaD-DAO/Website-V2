'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto">
      <div className="bg-black/80 backdrop-blur-sm border border-white/10 px-4 sm:px-6 rounded-lg shadow-lg">
        <div className="flex items-center h-16 relative">
          {/* Logo - Left */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-80 transition-opacity">
              <img src="/logos/logo.png" alt="BuildaDAO" className="h-10 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-white hover:underline transition-all duration-300 text-sm font-medium">
              Home
            </Link>
            <Link href="/first-500" className="text-white hover:underline transition-all duration-300 text-sm font-medium">
              First 500
            </Link>
            <Link href="/academy" className="text-white hover:underline transition-all duration-300 text-sm font-medium">
              Academy
            </Link>
            <Link href="/countries" className="text-white hover:underline transition-all duration-300 text-sm font-medium">
              Countries
            </Link>
            <Link href="/events" className="text-white hover:underline transition-all duration-300 text-sm font-medium">
              Events
            </Link>
            <Link href="/talent-pool" className="text-white hover:underline transition-all duration-300 text-sm font-medium">
              Talent Pool
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden lg:flex items-center gap-3">
              {/* Contact Us */}
              <Link 
                href="/contact" 
                className="px-5 py-2 bg-white text-black hover:bg-white/90 transition-all duration-200 text-sm font-medium rounded-md shadow-sm"
              >
                Contact Us
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
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 mt-2">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link href="/" className="block px-3 py-2 text-white hover:bg-white/5 text-sm font-medium transition-colors rounded-md">
                Home
              </Link>
              <Link href="/first-500" className="block px-3 py-2 text-white hover:bg-white/5 text-sm font-medium transition-colors rounded-md">
                First 500
              </Link>
              <Link href="/academy" className="block px-3 py-2 text-white hover:bg-white/5 text-sm font-medium transition-colors rounded-md">
                Academy
              </Link>
              <Link href="/countries" className="block px-3 py-2 text-white hover:bg-white/5 text-sm font-medium transition-colors rounded-md">
                Countries
              </Link>
              <Link href="/events" className="block px-3 py-2 text-white hover:bg-white/5 text-sm font-medium transition-colors rounded-md">
                Events
              </Link>
              <Link href="/talent-pool" className="block px-3 py-2 text-white hover:bg-white/5 text-sm font-medium transition-colors rounded-md">
                Talent Pool
              </Link>
              <div className="pt-4">
                <Link href="/contact" className="block px-3 py-2 text-center bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors rounded-md">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Mentorship', href: '/mentorship' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="bg-[#003366] text-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-2xl font-bold">WiCSE</div>
              <div className="hidden md:block text-sm border-l border-white/30 pl-3">
                Florida Atlantic University
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-[#CC0000] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 rounded-md bg-[#CC0000] px-4 py-2 text-sm font-semibold text-white hover:bg-[#A00000] transition-colors"
            >
              Get Involved
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium hover:bg-white/10 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mx-3 mt-4 rounded-md bg-[#CC0000] px-4 py-2 text-center text-base font-semibold text-white hover:bg-[#A00000]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

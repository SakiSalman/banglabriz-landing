'use client';
import { Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={'/'} className="text-2xl font-bold text-[var(--primary-color)]">
              BanglaBriz
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
            >
              HOME
            </a>
            <a
              href="/about"
              className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
            >
              ABOUT
            </a>
            <a
              href="/services"
              className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
            >
              SERVICES
            </a>
            <a
              href="/gallery"
              className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
            >
              GALLERY
            </a>
            <a
              href="/apply"
              className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
            >
              APPLY
            </a>
            <a
              href="/blog"
              className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
            >
              Blogs
            </a>
            <a
              href="/recruit"
              className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
            >
              RECRUIT
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Phone className="w-5 h-5 text-[var(--secondary-color)]" />
            <button className="bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-light)] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
              >
                HOME
              </a>
              <a
                href="/about"
                className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
              >
                ABOUT
              </a>
              <a
                href="/services"
                className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
              >
                SERVICES
              </a>
              <a
                href="/gallery"
                className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
              >
                GALLERY
              </a>
              <a
                href="/apply"
                className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
              >
                APPLY
              </a>
              <a
                href="/recruit"
                className="text-[var(--body-color)] hover:text-[var(--primary-color)] transition-colors font-medium"
              >
                RECENT
              </a>
              <button className="bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-light)] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-fit">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

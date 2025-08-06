'use client';
import { cn } from '@/utils/cn';
import { MotionDiv } from '@/utils/motion.utils';
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full top-3 left-0 right-0 z-50">
      <MotionDiv
        className={cn(
          'md:max-w-6xl mx-auto px-4 md:px-8 bg-[#ffffffe0] ring ring-blue-900 shadow-lg',
          isMenuOpen ? 'rounded-lg' : 'rounded-full',
        )}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={'/'} className="text-2xl font-bold text-primary">
              <Image
                alt="logo"
                src={'/images/logo-full.png'}
                width={150}
                height={40}
                className="w-[130px] h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 h-full items-center">
            <Link href="#" className="text-text hover:text-secondary transition-colors font-medium">
              HOME
            </Link>
            <Link
              href="/about"
              className="text-text hover:text-secondary transition-colors font-medium"
            >
              ABOUT
            </Link>
            <div className="relative group inline-block">
              <div className="text-text hover:text-secondary transition-colors font-medium cursor-pointer">
                SERVICES
              </div>
              <div className="absolute left-0 top-full mt-2 bg-white border border-gray-100 rounded-lg shadow-lg w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3">
                <Link
                  href="/student-services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Student Services
                </Link>
                <Link
                  href="/worker-services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Worker Services
                </Link>
              </div>
            </div>

            <Link
              href="/gallery"
              className="text-text hover:text-secondary transition-colors font-medium"
            >
              GALLERY
            </Link>
            <Link
              href="/blog"
              className="text-text hover:text-secondary transition-colors font-medium"
            >
              BLOGS
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={'/contact'}
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Get Quote
            </Link>
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
              <Link
                href="/"
                className="text-text hover:text-secondary transition-colors font-medium"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-text hover:text-secondary transition-colors font-medium"
              >
                ABOUT
              </Link>
              <details className="group">
                <summary className="cursor-pointer text-text hover:text-secondary transition-colors font-medium list-none">
                  SERVICES
                </summary>
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    href="/student-services"
                    className="block text-sm text-gray-700 hover:text-secondary"
                  >
                    Student Services
                  </Link>
                  <Link
                    href="/worker-services"
                    className="block text-sm text-gray-700 hover:text-secondary"
                  >
                    Worker Services
                  </Link>
                </div>
              </details>
              <Link
                href="/gallery"
                className="text-text hover:text-secondary transition-colors font-medium"
              >
                GALLERY
              </Link>
              <Link
                href="/blog"
                className="text-text hover:text-secondary transition-colors font-medium"
              >
                BLOG
              </Link>
              <Link
                href={'/contact'}
                className="bg-secondary hover:bg-secondary-light text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-fit"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </MotionDiv>
    </nav>
  );
};

export default Header;

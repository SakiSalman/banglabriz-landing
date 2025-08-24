'use client';
import { NavData } from '@/models/header.models';
import { cn } from '@/utils/cn';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { JSX } from 'react';

interface NavMenuProps {
  navdata: NavData[];
}

const NavMenu = ({ navdata }: NavMenuProps): JSX.Element => {
  const pathneme = usePathname();
  return (
    <nav className="py-4">
      <ul className="flex justify-center items-center gap-2">
        {navdata.map((item: NavData, index: number) => (
          <li key={index} className="inline-block mr-6 relative group">
            <a
              href={item.href ? item.href : '#'}
              className={cn(
                'text-lg font-medium hover:text-primary transition-all duration-500 flex items-center gap-1.5 relative',
                pathneme === item?.href ? 'text-primary' : 'text-text',
                !item.subItems?.length ? 'hover-active-bar' : '',
              )}
            >
              <span> {item.label}</span>{' '}
              {item.subItems && (
                <span className="">
                  <ChevronDown />
                </span>
              )}
            </a>
            {item.subItems && (
              <ul className="mt-2 bg-white shadow-lg rounded-md p-2 absolute min-w-[250px] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="space-y-1">
                    <a
                      href={item.href ? item.href : '#'}
                      className={cn(
                        'text-text hover:text-primary transition-all duration-500 block px-4 py-2 rounded-md hover:bg-primary/10',
                        pathneme === subItem.href ? 'text-primary' : 'text-text',
                      )}
                    >
                      <span> {item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;

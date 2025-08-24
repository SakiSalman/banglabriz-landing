import Logo from '@/components/Logo/Logo';
import React, { JSX } from 'react';
import NavMenu from './NavMenu';
import NavInformation from './NavInformation';
import { NavData } from '@/models/header.models';

const dummyNavData: NavData[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', subItems: [
    { label: 'Service 1', href: '/services/service1' },
    { label: 'Service 1', href: '/services/service1' }
] },
  { label: 'Contact', href: '/contact' },
];
const Header = (): JSX.Element => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 left-0 z-50">
      <div className="_container">
        <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-3">
          <div className="lg:col-span-2">
            <Logo />
          </div>
          <div className="lg:col-span-6">
            <NavMenu 
                navdata={dummyNavData}
            />
          </div>
          <div className="lg:col-span-4">
            <NavInformation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

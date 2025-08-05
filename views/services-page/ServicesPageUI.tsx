'use client';

import { useState } from 'react';
import ServiceBanner from './components/ServiceBanner';
import StudentServices from './components/StudentServices';
import WorkerServices from './components/WorkerServices';
import CTASection from '../home-page/components/CTASection';

const ServicesPageUI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceBanner />
      <StudentServices />
      <WorkerServices />
      <CTASection/>
    </div>
  );
};
export default ServicesPageUI;

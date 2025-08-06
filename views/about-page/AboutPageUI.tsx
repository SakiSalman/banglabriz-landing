'use client';
import AboutBanner from './components/AboutBanner';
import StatisticsSection from '../home-page/components/StatisticsSection';
import OurProcess from './components/OurProcess';
import OurServices from './components/OurServices';
import TestimonialSection from './components/TestimonialSection';
import CTASection from '../home-page/components/CTASection';

const AboutPageUI = () => {
  const stats = [
    { number: '10', label: 'Successful Course Graduates', suffix: '+' },
    { number: '700', label: 'Project Completed', suffix: '+' },
    { number: '5k', label: 'Global Happy Clients', suffix: '+' },
    { number: '500', label: 'Team Members', suffix: '+' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AboutBanner />

      <StatisticsSection />

      <OurProcess />

      <OurServices />

      <TestimonialSection />

      <CTASection />
    </div>
  );
};
export default AboutPageUI;

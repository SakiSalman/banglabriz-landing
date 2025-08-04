'use client';
import React from 'react';

import { useState } from 'react';
import {
  Globe,
  FileText,
  Users,
  Plane,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin as LinkedIn,
  Instagram,
  Menu,
  X,
} from 'lucide-react';
import Image from 'next/image';
import HeroBanner from './components/HeroBanner';
import StatisticsSection from './components/StatisticsSection';
import CareerSection from './components/CareerSection';
import ServicesSection from './components/ServicesSection';
import HightLightSection from './components/HightLightSection';
import EventGallery from './components/EventGallery';
import CTASection from './components/CTASection';
const HomePageUi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="">

      <HeroBanner />
      <StatisticsSection/>
      <CareerSection/>
      <ServicesSection/>
      <HightLightSection/>
      <EventGallery/>
      <CTASection/>
    </div>
  );
};

export default HomePageUi;

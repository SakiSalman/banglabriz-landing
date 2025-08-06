import { MotionByIndex, MotionDiv } from '@/utils/motion.utils';
import { CheckCircle, FileText, Globe, Plane, Shield, Users } from 'lucide-react';
import React from 'react';

const OurServices = () => {
  const services = [
    {
      icon: Globe,
      title: 'Visa Application Guidance',
      description:
        'Expert guidance to navigate the complex visa application process and maximize your chances of success.',
      color: 'text-blue-600',
    },
    {
      icon: FileText,
      title: 'Document Preparation',
      description:
        'Professional assistance in preparing all required documents, forms, and supporting materials required for your application.',
      color: 'text-green-600',
    },
    {
      icon: Users,
      title: 'Interview Coaching',
      description:
        'One-on-one coaching sessions to help you prepare effective interview questions and prepare a compelling case for immigration officers.',
      color: 'text-purple-600',
    },
    {
      icon: Plane,
      title: 'Travel & Relocation Support',
      description:
        'We handle all the logistics of your travel and relocation experience, including flight arrangements, finding flights to arranging housing, so you can focus on starting your new life abroad.',
      color: 'text-orange-600',
    },
    {
      icon: Shield,
      title: 'Post-Arrival Assistance',
      description:
        'Our team helps you get settled in your new country, including registering with local authorities, setting up bank accounts and more.',
      color: 'text-teal-600',
    },
    {
      icon: CheckCircle,
      title: 'Ongoing Check-ins',
      description:
        "We maintain regular contact to ensure you're adapting well to your new life and are able to access resources and put your initial support.",
      color: 'text-red-600',
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="_container">
        <MotionDiv className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Comprehensive Services</h2>
          <p className="text-xl text-text max-w-3xl mx-auto">
            We provide end-to-end support for your international career and education journey.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MotionByIndex i={index} key={index} className="service-card group">
              <div
                className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text leading-relaxed">{service.description}</p>
            </MotionByIndex>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

import { CheckCircle, FileText, Globe, Plane, Shield, Users } from 'lucide-react';
import React from 'react'

const ServicesSection = () => {
    
  const services = [
    {
      icon: Globe,
      title: 'Visa Application Guidance',
      description:
        'Expert guidance to navigate the complex visa application process and maximize your chances of success.',
      color: 'text-quaternary',
    },
    {
      icon: FileText,
      title: 'Document Preparation',
      description:
        'Professional assistance in preparing all required documents, forms and supporting materials required for your application.',
      color: 'text-secondary',
    },
    {
      icon: Users,
      title: 'Interview Coaching',
      description:
        'One-on-one coaching sessions to help you prepare effective interview questions and present a compelling case to immigration officers.',
      color: 'text-[var(--primary-color-light)]',
    },
    {
      icon: Plane,
      title: 'Travel & Relocation Support',
      description:
        'We handle all the logistics of your travel and relocation experience, including booking flights to arranging housing, so you can focus on starting your new life abroad.',
      color: 'text-orange-600',
    },
    {
      icon: Shield,
      title: 'Post-Arrival Assistance',
      description:
        'Our team helps you get settled in your new country, including registering with local authorities, setting up bank accounts and more.',
      color: 'text-blue-600',
    },
    {
      icon: CheckCircle,
      title: 'Ongoing Check-ins',
      description:
        "We maintain regular contact to ensure you're adapting well to your new life and are able to access resources and put your initial support.",
      color: 'text-yellow-600',
    },
  ];

  return (
         <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--body-color)] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ServicesSection
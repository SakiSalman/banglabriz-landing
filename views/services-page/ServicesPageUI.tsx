'use client';

import { useState } from 'react';
import {
  Globe,
  FileText,
  Users,
  Shield,
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
  GraduationCap,
  Briefcase,
  HardHat,
  Building,
  Wrench,
  Factory,
} from 'lucide-react';

const ServicesPageUI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const studentServices = [
    {
      icon: GraduationCap,
      title: 'University Application Support',
      description:
        'Comprehensive guidance for university and college admissions, course selection, and application processes.',
      color: 'text-secondary',
    },
    {
      icon: FileText,
      title: 'Student Visa Assistance',
      description:
        'Expert support for student visa applications, documentation, and interview preparation.',
      color: 'text-[var(--primary-color-light)]',
    },
    {
      icon: Users,
      title: 'Academic Counseling',
      description:
        'Personalized academic guidance to help you choose the right educational path for your career goals.',
      color: 'text-quaternary',
    },
    {
      icon: Globe,
      title: 'Language Training',
      description:
        'IELTS, TOEFL, and language preparation courses to meet international education requirements.',
      color: 'text-blue-600',
    },
  ];

  const workerServices = [
    {
      icon: HardHat,
      title: 'Construction & Skilled Trades',
      description:
        'Connect with construction companies across Europe for positions in welding, masonry, plumbing, tiling, and painting.',
      color: 'text-orange-600',
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industrial',
      description:
        'Opportunities in manufacturing facilities, production lines, and industrial operations across multiple countries.',
      color: 'text-[var(--primary-color-light)]',
    },
    {
      icon: Building,
      title: 'Engineering & Technical',
      description:
        'Technical positions for qualified engineers and technicians in various European markets.',
      color: 'text-quaternary',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Operations',
      description:
        'Maintenance roles, equipment operation, and facility management positions with competitive salaries.',
      color: 'text-secondary',
    },
    {
      icon: Briefcase,
      title: 'Work Permit Processing',
      description:
        'Complete work permit and visa processing assistance for European countries including Lithuania, Croatia, Serbia, and Romania.',
      color: 'text-blue-600',
    },
    {
      icon: Shield,
      title: 'Legal & Documentation Support',
      description:
        'Professional assistance with all legal requirements, documentation, and compliance for international employment.',
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Explore Our Services
            </h1>
            <p className="text-lg text-[var(--body-color)] max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive support including application assistance for university and
              college admissions, guidance on selecting or changing courses, and support for student
              visas. We provide recognition of prior learning (RPL) and skills assessments, as well
              as coaching for language tests like PTE, NAATI, and IELTS. Our services extend to high
              school program assistance, arrival support such as housing and employment, and
              comprehensive migration consulting. We also offer various training courses including
              HACCP, workplace safety, general worker training, and hospitality operations.
              Additionally, we provide programs focused on sustainable tourism development.
            </p>
          </div>
        </div>
      </section>

      {/* Student Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-light mb-4">
              🎓 Student Services
            </h2>
            <p className="text-lg text-[var(--body-color)] max-w-3xl mx-auto">
              Comprehensive educational support and guidance for students pursuing international
              education opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--body-color)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="w-full bg-secondary hover:bg-secondary-light text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                  APPLY
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worker Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color-light)] mb-4">
              🧰 Worker Services
            </h2>
            <p className="text-lg text-[var(--body-color)] max-w-3xl mx-auto">
              International job opportunities with comprehensive support for skilled workers seeking
              employment abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workerServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--body-color)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="w-full bg-secondary hover:bg-secondary-light text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                  APPLY
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-quaternary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your career goals and find the perfect opportunity that
            matches your skills and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
              Apply Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-quaternary px-8 py-4 rounded-lg font-medium transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

    
    </div>
  );
};
export default ServicesPageUI;

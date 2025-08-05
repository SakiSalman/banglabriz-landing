import { ArrowRight, FileText, Globe, GraduationCap, Users } from 'lucide-react';
import React from 'react'

const StudentServices = () => {
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
  return (
   <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-light mb-4">
              🎓 Student Services
            </h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
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
                <p className="text-text leading-relaxed mb-6">
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
  )
}

export default StudentServices
import { ArrowRight, Briefcase, Building, Factory, HardHat, Shield, Wrench } from 'lucide-react';
import React from 'react'

const WorkerServices = () => {
    
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
         <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color-light)] mb-4">
              🧰 Worker Services
            </h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
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

export default WorkerServices
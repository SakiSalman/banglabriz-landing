import { MotionByIndex, MotionDiv } from '@/utils/motion.utils';
import { CheckCircle } from 'lucide-react';
import React, { useState } from 'react';

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description:
        'We begin by understanding your career goals, educational background, and personal preferences to create a tailored pathway.',
      highlights: [
        'Career goal assessment',
        'Educational background review',
        'Personal preference analysis',
      ],
      tags: ['Initial Consultation', 'Goal Setting', 'Profile Building'],
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description:
        'Our experts develop a comprehensive plan that outlines the best opportunities and pathways for your career journey.',
      highlights: ['Opportunity mapping', 'Timeline development', 'Resource planning'],
      tags: ['Strategy Development', 'Opportunity Analysis', 'Timeline Planning'],
    },
    {
      number: '03',
      title: 'Documentation & Preparation',
      description:
        'We guide you through all necessary documentation, application processes, and prepare you for interviews.',
      highlights: ['Document preparation', 'Application guidance', 'Interview coaching'],
      tags: ['Documentation', 'Application Support', 'Interview Prep'],
    },
    {
      number: '04',
      title: 'Application & Submission',
      description:
        'Our team ensures your applications are submitted correctly and on time, maximizing your chances of success.',
      highlights: ['Application submission', 'Quality assurance', 'Follow-up coordination'],
      tags: ['Application Management', 'Quality Control', 'Submission Tracking'],
    },
    {
      number: '05',
      title: 'Travel & Relocation',
      description:
        'We provide comprehensive support for your travel arrangements and initial relocation needs.',
      highlights: ['Travel arrangements', 'Accommodation support', 'Visa assistance'],
      tags: ['Travel Support', 'Relocation Aid', 'Visa Processing'],
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description:
        'Our commitment continues with ongoing check-ins and support to ensure your success in your new journey.',
      highlights: ['Regular check-ins', 'Continued guidance', 'Success monitoring'],
      tags: ['Ongoing Support', 'Success Tracking', 'Continuous Care'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="_container">
        <MotionDiv className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Our Proven Process</h2>
          <p className="text-base md:text-lg text-text x-auto">
            We follow a systematic 6-step approach to ensure your success in achieving your career
            and education goals.
          </p>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-8">
          {workSteps.map((step, index) => (
            <MotionByIndex
              i={index}
              key={index}
              className={`service-card cursor-pointer transition-all duration-300 ${
                activeStep === index ? 'ring-2 ring-secondary' : ''
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-start space-x-4">
                <div className="step-number">{step.number}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-text mb-4">{step.description}</p>
                  <ul className="space-y-2 mb-4">
                    {step.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-text">
                        <CheckCircle className="w-4 h-4 text-quaternary mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, idx) => (
                      <span key={idx} className="phase-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionByIndex>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

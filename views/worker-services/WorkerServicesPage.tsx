import React from 'react';
import ServiceBanner from '../services-page/components/ServiceBanner';
import ServicesCard, { ServiceCardProps } from '@/components/cards/ServicesCard';
import CTASection from '../home-page/components/CTASection';

const WorkerServicesPage = () => {
  const services: ServiceCardProps[] = [
    {
      country: 'Lithuania',
      flag: '🇱🇹',
      image:
        'https://images.pexels.com/photos/2901672/pexels-photo-2901672.jpeg?auto=compress&cs=tinysrgb&w=1600',
      processingTime: '45 days for appointment, 5 months for visa (TRC)',
      processingDetails: 'Standard processing timeline',
      requiredDocuments: [
        'Passport A to Z scanned copy',
        'Passport information page copy (Notarized)',
        'SSC certificate (attested)',
        'Work experience certificate from relevant job (Notarized)',
        'PCC',
        'Photo 35x45',
      ],
      returnPolicy: {
        refundable: '1 lac taka',
        nonRefundable: '50,000 taka',
      },
      gradient: 'from-amber-400/30 to-orange-600/30',
    },
    {
      country: 'Croatia',
      flag: '🇭🇷',
      image:
        'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1600',
      processingTime: '6-9 months processing time',
      processingDetails: 'Extended timeline due to high demand',
      jobDetails: {
        position: 'Welding',
      },
      requiredDocuments: ['Passport copy', 'Police clearance', 'CV', 'Work visa'],
      returnPolicy: {
        refundable: '1 lac taka',
        nonRefundable: '50,000 taka',
      },
      trainingRequirement: 'Must be trained enough',
      gradient: 'from-blue-400/30 to-red-500/30',
    },
    {
      country: 'Serbia',
      flag: '🇷🇸',
      image:
        'https://images.pexels.com/photos/2901216/pexels-photo-2901216.jpeg?auto=compress&cs=tinysrgb&w=1600',
      processingTime: '6 months processing time',
      processingDetails: 'Consistent processing timeline',
      jobDetails: {
        position: 'Multiple positions available',
      },
      requiredDocuments: [
        'Passport copy (minimum 2 years validity)',
        'School diploma (notary translated in English)',
        'Training certificate (notary translated in English)',
        'Experience certificate (for same job position as training certificate, notary translated in English)',
        'Police clearance',
      ],
      returnPolicy: {
        refundable: '1 lac taka',
        nonRefundable: '50,000 taka',
      },
      trainingRequirement:
        'Training required for any mentioned job. Training certificate needed after permit. Assistance provided if trouble managing certificate.',
      gradient: 'from-red-400/30 to-blue-600/30',
    },
    {
      country: 'Romania',
      flag: '🇷🇴',
      image:
        'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1600',
      processingTime: '6-9 months processing time',
      processingDetails: 'Variable processing based on application volume',
      jobDetails: {
        position: 'Welding',
      },
      requiredDocuments: ['Passport copy', 'Police clearance', 'CV', 'Work visa'],
      returnPolicy: {
        refundable: '50,000',
        nonRefundable: '1,30,000 (Embassy fees, lawyer fees and others)',
      },
      trainingRequirement: 'Must be trained enough',
      paymentProcedure: {
        totalPackage: '9,00,000 (Embassy fees, Insurance, Air fare & authorization cost included)',
        advance: '80,000 Taka',
        afterPermit: '1,00,000 Taka',
      },
      additionalInfo:
        'It will take 6 months to issue the work permit depending on the situation. Then after visa application, it will take 4-6 months to get the appointment. After getting the appointment, candidate have to apply for Indian visa as early as possible. In total we will take 12 months for the whole process. No Submission Slip will Be Provided. Work permit copy will be provided. Embassy Submission Slip will be provided.',
      gradient: 'from-yellow-400/30 to-red-600/30',
    },
  ];
  return (
    <div className="">
      <ServiceBanner />

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 mb-10">
        {/* Header */}
        <div className="_container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {services.map((service, index) => (
              <ServicesCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default WorkerServicesPage;

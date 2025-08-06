import { MotionDiv } from '@/utils/motion.utils';
import { Briefcase, CheckCircle, Clock, DollarSign, FileText, Globe, Users } from 'lucide-react';

export interface ServiceCardProps {
  country: string;
  flag: string;
  image: string;
  processingTime: string;
  processingDetails: string;
  jobDetails?: {
    position: string;
    salary?: string;
  };
  requiredDocuments: string[];
  returnPolicy: {
    refundable: string;
    nonRefundable: string;
  };
  trainingRequirement?: string;
  paymentProcedure?: {
    totalPackage: string;
    advance: string;
    afterPermit?: string;
  };
  additionalInfo?: string;
  gradient: string;
}

const ServicesCard: React.FC<ServiceCardProps> = ({
  country,
  flag,
  image,
  processingTime,
  processingDetails,
  jobDetails,
  requiredDocuments,
  returnPolicy,
  trainingRequirement,
  paymentProcedure,
  additionalInfo,
  gradient,
}) => {
  return (
    <MotionDiv className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200">
      {/* Header with Country Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={country}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60`}></div>
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
              <span className="text-lg">{flag}</span>
            </div>
            <span className="font-semibold text-gray-800">{country}</span>
          </div>
        </div>
      </div>

      <div className="p-6 grid  grid-cols-1 gap-5">
        <div className="flex-1 space-y-6">
          {/* Processing Time */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Processing Time</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{processingTime}</p>
              <p className="text-gray-500 text-xs mt-1">{processingDetails}</p>
            </div>
          </div>

          {/* Job Details */}
          {jobDetails && (
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Job Details</h3>
                <p className="text-gray-600 text-sm">Position: {jobDetails.position}</p>
                {jobDetails.salary && (
                  <p className="text-gray-600 text-sm">Salary: {jobDetails.salary}</p>
                )}
              </div>
            </div>
          )}

          {/* Required Documents */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Required Documents</h3>
              <ul className="space-y-1">
                {requiredDocuments.slice(0, 3).map((doc, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
                {requiredDocuments.length > 3 && (
                  <li className="text-xs text-gray-500 italic">
                    +{requiredDocuments.length - 3} more documents required
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Return Policy */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Return Policy</h3>
              <div className="space-y-1 text-sm">
                <p className="text-gray-600">
                  <span className="text-green-600 font-medium">Refundable:</span>{' '}
                  {returnPolicy.refundable}
                </p>
                <p className="text-gray-600">
                  <span className="text-red-600 font-medium">Non-refundable:</span>{' '}
                  {returnPolicy.nonRefundable}
                </p>
              </div>
            </div>
          </div>

          {/* Training Requirement */}
          {trainingRequirement && (
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Training Requirement</h3>
                <p className="text-gray-600 text-sm">{trainingRequirement}</p>
              </div>
            </div>
          )}

          {/* Payment Procedure */}
          {paymentProcedure && (
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                Payment Procedure
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium">Total Package:</span>{' '}
                  {paymentProcedure.totalPackage}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Advance:</span> {paymentProcedure.advance}
                </p>
                {paymentProcedure.afterPermit && (
                  <p className="text-gray-600">
                    <span className="font-medium">After Permit:</span>{' '}
                    {paymentProcedure.afterPermit}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Additional Information */}
          {additionalInfo && (
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-blue-600" />
                Additional Information
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{additionalInfo}</p>
            </div>
          )}
        </div>

        {/* Apply Button */}
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg hover:shadow-xl">
            Apply Now
          </button>
          <div className="flex space-x-2">
            <button className="flex-1 bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-50">
              Learn More
            </button>
            <button className="flex-1 bg-green-50 border-2 border-green-200 hover:border-green-400 text-green-700 hover:text-green-800 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:bg-green-100">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ServicesCard;

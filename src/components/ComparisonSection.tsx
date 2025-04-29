import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const features = [
    'Automated Client Follow-ups',
    'AI Invoice Processing',
    'Financial Report Generation',
    'User-friendly Interface',
    'Customizable Dashboard',
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pretty Dashboard vs Others
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we compare to traditional CRM solutions that consume more time than they save.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-6 px-4 border-b-2 border-gray-200"></th>
                <th className="py-6 px-4 border-b-2 border-gray-200">
                  <div className="text-xl font-bold text-blue-600">Pretty Dashboard</div>
                </th>
                <th className="py-6 px-4 border-b-2 border-gray-200">
                  <div className="text-xl font-bold text-gray-500">Traditional CRMs</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-4 px-4 font-medium text-gray-900">{feature}</td>
                  <td className="py-4 px-4 text-center">
                    <Check className="mx-auto text-green-500 w-6 h-6" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    {index < 3 ? (
                      <X className="mx-auto text-red-500 w-6 h-6" />
                    ) : (
                      <Check className="mx-auto text-gray-400 w-6 h-6" />
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-white">
                <td className="py-4 px-4 font-medium text-gray-900">Average Hours Saved Weekly</td>
                <td className="py-4 px-4 text-center font-bold text-blue-600">20+ hours</td>
                <td className="py-4 px-4 text-center font-bold text-gray-500">5 hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
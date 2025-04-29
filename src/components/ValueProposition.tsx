import React from 'react';
import { Clock, FileSpreadsheet, LineChart } from 'lucide-react';

const features = [
  {
    title: 'Automated Reminders',
    description: 'Never miss a follow-up with intelligent reminders that learn from your patterns and prioritize what matters most.',
    icon: <Clock className="w-10 h-10 text-blue-600" />,
  },
  {
    title: 'AI-assisted Invoice-to-Journal Integrations',
    description: 'Turn invoices into journal entries instantly with our AI that recognizes patterns and automates financial record-keeping.',
    icon: <FileSpreadsheet className="w-10 h-10 text-blue-600" />,
  },
  {
    title: 'AI-assisted Financial Reports',
    description: 'Generate insightful financial reports with a click. Our AI analyzes trends and presents data in easy-to-understand visualizations.',
    icon: <LineChart className="w-10 h-10 text-blue-600" />,
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Businesses Choose Pretty Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform is designed to eliminate busywork and give you back hours of productive time each week.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
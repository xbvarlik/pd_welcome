import { useState } from 'react';
import pricingData from '../pricing.json';

const TABS = [
  { key: 'annual', label: 'Yıllık' },
  { key: 'monthly', label: 'Aylık' },
];

export const PricingSection = () => {
  const [selectedTab, setSelectedTab] = useState<'annual' | 'monthly'>('annual');
  const { pricing } = pricingData as any;

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Fiyatlandırma</h2>
          <div className="inline-flex rounded-lg bg-white shadow-sm border">
            {TABS.map(tab => (
              <button
                key={tab.key}
                className={`px-6 py-2 font-medium rounded-lg transition-colors duration-200 ${
                  selectedTab === tab.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedTab(tab.key as 'annual' | 'monthly')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {pricing[selectedTab].map((pkg: any) => (
            <div
              key={pkg.name}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
              <div className="text-2xl font-bold text-blue-700 mb-1">{pkg.price}</div>
              {selectedTab === 'annual' && pkg.annualPrice && (
                <div className="text-xs text-gray-500 mb-3">{pkg.annualPrice}</div>
              )}
              <ul className="text-gray-700 mb-4 space-y-2 text-left w-full">
                {pkg.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-blue-500">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-gray-600 text-sm space-y-1">
          {pricing.extraAiCredits.map((credit: any, i: number) => (
            <div key={i}>
              +{credit.amount} AI kredi: <span className="font-semibold">{credit.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
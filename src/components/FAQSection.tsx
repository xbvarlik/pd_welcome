import { useState } from 'react';
import faqData from '../faq.json';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pretty Dashboard hakkında merak ettiğiniz her şey
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((category: FAQCategory, categoryIndex: number) => (
            <div key={category.category} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item: FAQItem, itemIndex: number) => {
                  const index = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={item.q}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left focus:outline-none focus-visible:outline-gray-300"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isOpen}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-medium text-gray-900">
                            {item.q}
                          </h4>
                          <svg
                            className={`w-5 h-5 text-gray-500 transform transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`px-6 transition-all duration-200 ease-in-out ${
                          isOpen ? 'pb-4' : 'h-0 overflow-hidden'
                        }`}
                      >
                        <p className="text-gray-600">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
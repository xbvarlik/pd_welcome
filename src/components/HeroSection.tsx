import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 pt-32 pb-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-4xl">
            Sizin İçin Çalışan CRM — Tersi Değil
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl">
            Karmaşık iş akışlarına ve manuel veri girişine veda edin. Sezgisel gösterge panelimiz, 
            AI ile rutin görevlerinizi otomatikleştirerek size her hafta saatler kazandırır.
          </p>
          <a 
            href="https://calendly.com/barisvarlik-prettydashboard/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>Hemen Başlayın</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
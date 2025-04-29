import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Yüzlerce Saat Tasarruf Etmeye Hazır mısınız?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Pretty Dashboard ile operasyonlarını düzene sokmuş ve değerli zamanlarını geri kazanmış binlerce işletmeye katılın.
        </p>
        <div className="flex justify-center mb-12">
          <a 
            href="https://calendly.com/barisvarlik-prettydashboard/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white text-blue-700 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Hemen Başlayın</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
        <div className="text-blue-100 text-center">
          <p className="mb-1">info@prettydashboard.com</p>
          <p>+90 541 944 69 19</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Clock, FileSpreadsheet, LineChart, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HoursSavedCounter: React.FC<{ maxValue: number }> = ({ maxValue }) => {
  const [hoursValue, setHoursValue] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = Math.min(scrollPosition / scrollHeight, 1);
      const newValue = Math.round(scrollPercentage * maxValue);
      setHoursValue(newValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxValue]);

  return (
    <div className="fixed right-8 top-1/4 z-50 transform translate-y-[-50%] flex flex-col items-center">
      <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl px-4 py-3 transition-all duration-300 hover:shadow-xl">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1 transition-all">
            {hoursValue}
          </div>
          <div className="text-sm font-medium text-gray-600">{t('counter.label')}</div>
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 pt-32 pb-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-4xl">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl">
            {t('hero.subtitle')}
          </p>
          <a 
            href="https://calendly.com/barisvarlik-prettydashboard/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>{t('hero.cta')}</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      title: t('valueProposition.features.reminders.title'),
      description: t('valueProposition.features.reminders.description'),
      icon: <Clock className="w-10 h-10 text-blue-600" />,
    },
    {
      title: t('valueProposition.features.invoices.title'),
      description: t('valueProposition.features.invoices.description'),
      icon: <FileSpreadsheet className="w-10 h-10 text-blue-600" />,
    },
    {
      title: t('valueProposition.features.reports.title'),
      description: t('valueProposition.features.reports.description'),
      icon: <LineChart className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('valueProposition.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('valueProposition.subtitle')}
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

const ComparisonSection: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    t('comparison.features.followups'),
    t('comparison.features.invoiceProcessing'),
    t('comparison.features.reports'),
    t('comparison.features.interface')
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('comparison.subtitle')}
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
                <td className="py-4 px-4 font-medium text-gray-900">{t('comparison.features.hoursLabel')}</td>
                <td className="py-4 px-4 text-center font-bold text-blue-600">{t('comparison.features.ourHours')}</td>
                <td className="py-4 px-4 text-center font-bold text-gray-500">{t('comparison.features.theirHours')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      quote: "Pretty Dashboard idari işlerimizi yarıya indirdi. Sadece AI fatura işleme özelliği, muhasebe ekibimize her hafta 15 saat kazandırıyor.",
      author: "Ahmet Yılmaz",
      role: "Mali İşler Müdürü",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Daha önce birçok CRM denedik, ancak iş yükümüzü arttırmak yerine gerçekten zaman kazandıran ilk sistem bu oldu.",
      author: "Ayşe Kaya",
      role: "Operasyon Direktörü",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Finansal raporlar o kadar sezgisel ki, tüm ekibimiz herhangi bir eğitim almadan anlayabiliyor. Toplantılarımız için oyun değiştirici oldu.",
      author: "Mehmet Demir",
      role: "CEO",
      rating: 4,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex flex-col">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex justify-center mb-12">
          <a 
            href="https://calendly.com/barisvarlik-prettydashboard/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white text-blue-700 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>{t('cta.primary')}</span>
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

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HoursSavedCounter maxValue={80} />
      <HeroSection />
      <ValueProposition />
      <ComparisonSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Dashboard />
    </div>
  );
}

export default App;
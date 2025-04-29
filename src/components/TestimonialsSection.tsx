import React from 'react';
import { Star } from 'lucide-react';

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

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Müşterilerimiz Ne Diyor
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sadece bizim sözümüze güvenmeyin. İşte sizin gibi işletmelerin deneyimleri.
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

export default TestimonialsSection;
import { useState } from 'react';

const navLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Değer Önerisi', href: '#value-prop' },
  { label: 'Karşılaştırma', href: '#comparison' },
  { label: 'Yorumlar', href: '#testimonials' },
  { label: 'SSS', href: '#faq' },
  { label: 'Fiyatlandırma', href: '#pricing' },
  { label: 'İletişim', href: '#cta' },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#hero" className="text-xl font-bold text-blue-700 tracking-tight">Pretty Dashboard</a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden flex items-center p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}; 
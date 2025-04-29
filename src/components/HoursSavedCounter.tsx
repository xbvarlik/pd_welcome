import React, { useState, useEffect } from 'react';

interface HoursSavedCounterProps {
  maxValue: number;
}

const HoursSavedCounter: React.FC<HoursSavedCounterProps> = ({ maxValue }) => {
  const [hoursValue, setHoursValue] = useState(0);

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
          <div className="text-sm font-medium text-gray-600">Hours Saved</div>
        </div>
      </div>
    </div>
  );
};

export default HoursSavedCounter;
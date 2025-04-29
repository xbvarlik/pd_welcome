import React from 'react';
import HoursSavedCounter from './HoursSavedCounter';
import HeroSection from './HeroSection';
import ValueProposition from './ValueProposition';
import ComparisonSection from './ComparisonSection';
import TestimonialsSection from './TestimonialsSection';
import CallToAction from './CallToAction';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HoursSavedCounter maxValue={500} />
      <HeroSection />
      <ValueProposition />
      <ComparisonSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { Target, CheckCircle2, Sparkles } from 'lucide-react';

export const AboutVision: React.FC = () => (
  <AboutLayout title="Vision & Mission" subtitle="Strategic roadmap for institutional excellence." icon={Target}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-primary p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
        <Target className="absolute top-0 right-0 w-64 h-64 text-white/5 -translate-y-10 translate-x-10" />
        <h3 className="text-3xl font-serif font-bold mb-8 text-secondary relative z-10">Our Vision</h3>
        <p className="text-xl leading-relaxed italic font-light relative z-10">
          "To be a premier global center for quality education, fostering innovation, professional ethics, and research to serve the evolving needs of society and humanity."
        </p>
      </div>
      <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
        <h3 className="text-3xl font-serif font-bold mb-8 text-primary">Our Mission</h3>
        <ul className="space-y-6">
          {[
            'To provide value-based education through industry-integrated curriculum.',
            'To cultivate a research-centric environment in all professional disciplines.',
            'To develop leaders with high moral standards and social responsibility.',
            'To bridge the gap between academic theory and practical industry application.'
          ].map((m, i) => (
            <li key={i} className="flex gap-4 items-start font-medium text-customText">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" /> {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </AboutLayout>
);


import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { History } from 'lucide-react';

export const AboutHistory: React.FC = () => (
  <AboutLayout title="History & Growth" subtitle="From a single vision to a multi-disciplinary empire." icon={History}>
    <div className="space-y-12">
      <div className="relative border-l-4 border-primary/10 ml-6 space-y-16 py-10">
        {[
          { year: '1990', title: 'The Foundation', desc: 'Karnataka Educational Trust was established with a focus on primary and secondary school education.' },
          { year: '2003', title: 'Pharmacy Milestone', desc: 'Establishment of the Karnataka College of Pharmacy, our first professional higher education venture.' },
          { year: '2005', title: 'Healthcare Expansion', desc: 'Inception of the College of Nursing and School of Nursing to meet global healthcare demands.' },
          { year: '2012', title: 'Diversified Portfolios', desc: 'Launch of Management, Law, and Allied Health sciences under the group umbrella.' },
          { year: '2024', title: 'Modern Excellence', desc: 'A tech-integrated campus serving thousands of students across 10 institutions.' }
        ].map((item, i) => (
          <div key={i} className="relative pl-12">
            <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-lg" />
            <span className="text-2xl font-black text-primary mb-2 block">{item.year}</span>
            <h4 className="text-xl font-bold text-customText mb-2">{item.title}</h4>
            <p className="text-gray-500 max-w-2xl font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </AboutLayout>
);

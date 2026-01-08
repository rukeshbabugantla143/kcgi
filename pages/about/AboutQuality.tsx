
import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutQuality: React.FC = () => (
  <AboutLayout title="Quality Assurance" subtitle="Rigorous standards for high-value degrees." icon={ShieldCheck}>
    <div className="space-y-12">
      <div className="prose prose-lg text-customText max-w-none font-medium mb-12">
        <p>Our commitment to quality is unwavering. Each institution under the group undergoes rigorous internal and external academic audits to ensure compliance with the highest educational standards in India.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'NAAC Accredited', text: 'Institutional Grade A certification for academic and infrastructure audits.' },
          { title: 'AICTE Approved', text: 'All technical and management courses comply with AICTE standards.' },
          { title: 'PCI & NMC Recognition', text: 'Approved by statutory councils for medical and pharmacy practice.' },
          { title: 'RGUHS Affiliation', text: 'Member of the premier Rajiv Gandhi University of Health Sciences.' }
        ].map((item, i) => (
          <div key={i} className="flex gap-6 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
            <CheckCircle2 className="w-10 h-10 text-secondary flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AboutLayout>
);

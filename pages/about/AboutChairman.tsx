
import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { UserCheck, Quote } from 'lucide-react';

export const AboutChairman: React.FC = () => (
  <AboutLayout title="Chairman's Message" subtitle="A word from our visionary leader, Prof. Basavaraj Ramanal." icon={UserCheck}>
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      <div className="w-full lg:w-1/3">
        <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
          <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png" className="w-full h-full object-cover" alt="Chairman Prof. Basavaraj Ramanal" />
        </div>
      </div>
      <div className="w-full lg:w-2/3 space-y-8">
        <Quote className="w-16 h-16 text-primary/10" />
        <h3 className="text-3xl font-serif font-bold text-primary">Empowering Minds, Shaping Futures</h3>
        <div className="prose prose-lg text-customText font-medium italic leading-relaxed">
          <p>
            "Education is not just about earning degrees; it is about character building and preparing for the challenges of life. At Karnataka College Group, we provide an environment where students are encouraged to think independently and innovate."
          </p>
          <p>
            "Our legacy of 30 years is a testament to the trust of thousands of parents. We remain committed to providing world-class infrastructure and pedagogical support to our students."
          </p>
        </div>
        <div className="pt-6 border-t border-gray-100">
          <h4 className="text-2xl font-bold text-primary">Prof. Basavaraj Ramanal</h4>
          <p className="text-sm font-black uppercase text-secondary tracking-widest mt-1">Chairman & Managing Trustee</p>
        </div>
      </div>
    </div>
  </AboutLayout>
);

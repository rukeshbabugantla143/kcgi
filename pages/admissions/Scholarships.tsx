
import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { Award, Star, Users, Trophy } from 'lucide-react';

export const Scholarships: React.FC = () => (
  <AdmissionsLayout 
    title="Scholarships" 
    subtitle="Recognizing merit and supporting ambition through financial grants." 
    icon={Award}
  >
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Star, title: 'Merit Scholarship', desc: 'Up to 50% fee waiver for students scoring above 90% in boards.' },
          { icon: Trophy, title: 'Sports Excellence', desc: 'Dedicated grants for State and National level athletes.' },
          { icon: Users, title: 'EWS Grant', desc: 'Financial assistance for students from economically weaker sections.' }
        ].map((s, i) => (
          <div key={i} className="p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm text-center group hover:bg-primary transition-all duration-500">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-white group-hover:text-primary transition-all"><s.icon className="w-7 h-7" /></div>
            <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-white">{s.title}</h4>
            <p className="text-xs text-gray-400 font-medium leading-relaxed group-hover:text-white/60">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </AdmissionsLayout>
);

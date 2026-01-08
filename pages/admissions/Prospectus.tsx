import React from 'react';
// Fix: Corrected import source for AdmissionsLayout to point to AdmissionsLayout instead of AcademicsLayout
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { BookOpen, Download, FileText } from 'lucide-react';
import { INSTITUTIONS } from '../../constants';

export const Prospectus: React.FC = () => (
  <AdmissionsLayout 
    title="Digital Prospectus" 
    subtitle="Download our detailed course guides and institutional brochures for 2026-27." 
    icon={BookOpen}
  >
    <div className="space-y-12">
      <div className="bg-gray-50 p-12 rounded-[4rem] border border-gray-100 flex flex-col md:flex-row items-center gap-12">
        <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl"><FileText className="w-12 h-12" /></div>
        <div className="flex-grow">
          <h3 className="text-2xl font-serif font-bold text-primary">General Group Prospectus</h3>
          <p className="text-sm text-gray-500 font-medium mt-2">Comprehensive overview of the Karnataka College Group academic universe.</p>
        </div>
        <button className="bg-secondary text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all">Download Now</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INSTITUTIONS.map((inst, i) => (
          <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl flex justify-between items-center group hover:border-primary transition-all shadow-sm">
            <div>
              <h4 className="font-bold text-primary text-sm">{inst.name}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Brochure 2026-27</p>
            </div>
            <button className="p-4 bg-gray-50 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all"><Download className="w-5 h-5" /></button>
          </div>
        ))}
      </div>
    </div>
  </AdmissionsLayout>
);
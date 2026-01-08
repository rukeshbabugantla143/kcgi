
import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Eligibility: React.FC = () => (
  <AdmissionsLayout 
    title="Eligibility Criteria" 
    subtitle="Minimum academic requirements for enrollment across all institutional units." 
    icon={ShieldCheck}
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { 
            unit: 'Pharmacy (B.Pharm / Pharm.D)', 
            req: ['10+2 / PUC with Physics, Chemistry & Biology/Maths', 'Minimum 45% aggregate in PCB/PCM', 'KCET / NEET qualification as per Govt. norms'] 
          },
          { 
            unit: 'Nursing (B.Sc / GNM)', 
            req: ['10+2 with Physics, Chemistry, Biology & English', 'Min 45% for B.Sc / 40% for GNM', 'Registered through Karnataka Nursing Council'] 
          },
          { 
            unit: 'Management (MBA)', 
            req: ['Bachelor degree in any stream', 'Min 50% aggregate (45% for reserved)', 'Valid KMAT / MAT / CAT / PGCET score'] 
          },
          { 
            unit: 'Law (LLB / Integrated)', 
            req: ['Graduation (3yr LLB) or 10+2 (5yr Intg.)', 'Min 45% aggregate score', 'Compliance with KSLU & Bar Council norms'] 
          }
        ].map((cat, i) => (
          <div key={i} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group">
            <h3 className="text-xl font-bold text-primary mb-6 border-b border-gray-200 pb-4">{cat.unit}</h3>
            <ul className="space-y-4">
              {cat.req.map((r, j) => (
                <li key={j} className="flex gap-3 text-sm font-medium text-gray-500">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </AdmissionsLayout>
);

import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { Send, Phone, Mail, MapPin, ArrowRight, User, PhoneCall, MailSearch, GraduationCap, MessageSquare } from 'lucide-react';
import { INSTITUTIONS } from '../../constants';

export const AdmissionEnquiry: React.FC = () => (
  <AdmissionsLayout 
    title="Admission Enquiry" 
    subtitle="Connect with our counselors to start your academic journey for 2026-27." 
    icon={Send}
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div className="lg:col-span-2">
        <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-2xl shadow-primary/5">
          <h3 className="text-3xl font-serif font-bold text-primary mb-12 flex items-center gap-4">
             <div className="w-1.5 h-10 bg-secondary rounded-full" /> Personal Information
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Full Legal Name</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input type="text" className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" placeholder="As per 10th marksheet" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Mobile Number</label>
              <div className="relative">
                <PhoneCall className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input type="tel" className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" placeholder="+91 00000 00000" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Email Address</label>
              <div className="relative">
                <MailSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input type="email" className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" placeholder="name@domain.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Preferred Program</label>
              <div className="relative">
                <GraduationCap className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <select className="w-full pl-14 pr-10 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold appearance-none bg-no-repeat">
                  <option value="">Select an Institution</option>
                  {INSTITUTIONS.map(inst => <option key={inst.id} value={inst.id}>{inst.name}</option>)}
                </select>
              </div>
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Describe your query</label>
              <div className="relative">
                <MessageSquare className="absolute left-5 top-6 w-4 h-4 text-secondary" />
                <textarea rows={4} className="w-full pl-14 pr-6 py-6 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold resize-none" placeholder="Any specific requirements or questions?"></textarea>
              </div>
            </div>
            <button className="md:col-span-2 py-6 bg-primary text-white font-black text-xs uppercase tracking-[0.4em] rounded-2xl shadow-xl hover:bg-secondary transition-all flex items-center justify-center gap-4 group mt-4">
              Submit Enquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <div className="space-y-10">
        <div className="bg-primary p-12 rounded-[4rem] text-white shadow-xl relative overflow-hidden">
           <h3 className="text-xl font-bold mb-10 text-secondary border-b border-white/10 pb-4">Campus Info</h3>
           <div className="space-y-8">
              <div className="flex gap-5">
                <MapPin className="w-6 h-6 text-secondary shrink-0" />
                <p className="text-xs font-medium leading-relaxed opacity-70">33/2, Hegde Nagar Main Rd, Yelahanka, Thirumenahalli, Bengaluru, 560064</p>
              </div>
              <div className="flex gap-5">
                <Phone className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <p className="text-lg font-bold">+91 80 1234 5678</p>
                  <p className="text-[9px] uppercase font-black text-white/40 tracking-widest mt-1">Direct Admissions</p>
                </div>
              </div>
              <div className="flex gap-5">
                <Mail className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <p className="text-sm font-bold">admissions@karnatakacollege.edu</p>
                  <p className="text-[9px] uppercase font-black text-white/40 tracking-widest mt-1">Official Helpdesk</p>
                </div>
              </div>
           </div>
        </div>
        
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6"><GraduationCap className="w-8 h-8"/></div>
           <h4 className="font-bold text-primary mb-2">Academic Visit</h4>
           <p className="text-xs text-gray-500 font-medium leading-relaxed">Book a physical tour of our laboratories and smart classrooms.</p>
        </div>
      </div>
    </div>
  </AdmissionsLayout>
);
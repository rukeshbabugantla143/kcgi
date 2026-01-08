
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Microscope,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { INSTITUTIONS } from '../constants';

export const InstitutionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const inst = INSTITUTIONS.find(i => i.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!inst) return <Navigate to="/" />;

  return (
    <div className="pt-16 md:pt-24 min-h-screen bg-white">
      {/* Cinematic Banner - VIBRANT OVERLAY */}
      <div className="relative h-[45vh] md:h-[75vh] min-h-[400px] overflow-hidden">
        <img 
          src={inst.image} 
          alt={inst.name} 
          className="w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex items-end">
          <div className="container mx-auto px-6 pb-16 md:pb-24">
            <nav className="hidden md:flex items-center gap-2 text-white/70 text-[10px] mb-8 uppercase tracking-[0.4em] font-black">
              <Link to="/" className="hover:text-secondary">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/institutions" className="hover:text-secondary">Institutions</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-secondary">{inst.name}</span>
            </nav>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 max-w-5xl leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">{inst.name}</h1>
            <div className="flex items-center gap-4">
               <div className="w-12 h-0.5 bg-secondary" />
               <p className="text-sm md:text-2xl text-secondary font-black tracking-[0.2em] uppercase">{inst.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-24 md:space-y-40 order-2 lg:order-1">
            
            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-3">
                   <div className="w-2 h-10 md:h-14 bg-secondary rounded-full" />
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">Academic Overview</h2>
                </div>
                <div className="prose prose-lg md:prose-2xl text-customText max-w-none space-y-8 font-light leading-relaxed">
                   <p className="text-2xl md:text-3xl font-medium text-primary/80 leading-snug italic">"{inst.overview}"</p>
                </div>
              </div>
            </section>

            {/* Programs - COLOUR CODED */}
            <section id="programs" className="scroll-mt-32">
              <div className="space-y-12 md:space-y-20">
                <div className="inline-flex items-center gap-3">
                   <div className="w-2 h-10 md:h-14 bg-secondary rounded-full" />
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">Offered Programs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {inst.courses.map((course, idx) => (
                    <div key={idx} className="bg-gray-50 p-10 md:p-14 rounded-[3rem] border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary group-hover:scale-150 transition-all duration-700" />
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all relative z-10 shadow-sm">
                        <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold text-primary mb-8 relative z-10">{course.name}</h3>
                      <div className="space-y-6 text-sm md:text-lg font-bold text-gray-500 relative z-10">
                        <div className="flex justify-between border-b border-gray-100 pb-4">
                           <span className="uppercase tracking-widest text-[10px] md:text-xs">Duration</span>
                           <span className="text-secondary">{course.duration}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                           <span className="uppercase tracking-widest text-[10px] md:text-xs">Eligibility</span>
                           <span className="text-primary leading-tight font-medium opacity-80">{course.eligibility}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Placements - VIBRANT COLOUR */}
            <section id="placements" className="scroll-mt-32">
              <div className="bg-gradient-to-br from-primary to-accent1 p-12 md:p-24 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <h3 className="text-2xl md:text-4xl font-serif font-bold mb-12 flex items-center gap-4 relative z-10"><Briefcase className="text-secondary w-8 h-8 md:w-10 md:h-10"/> Placement Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                   {inst.placements.map((p, i) => (
                      <div key={i} className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 font-black text-sm md:text-lg hover:bg-secondary hover:border-white transition-all uppercase tracking-widest">{p}</div>
                   ))}
                </div>
              </div>
            </section>

            {/* Facilities */}
            <section id="facilities" className="scroll-mt-32">
              <div className="inline-flex items-center gap-3 mb-16">
                 <div className="w-2 h-10 md:h-14 bg-secondary rounded-full" />
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">Unit Infrastructure</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {inst.facilities.map((fac, idx) => (
                  <div key={idx} className="p-10 md:p-12 bg-gray-50 rounded-[2.5rem] text-center flex flex-col items-center gap-6 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                       <Microscope className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.2em]">{fac}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Area - VIBRANT */}
          <div className="lg:w-1/3 order-1 lg:order-2">
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] lg:sticky lg:top-36 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-secondary" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-10">Admission Office</h3>
              <div className="space-y-8 mb-16">
                <div className="flex gap-6"><div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary shrink-0"><MapPin className="w-5 h-5"/></div><p className="text-sm md:text-lg font-medium text-gray-500 leading-relaxed">{inst.contact.address}</p></div>
                <div className="flex gap-6"><div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary shrink-0"><Phone className="w-5 h-5"/></div><p className="text-sm md:text-lg font-bold text-primary">{inst.contact.phone}</p></div>
                <div className="flex gap-6"><div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary shrink-0"><Mail className="w-5 h-5"/></div><p className="text-sm md:text-lg font-medium text-gray-500 break-all">{inst.contact.email}</p></div>
              </div>
              <div className="space-y-4">
                <Link to="/admissions/enquiry" className="w-full bg-primary text-white py-5 md:py-6 rounded-2xl font-black text-sm md:text-lg hover:bg-secondary transition-all flex items-center justify-center gap-3 shadow-xl transform hover:-translate-y-1 uppercase tracking-widest">Apply Online Now <ArrowRight className="w-5 h-5" /></Link>
                <button className="w-full bg-white border-2 border-primary text-primary py-5 md:py-6 rounded-2xl font-black text-sm md:text-lg hover:bg-primary/5 transition-all uppercase tracking-widest">Digital Prospectus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

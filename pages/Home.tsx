import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Users, 
  BookOpen, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  Pill,
  HeartPulse,
  Briefcase,
  Scale,
  Microscope,
  Activity,
  GraduationCap
} from 'lucide-react';
import { INSTITUTIONS } from '../constants';

export const Home: React.FC = () => {
  const partnerLogos = [
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Pfizer', url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Pfizer_%282021%29.svg' },
    { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/2560px-Logo_of_Deloitte.svg.png' },
    { name: 'TCS', url: 'https://vectorseek.com/wp-content/uploads/2023/08/TCS-Tata-Consultancy-Services-Logo-Vector.svg-.png' },
    { name: 'Biocon', url: 'https://www.logo.wine/a/logo/Biocon/Biocon-Logo.wine.svg' },
  ];

  const affiliationLogos = [
    { name: 'AICTE', url: 'https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png', desc: 'Approved by AICTE' },
    { name: 'PCI', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767769752/Karnataka-Group-of-institute-brand-Guidline.pdf.pdf-3_1_qegbvr.svg', desc: 'Recognized by PCI' },
    { name: 'RGUHS', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepoRcwGHChReAO7cHODgrBTZGOrC9W--3xQ&s', desc: 'Affiliated to RGUHS' },
    { name: 'NAAC', url: 'https://sjbit.edu.in/wp-content/uploads/2021/07/NAAC-Logo-250x250-1.png', desc: 'NAAC Accredited Grade A' },
    { name: 'INC', url: 'https://images.seeklogo.com/logo-png/39/1/nic-inc-logo-png_seeklogo-392312.png', desc: 'Recognized by INC' },
    { name: 'KSLU', url: 'https://iras-proxy-assets.s3.ap-south-1.amazonaws.com/60942ff751f89d059ff43066/logo/5-7-2021--4-16-35-am-logo.png', desc: 'Affiliated to KSLU' },
    { name: 'KNC', url: 'https://vidyarthiinstitutions.com/img/affiliations/3.jpg', desc: 'Recognized by KNC' },
    { name: 'Govt. Karnataka', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSwtz3LdNqfcixXpoz5U1GVZMkrGoZEN8pg&s', desc: 'Govt. of Karnataka' }
  ];

  const officialVideoUrl = "https://res.cloudinary.com/dejcpd56d/video/upload/v1767590647/Welcome-to-Karnataka-College-Group-of-Institutions-_-Where-Education-Meets-Excellence_riipez.mp4";

  const programCategories = [
    { icon: Pill, title: 'Pharmacy', text: 'B.Pharm, M.Pharm', color: 'bg-green-50 text-green-600' },
    { icon: HeartPulse, title: 'Nursing', text: 'B.Sc, M.Sc, GNM', color: 'bg-blue-50 text-blue-600' },
    { icon: Briefcase, title: 'Management', text: 'MBA, BBA, B.Com', color: 'bg-orange-50 text-orange-600' },
    { icon: Scale, title: 'Law', text: 'LLB, Integrated', color: 'bg-red-50 text-red-700' },
    { icon: Microscope, title: 'Allied Health', text: 'Diagnostics', color: 'bg-indigo-50 text-indigo-600' },
    { icon: Activity, title: 'Physio', text: 'BPT, MPT', color: 'bg-teal-50 text-teal-600' },
  ];

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src={officialVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </section>

      {/* Intro Stats Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4">Legacy of Excellence</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
              Shaping Minds for Three Decades
            </h3>
            <p className="text-lg md:text-2xl text-customText leading-relaxed font-light">
              Since 1990, we have been a cornerstone of professional education in Bengaluru, combining traditional values with cutting-edge academic innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { icon: Users, label: 'Global Alumni', value: '55,000+', color: 'text-blue-500' },
              { icon: BookOpen, label: 'Modern Courses', value: '45+', color: 'text-orange-500' },
              { icon: Building2, label: 'Campus Centers', value: '12', color: 'text-green-500' },
              { icon: Award, label: 'Years of Trust', value: '34', color: 'text-red-500' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700" />
                <stat.icon className={`w-10 h-10 ${stat.color} mb-6 relative z-10`} />
                <span className="text-3xl md:text-5xl font-bold text-primary mb-2 relative z-10">{stat.value}</span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 text-center relative z-10">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Summary Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/5 rounded-full text-primary font-black text-[10px] uppercase tracking-[0.3em]">
                <Globe className="w-4 h-4 text-secondary" /> About Our Group
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Empowering Generations Through Quality Education</h2>
              <div className="prose prose-lg text-customText font-light leading-relaxed space-y-6">
                <p>
                  Managed by the <strong>Karnataka Educational Trust</strong>, our group has evolved into a powerhouse of knowledge across healthcare, legal, management, and foundational sciences since its inception in 1990.
                </p>
                <p>
                  Our sprawling 25-acre integrated campus in Bengaluru hosts state-of-the-art research laboratories, digital classrooms, and extensive library systems serving thousands of students from over 20 countries. We focus on outcome-based education that bridges the gap between academic theory and real-world professional requirements.
                </p>
              </div>
              <div className="pt-4">
                <Link to="/about" className="bg-primary text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/20 group">
                  Learn More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform"/>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                 <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767861219/unnamed_y30slw.jpg" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" alt="Institutional Campus" />
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />
               <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Institutions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-3">Our Vibrant Ecosystem</h2>
            <h3 className="text-3xl md:text-6xl font-serif font-bold text-primary">10 Premier Institutions</h3>
            <p className="mt-6 text-lg text-gray-500 font-light">Explore our diverse academic units catering to healthcare, law, management, and schooling.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {INSTITUTIONS.map((inst) => (
              <Link 
                key={inst.id} 
                to={`/institution/${inst.id}`}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl h-[450px] md:h-[580px] border border-gray-100 flex flex-col"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={inst.image} 
                    alt={inst.name} 
                    className="w-full h-full object-cover transform transition-transform duration-[2s] ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 transition-transform duration-500">
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 bg-secondary text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-5 shadow-lg">
                      {inst.category}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-secondary transition-colors">{inst.name}</h4>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{inst.overview}</p>
                    <div className="flex items-center gap-3 text-white text-xs md:text-sm font-black uppercase tracking-widest">
                      <span>Explore Unit</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4">Academic Streams</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">Nurturing Professional Talent</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {programCategories.map((prog, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group">
                <div className={`w-16 h-16 md:w-20 md:h-20 ${prog.color} rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  <prog.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">{prog.title}</h4>
                <p className="text-xs md:text-base text-gray-500 font-medium leading-relaxed">{prog.text}</p>
              </div>
            ))}
            <div className="col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-accent1 p-10 md:p-14 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-center text-white group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-secondary mb-6 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
              <h4 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Global Recognition</h4>
              <p className="text-sm md:text-lg opacity-80 mb-8 max-w-sm relative z-10">Degrees that open doors worldwide. Join thousands of successful alumni.</p>
              <Link to="/admissions/process" className="bg-white text-primary px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-secondary hover:text-white transition-all relative z-10 shadow-lg">
                Full Academic List <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="bg-gray-50 py-16 overflow-hidden border-t border-b border-gray-100">
        <div className="text-center mb-10">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Our Recruitment Partners</span>
        </div>
        <div className="flex w-full mb-8">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div key={idx} className="mx-12 md:mx-20 flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                <img src={logo.url} alt={logo.name} className="h-10 md:h-14 w-auto object-contain max-w-[180px]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-primary via-accent1 to-primary rounded-[3rem] md:rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(106,0,48,0.4)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-48 -translate-x-48 blur-3xl" />
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-10 text-white">
              <h2 className="text-secondary font-bold uppercase tracking-[0.5em] text-xs md:text-sm">Admissions Open 2026-27</h2>
              <h3 className="text-4xl md:text-7xl font-serif font-bold leading-tight">Elevate Your Academic Ambitions</h3>
              <p className="text-lg md:text-2xl opacity-80 font-light max-w-2xl mx-auto">Step into a world of opportunities. Admissions are now open for all professional courses.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
                <Link to="/admissions/enquiry" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-primary transition-all shadow-2xl transform hover:-translate-y-1 uppercase tracking-widest">Enroll for 2026</Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all uppercase tracking-widest">Connect Support</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations & Approvals Section (LAST as requested) */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-3">Recognitions & Standards</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">Affiliations & Approvals</h3>
            <p className="mt-4 text-gray-500 font-light">Our institutions are recognized and approved by India's premier governing bodies, ensuring global academic validity.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {affiliationLogos.map((logo, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="h-20 w-full flex items-center justify-center mb-6">
                  <img src={logo.url} alt={logo.name} className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">{logo.name}</h4>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{logo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

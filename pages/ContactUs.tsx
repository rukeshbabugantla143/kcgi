
import React, { useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Briefcase, 
  ArrowRight,
  ChevronRight,
  User,
  MailSearch,
  MessageSquare,
  Bookmark,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Precise Google Maps Embed URL for the requested address:
  // 33/2, Hegde Nagar Main Rd, Yelahanka, Thirumenahalli, Bengaluru, Karnataka 560064
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8335!2d77.6212!3d13.0768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae190765955555%3A0xc325091422f9!2s33%2F2%2C%20Hegde%20Nagar%20Main%20Rd%2C%20Yelahanka%2C%20Thirumenahalli%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin";
  const externalMapsLink = "https://maps.app.goo.gl/LgWqNWGxzi9ZpwH26";

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <nav className="flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">Contact Us</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">Connect with Excellence</h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mt-4 font-light">Your gateway to a premier professional education. Reach out to our campus office today.</p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-secondary/10 -skew-x-12 translate-x-20" />
      </div>

      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Contact Card */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-gray-50">
            <h2 className="text-3xl font-serif font-bold text-primary mb-12">Send us a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                  <input type="text" placeholder="John Doe" className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-1">Email Address</label>
                <div className="relative">
                  <MailSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                  <input type="email" placeholder="john@example.com" className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" />
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-1">Subject</label>
                <div className="relative">
                  <Bookmark className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                  <input type="text" placeholder="Admissions / General Inquiry" className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" />
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-1">Message Details</label>
                <div className="relative">
                  <MessageSquare className="absolute left-5 top-6 w-4 h-4 text-secondary" />
                  <textarea rows={5} placeholder="How can we help you today?" className="w-full pl-14 pr-6 py-6 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold resize-none"></textarea>
                </div>
              </div>
              <button className="md:col-span-2 bg-primary text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-secondary transition-all flex items-center justify-center gap-4 group">
                Send Secure Message <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

          {/* Side Info Cards */}
          <div className="space-y-8">
            <div className="bg-primary p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5"><MapPin className="w-40 h-40" /></div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-10">Campus Office</h3>
              <div className="space-y-10 relative z-10">
                <div className="flex gap-5">
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 shrink-0"><MapPin className="w-5 h-5 text-secondary" /></div>
                   <p className="text-sm font-medium leading-relaxed opacity-80">33/2, Hegde Nagar Main Rd, Yelahanka, Thirumenahalli, Bengaluru, Karnataka 560064</p>
                </div>
                <div className="flex gap-5">
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 shrink-0"><Phone className="w-5 h-5 text-secondary" /></div>
                   <div>
                     <p className="text-lg font-bold">+91 80 1234 5678</p>
                     <p className="text-[9px] uppercase font-black tracking-widest text-secondary/60 mt-1">Institutional Helpline</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 shrink-0"><Mail className="w-5 h-5 text-secondary" /></div>
                   <div>
                     <p className="text-sm font-bold break-all">info@karnatakacollege.edu</p>
                     <p className="text-[9px] uppercase font-black tracking-widest text-secondary/60 mt-1">Official Support</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-primary transition-all">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm"><Briefcase className="w-6 h-6" /></div>
                 <div>
                   <h4 className="font-bold text-primary">Careers Office</h4>
                   <p className="text-[10px] font-black uppercase text-gray-400">Join our Faculty</p>
                 </div>
               </div>
               <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Map Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Locate Our Campus</h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Our main campus is situated at <span className="font-bold text-primary">33/2, Hegde Nagar Main Rd, Yelahanka</span>. 
                Use the interactive map below to explore our exact coordinates.
              </p>
            </div>
            <a 
              href={externalMapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-4 bg-gray-50 text-primary border border-gray-200 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              Open in Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full aspect-[21/9] min-h-[500px] bg-gray-100 rounded-[5rem] overflow-hidden border-8 border-white shadow-2xl relative group">
            <iframe 
              src={googleMapsUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location Map"
              className="grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
            />
            {/* Overlay hint */}
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-white text-[10px] font-black uppercase tracking-widest bg-primary/60 px-6 py-2 rounded-full backdrop-blur-md">
                 33/2, Hegde Nagar Main Rd, Yelahanka, Thirumenahalli, Bengaluru
               </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

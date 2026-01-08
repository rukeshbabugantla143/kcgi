
import { Institution, InstitutionCategory } from './types';

export const INSTITUTIONS: Institution[] = [
  {
    id: 'pharmacy',
    name: 'Karnataka College of Pharmacy',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Empowering Pharmaceutical Innovations',
    overview: 'Karnataka College of Pharmacy stands at the forefront of pharmaceutical education in India. We emphasize research-led learning and industry-integrated training.',
    courses: [
      { name: 'B.Pharm', duration: '4 Years', eligibility: '10+2 with PCM/PCB' },
      { name: 'M.Pharm (Pharmaceutics)', duration: '2 Years', eligibility: 'B.Pharm with 55%' },
      { name: 'Pharm.D', duration: '6 Years', eligibility: '10+2 with PCM/PCB' }
    ],
    departments: ['Pharmaceutics', 'Pharmacology', 'Pharmaceutical Chemistry', 'Pharmacognosy', 'Pharmacy Practice'],
    faculty: [
      { name: 'Dr. Ramesh Kumar', designation: 'Principal', qualification: 'Ph.D in Pharmacy', image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400' }
    ],
    facilities: ['Medicinal Garden', 'Advanced Analytics Lab', 'Animal House (CPCSEA Approved)', 'Research Center'],
    admissions: 'Selection is based on KCET/CET scores and academic merit.',
    placements: ['Pfizer', 'Biocon', 'Sun Pharma', 'Dr. Reddys'],
    gallery: [],
    contact: { address: 'Thirumenahalli, Bangalore', phone: '+91 80 1234 5678', email: 'admissions.pharmacy@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767861219/unnamed_y30slw.jpg'
  },
  {
    id: 'pre-university',
    name: 'Karnataka College of Pre-University',
    category: InstitutionCategory.SCHOOL_EDUCATION,
    tagline: 'Bridging Dreams and Careers',
    overview: 'A premier PU college offering integrated coaching for NEET, JEE, and CET alongside the state curriculum.',
    courses: [
      { name: 'PUC Science (PCMB/PCMC)', duration: '2 Years', eligibility: '10th SSLC/CBSE/ICSE' },
      { name: 'PUC Commerce (CEBA/HEBA)', duration: '2 Years', eligibility: '10th SSLC/CBSE/ICSE' }
    ],
    departments: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Accountancy'],
    faculty: [],
    facilities: ['Integrated Coaching Labs', 'Study Hall', 'Language Lab'],
    admissions: 'Based on 10th standard board results and counseling.',
    placements: ['Higher Education Career Guidance'],
    gallery: [],
    contact: { address: '33/2, Hegde Nagar, Bangalore', phone: '+91 80 1234 5679', email: 'admissions.pu@karnatakacollege.edu' },
    image: 'https://images.unsplash.com/photo-1523050335102-c325091422f9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'nursing-college',
    name: 'Karnataka College of Nursing',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Caring with Competence',
    overview: 'Our degree nursing program focuses on clinical excellence and compassionate healthcare delivery.',
    courses: [
      { name: 'B.Sc Nursing', duration: '4 Years', eligibility: '10+2 with PCB' },
      { name: 'M.Sc Nursing', duration: '2 Years', eligibility: 'B.Sc Nursing' }
    ],
    departments: ['Medical Surgical', 'Obstetrics & Gynecology', 'Pediatrics'],
    faculty: [],
    facilities: ['Simulated Nursing Lab', 'Hospital Internships', 'Clinical Postings'],
    admissions: 'Through merit and selection interview.',
    placements: ['Apollo Hospitals', 'Manipal Hospitals', 'Fortis'],
    gallery: [],
    contact: { address: 'Bangalore', phone: '+91 80 1234 5680', email: 'nursing@karnatakacollege.edu' },
    image: 'https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'nursing-school',
    name: 'Karnataka School of Nursing',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'The Foundation of Healthcare',
    overview: 'Specialized diploma programs in nursing for immediate professional certification.',
    courses: [
      { name: 'GNM (Diploma)', duration: '3 Years', eligibility: '10+2 Any Stream' }
    ],
    departments: ['General Nursing'],
    faculty: [],
    facilities: ['Nursing Skills Lab', 'Community Postings'],
    admissions: 'Merit-based direct admission.',
    placements: ['Local Nursing Homes', 'Clinics', 'Home Care Services'],
    gallery: [],
    contact: { address: 'Bangalore', phone: '+91 80 1234 5681', email: 'schoolnursing@karnatakacollege.edu' },
    image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'management',
    name: 'Karnataka College of Management',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Global Leaders for a Digital Era',
    overview: 'A world-class B-School focusing on leadership, innovation, and ethical business practices.',
    courses: [
      { name: 'MBA', duration: '2 Years', eligibility: 'Graduate Degree with 50%' },
      { name: 'BBA', duration: '3 Years', eligibility: '10+2' }
    ],
    departments: ['Finance', 'Marketing', 'Human Resources', 'Supply Chain', 'Business Analytics'],
    faculty: [],
    facilities: ['Digital Classrooms', 'Incubation Lab', 'Corporate Board Room'],
    admissions: 'Based on CAT/MAT/KMAT scores and Group Discussion.',
    placements: ['Amazon', 'Deloitte', 'HDFC', 'TCS'],
    gallery: [],
    contact: { address: 'Bangalore', phone: '+91 80 1234 5682', email: 'management@karnatakacollege.edu' },
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'mgmt-science',
    name: 'Karnataka College of Management & Science',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Where Science Meets Business',
    overview: 'Integrating scientific methodologies into management frameworks for technical industries.',
    courses: [
      { name: 'B.Sc Computer Science', duration: '3 Years', eligibility: '10+2 Science' },
      { name: 'B.Com with Analytics', duration: '3 Years', eligibility: '10+2' }
    ],
    departments: ['Computer Applications', 'Data Science', 'Commerce'],
    faculty: [],
    facilities: ['IoT Lab', 'Advanced Computing Center'],
    admissions: 'Merit-based online application.',
    placements: ['Infosys', 'Wipro', 'Capgemini'],
    gallery: [],
    contact: { address: 'Bangalore', phone: '+91 80 1234 5683', email: 'science@karnatakacollege.edu' },
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'law',
    name: 'Karnataka College of Law',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Justice through Legal Excellence',
    overview: 'A premier legal institution focused on producing advocates of high moral and professional standards.',
    courses: [
      { name: '3-Year LLB', duration: '3 Years', eligibility: 'Graduation' },
      { name: '5-Year Integrated LLB', duration: '5 Years', eligibility: '10+2' }
    ],
    departments: ['Civil Law', 'Criminal Law', 'Constitutional Law'],
    faculty: [],
    facilities: ['Moot Court', 'Law Library', 'Legal Aid Clinic'],
    admissions: 'Based on CLAT scores and merit.',
    placements: ['Law Firms', 'Corporate Legal Cells', 'Litigation'],
    gallery: [],
    contact: { address: 'Bangalore', phone: '+91 80 1234 5684', email: 'law@karnatakacollege.edu' },
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'allied-health',
    name: 'Karnataka College of Allied Health Sciences',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'The Pulse of Modern Diagnostics',
    overview: 'Training professionals for the essential diagnostic and therapeutic departments of healthcare.',
    courses: [
      { name: 'B.Sc MLT', duration: '3.5 Years', eligibility: '10+2 Science' },
      { name: 'B.Sc Imaging Tech', duration: '3.5 Years', eligibility: '10+2 Science' }
    ],
    departments: ['Pathology', 'Radiology', 'Operation Theater Tech'],
    faculty: [],
    facilities: ['Diagnostic Imaging Suite', 'Pathology Lab'],
    admissions: 'Merit-based enrollment.',
    placements: ['Diagnostic Chains', 'Govt Healthcare Hubs'],
    gallery: [],
    contact: { address: 'Bangalore', phone: '+91 80 1234 5685', email: 'allied@karnatakacollege.edu' },
    image: 'https://images.unsplash.com/photo-1581595221475-19912896979a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'physiotherapy',
    name: 'Karnataka College of Physiotherapy',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Restore, Maintain, Promote',
    overview: 'A leading center for physical rehabilitation and specialized sports medicine training.',
    courses: [
      { name: 'BPT', duration: '4.5 Years', eligibility: '10+2 with PCB' },
      { name: 'MPT', duration: '2 Years', eligibility: 'BPT' }
    ],
    departments: ['Musculoskeletal', 'Neurological', 'Cardio-Pulmonary'],
    faculty: [],
    facilities: ['Physiotherapy OPD', 'Hydrotherapy Unit', 'Advanced Rehab Center'],
    admissions: 'Counseling based on medical entrance rankings.',
    placements: ['Sports Clinics', 'Rehabilitation Centers', 'Multispecialty Hospitals'],
    gallery: [],
    contact: { address: 'Bangalore', phone: '+91 80 1234 5686', email: 'physio@karnatakacollege.edu' },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'public-school',
    name: 'Karnataka Public School',
    category: InstitutionCategory.SCHOOL_EDUCATION,
    tagline: 'Nurturing Global Citizens',
    overview: 'A world-class K-12 school providing a holistic education that balances academics with character development.',
    courses: [
      { name: 'Primary Education (Grades 1-5)', duration: 'Annual', eligibility: 'Age Based' },
      { name: 'High School (Grades 6-10)', duration: 'Annual', eligibility: 'Entrance Test' }
    ],
    departments: ['Academics', 'Sports', 'Performing Arts', 'STEM Lab'],
    faculty: [],
    facilities: ['Smart Classrooms', 'Olympic-size Pool', 'Computer Science Hub', 'Indoor Sports Hall'],
    admissions: 'Direct enquiry and entrance interaction.',
    placements: ['Higher Secondary Career Guidance'],
    gallery: [],
    contact: { address: 'Main Campus, Bangalore', phone: '+91 80 1234 5687', email: 'info@kps.edu' },
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200'
  }
];

import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const projects = [
  {
    number: "01",
    title: "Vaishnavi Pharma",
    text: "Mobile-first online pharmacy platform using React & Vanilla JS. Features localStorage cart, digital prescription upload, and dynamic filters for 500+ medical SKUs. Improved page load by 25%.",
    demo: "https://vyaish.vercel.app/",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/yashrajbtoraskar-web",
    period: "Mar 2026 – Apr 2026"
  },
  {
    number: "02",
    title: "Career Guidance System",
    text: "Full-stack career & skill recommendation system with high-efficiency backend APIs, JWT authentication, and CRUD operations managing 1,000+ records. Reduced latency by 30%.",
    demo: null,
    tags: ["Java", "PHP", "JavaScript", "MySQL", "Spring Boot"],
    link: "https://github.com/yashrajbtoraskar-web/InternSphere",
    period: "Jan 2026 – Feb 2026"
  },
  {
    number: "03",
    title: "YFLIX – Netflix Mod",
    text: "Netflix-inspired streaming platform with session management, role-based access for premium users, CRUD admin panel for movie management, and modular PHP backend architecture.",
    demo: "https://v-yflix.vercel.app/index.html",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Java"],
    link: "https://github.com/yashrajbtoraskar-web/VYflix",
    period: "Jan 2024 – Feb 2024"
  },
  {
    number: "04",
    title: "Event Sphare",
    text: "Centralized event management system with PHP & MySQL. Full-stack architecture automating manual booking by 50%, with secure authentication and optimized relational DB schema.",
    demo: null,
    tags: ["PHP", "MySQL", "Node.js", "JavaScript", "Java"],
    link: "https://github.com/yashrajbtoraskar-web",
    period: "May 2025"
  },
  {
    number: "05",
    title: "YCACC Complaint Box",
    text: "Student grievance portal with PHP & MySQL, role-based access for students and admins, complaint tracking with status timeline, and secure session-based authentication.",
    demo: null,
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/yashrajbtoraskar-web/YCACC-complaint-box",
    period: "Jan 2025"
  },
  {
    number: "06",
    title: "V Resume Builder",
    text: "An online resume builder built with React & Vite. Create professional resumes instantly with a clean UI, real-time preview, and easy export functionality.",
    demo: "https://v-resume-builder-three.vercel.app/",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    link: "https://github.com/yashrajbtoraskar-web/v-resume-builder",
    period: "2026"
  },
];

const CARD_POSITIONS = [
  { top: 10,   right: '8%',  left: 'auto', rotate: '6deg'  },
  { top: 450,  left: '8%',   right: 'auto', rotate: '-6deg' },
  { top: 850,  right: '8%',  left: 'auto', rotate: '3deg'  },
  { top: 1250, left: '8%',   right: 'auto', rotate: '-3deg' },
  { top: 1650, right: '8%',  left: 'auto', rotate: '4deg'  },
  { top: 2050, left: '8%',   right: 'auto', rotate: '-4deg' },
  { top: 2450, right: '8%',  left: 'auto', rotate: '4deg'  },
  { top: 2850, left: '8%',   right: 'auto', rotate: '-4deg' },
];

const CONTAINER_HEIGHT = 400 + projects.length * 400;

const svgPath = `M 650,200 C 400,350 200,500 300,750 C 400,1000 750,950 700,1150 C 650,1350 400,1400 300,1600 C 200,1800 700,1850 650,2050 C 500,2250 300,2350 400,2550 C 600,2750 700,2850 650,${CONTAINER_HEIGHT - 100}`;

const TagCard = ({ number, title, text, demo, tags, link, period, posStyle, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const triggerY = (cardRect.top - containerRect.top) + 50;
    const lineTipY = latest * containerRect.height;
    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      style={{ position: 'absolute', top: posStyle.top, right: posStyle.right, left: posStyle.left, transform: `rotate(${posStyle.rotate})` }}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 hidden md:flex ${isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'}`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 flex flex-col min-h-[260px] transition-colors duration-700 ${isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'}`}>
        <span className={`text-xl font-bold mb-1 font-serif italic transition-colors duration-700 ${isActive ? 'text-red-200' : 'text-gray-400'}`}>{number}</span>
        <h3 className={`text-xl font-black mb-2 tracking-tight transition-colors duration-700 ${isActive ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`text-xs font-bold mb-2 transition-colors duration-700 ${isActive ? 'text-red-300' : 'text-gray-400'}`}>{period}</p>
        <p className={`text-xs leading-relaxed font-medium mb-3 transition-colors duration-700 ${isActive ? 'text-red-100' : 'text-gray-500'}`}>{text}</p>
        {demo && (<a href={demo} target="_blank" rel="noreferrer" className={`text-xs font-bold mb-3 inline-flex items-center gap-1 transition-colors duration-700 ${isActive ? 'text-yellow-200' : 'text-blue-500'}`}>👉 Live Demo</a>)}
        <div className="flex flex-wrap gap-1 mt-auto">
          {tags.map(tag => (<span key={tag} className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors duration-700 ${isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>{tag}</span>))}
        </div>
        <a href={link} target="_blank" rel="noreferrer" className={`mt-3 text-xs font-black underline transition-colors duration-700 ${isActive ? 'text-white' : 'text-[#ff2a2a]'}`}>View on GitHub →</a>
      </div>
    </div>
  );
};

const TagCardMobile = ({ number, title, text, demo, tags, link, period }) => (
  <div className="md:hidden w-full max-w-sm rounded-[2rem] p-2 bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col items-center">
    <div className="w-full rounded-[1.5rem] p-6 flex flex-col min-h-[260px] bg-[#f4f4f4]">
      <span className="text-xl font-bold mb-1 font-serif italic text-gray-400">{number}</span>
      <h3 className="text-xl font-black mb-2 tracking-tight text-gray-900">{title}</h3>
      <p className="text-xs font-bold mb-2 text-gray-400">{period}</p>
      <p className="text-xs leading-relaxed font-medium mb-3 text-gray-500">{text}</p>
      {demo && (<a href={demo} target="_blank" rel="noreferrer" className="text-xs font-bold mb-3 text-blue-500">👉 Live Demo</a>)}
      <div className="flex flex-wrap gap-1 mt-auto">
        {tags.map(tag => (<span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-200 text-gray-600">{tag}</span>))}
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="mt-3 text-xs font-black underline text-[#ff2a2a]">View on GitHub →</a>
    </div>
  </div>
);

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section id="projects" ref={containerRef} className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">

      {/* Mobile Layout */}
      <div className="md:hidden max-w-sm mx-auto">
        <div className="mb-10">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">My Projects</div>
          <h2 className="text-4xl font-black text-gray-900 leading-[1.1] mb-4 tracking-tight">Projects that showcase real-world impact</h2>
          <p className="text-gray-500 text-base font-medium leading-relaxed">Each project was built with a focus on performance, security, and seamless user experience.</p>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (<TagCardMobile key={project.number} {...project} />))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-6xl mx-auto relative" style={{ height: `${CONTAINER_HEIGHT}px` }}>
        <div data-aos="fade-up" className="absolute top-10 left-0 w-[450px] z-20">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">My Projects</div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">Projects that showcase real-world impact & technical depth</h2>
          <p className="text-gray-500 text-lg max-w-sm font-medium leading-relaxed">Each project was built with a focus on performance, security, and seamless user experience.</p>
        </div>

        <svg className="absolute top-0 left-0 w-full pointer-events-none z-0" style={{ height: `${CONTAINER_HEIGHT}px` }} viewBox={`0 0 1000 ${CONTAINER_HEIGHT}`} preserveAspectRatio="none">
          <path d={svgPath} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 10" />
          <mask id="path-mask">
            <motion.path d={svgPath} fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
          </mask>
          <path d={svgPath} fill="none" stroke="black" strokeWidth="2" strokeDasharray="8 10" mask="url(#path-mask)" />
        </svg>

        {projects.map((project, i) => (
          <TagCard key={project.number} {...project} posStyle={CARD_POSITIONS[i] || CARD_POSITIONS[0]} aosType={i % 2 === 0 ? "fade-left" : "fade-right"} aosDelay={String((i + 1) * 100)} pathLength={pathLength} containerRef={containerRef} />
        ))}

        <div className="absolute font-['Caveat',cursive] text-3xl text-gray-600 rotate-6" style={{ top: `${CONTAINER_HEIGHT - 80}px`, left: '45%' }}>
          More coming soon!
        </div>
      </div>
    </section>
  );
};

export default Services;

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
    link: "https://github.com/yashrajbtoraskar-web",
    period: "Jan 2025 – Feb 2026"
  },
  {
    number: "03",
    title: "Event Sphare",
    text: "Centralized event management system with PHP & MySQL. Full-stack architecture automating manual booking by 50%, with secure authentication and optimized relational DB schema.",
    demo: null,
    tags: ["PHP", "MySQL", "Node.js", "JavaScript", "Java"],
    link: "https://github.com/yashrajbtoraskar-web",
    period: "Jan 2025"
  },
  {
    number: "04",
    title: "YFLIX – Netflix Mod",
    text: "Netflix-inspired streaming platform with session management, role-based access for premium users, CRUD admin panel for movie management, and modular PHP backend architecture.",
    demo: "https://v-yflix.vercel.app/index.html",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Java"],
    link: "https://github.com/yashrajbtoraskar-web",
    period: "Jan 2024 – Feb 2024"
  }
  {
  number: "05",
  title: "YCACC Complaint Box",
  text: "Student grievance portal with PHP & MySQL, role-based access for students and admins, complaint tracking with status timeline, and secure session-based authentication.",
  demo: null,
  tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  link: "https://github.com/yashrajbtoraskar-web/YCACC-complaint-box",
  period: "Jan 2025"
}
];

const TagCard = ({ number, title, text, demo, tags, link, period, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Pin dot */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 flex flex-col min-h-[260px] transition-colors duration-700 ${isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'}`}>
        <span className={`text-xl font-bold mb-1 font-serif italic transition-colors duration-700 ${isActive ? 'text-red-200' : 'text-gray-400'}`}>
          {number}
        </span>
        <h3 className={`text-xl font-black mb-2 tracking-tight transition-colors duration-700 ${isActive ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-xs font-bold mb-2 transition-colors duration-700 ${isActive ? 'text-red-300' : 'text-gray-400'}`}>
          {period}
        </p>
        <p className={`text-xs leading-relaxed font-medium mb-3 transition-colors duration-700 ${isActive ? 'text-red-100' : 'text-gray-500'}`}>
          {text}
        </p>

        {/* Live Demo link — only shown when demo URL exists */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className={`text-xs font-bold mb-3 inline-flex items-center gap-1 transition-colors duration-700 ${isActive ? 'text-yellow-200 hover:text-yellow-100' : 'text-blue-500 hover:text-blue-700'}`}
          >
            👉 Live Demo
          </a>
        )}

        <div className="flex flex-wrap gap-1 mt-auto">
          {tags.map(tag => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors duration-700 ${isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`mt-3 text-xs font-black underline transition-colors duration-700 ${isActive ? 'text-white' : 'text-[#ff2a2a]'}`}
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1600px]">

        {/* Header */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            My Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Projects that showcase real-world impact & technical depth
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            Each project was built with a focus on performance, security, and seamless user experience.
          </p>
        </div>

        {/* Desktop SVG Animated Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1600px] pointer-events-none z-0"
          viewBox="0 0 1000 1600"
          preserveAspectRatio="none"
        >
          <path
            d="M 650,200 C 400,350 200,500 300,750 C 400,1000 750,950 700,1150 C 650,1350 400,1400 300,1450"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,350 200,500 300,750 C 400,1000 750,950 700,1150 C 650,1350 400,1400 300,1450"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>
          <path
            d="M 650,200 C 400,350 200,500 300,750 C 400,1000 750,950 700,1150 C 650,1350 400,1400 300,1450"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path d="M 2,0 L 2,100" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Project Cards */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          {projects.map((project, i) => (
            <TagCard
              key={project.number}
              {...project}
              className={`md:absolute ${
                i === 0 ? 'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6' :
                i === 1 ? 'md:top-[500px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6' :
                i === 2 ? 'md:top-[850px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3' :
                'md:top-[1250px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3'
              }`}
              aosType={i % 2 === 0 ? "fade-left" : "fade-right"}
              aosDelay={String((i + 1) * 100)}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}

          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1500px] left-[55%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
          >
            More coming soon!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

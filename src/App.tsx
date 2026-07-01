import "./App.css";
import BackGround from "./components/BackGround";
import CardNav from "./components/CardNav";
import Hero from "./components/Hero";
import LogoLoop from "./components/LogoLoop";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import Projects from "./components/Projects";

import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiDocker, 
  SiKubernetes, 
  SiFastapi, 
  SiHuggingface, 
  SiHtml5, 
  SiJavascript, 
  SiCplusplus, 
  SiRedux,
  SiPostgresql, 
  SiMysql       
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

const techLogos = [
  // Existing Frontend Core
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  
  // Web Basics
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <FaCss3Alt />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },

  // Backend & Databases
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },

  // DevOps & Cloud Orchestration
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },

  // AI & Systems
  { node: <SiHuggingface />, title: "Hugging Face", href: "https://huggingface.co" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },

  // State Management
  { node: <SiRedux />, title: "Redux Toolkit", href: "https://redux-toolkit.js.org" }
];

function App() {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          href: "/contact/email",
          ariaLabel: "About Company",
        },
        {
          label: "Careers",
          href: "/contact/email",
          ariaLabel: "About Careers",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          href: "/contact/email",
          ariaLabel: "Featured Projects",
        },
        {
          label: "Case Studies",
          href: "/contact/email",
          ariaLabel: "Project Case Studies",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Email", href: "/contact/email", ariaLabel: "Email us" },
        { label: "Twitter", href: "/contact/email", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "/contact/email", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-[#030712] via-[#050b1a] to-[#0b2559] text-white overflow-x-hidden">
      <CardNav
          items={items}
          baseColor="rgba(8, 17, 41, 0.75)"
          menuColor="#ffffff"
          buttonBgColor="#ffffff"
          buttonTextColor="#030712"
          ease="power3.out"
        />
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <BackGround
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={0.5}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
        </div>
        <main>
        <Hero />
        <Cards/>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
        <Projects/>
        <Footer/>
        </main>
    </div>
  );
}

export default App;

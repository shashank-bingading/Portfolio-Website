import {
  SiReact,
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
  SiMysql,
  SiRedis,
  SiUpstash,
  SiLogstash,
  SiVitest,
  SiJest,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
const iconMap: Record<string, React.ReactNode> = {
  "React": <SiReact className="transition-colors duration-200" />,
  "TypeScript": <SiTypescript className="transition-colors duration-200" />,
  "Tailwind CSS": <SiTailwindcss className="transition-colors duration-200" />,
  "HTML5": <SiHtml5 className="transition-colors duration-200" />,
  "JavaScript": <SiJavascript className="transition-colors duration-200" />,
  "CSS3": <FaCss3Alt className="transition-colors duration-200" />,
  "Node.js": <SiNodedotjs className="transition-colors duration-200" />,
  "Express": <SiExpress className="transition-colors duration-200" />,
  "MongoDB": <SiMongodb className="transition-colors duration-200" />,
  "PostgreSQL": <SiPostgresql className="transition-colors duration-200" />,
  "MySQL": <SiMysql className="transition-colors duration-200" />,
  "FastAPI": <SiFastapi className="transition-colors duration-200" />,
  "Redis": <SiRedis className="transition-colors duration-200" />,
  "Upstash": <SiUpstash className="transition-colors duration-200" />,
  "Docker": <SiDocker className="transition-colors duration-200" />,
  "Kubernetes": <SiKubernetes className="transition-colors duration-200" />,
  "Vitest": <SiVitest className="transition-colors duration-200" />,
  "Jest": <SiJest className="transition-colors duration-200" />,
  "Hugging Face": <SiHuggingface className="transition-colors duration-200" />,
  "C++": <SiCplusplus className="transition-colors duration-200" />,
  "Winston Logging": <SiLogstash className="transition-colors duration-200" />,
  "Redux Toolkit": <SiRedux className="transition-colors duration-200" />,
};

const TechStack = () => {
  interface Stack {
    Name: string;
    list: { title: string }[];
  }
  const techStackItems: Stack[] = [
    {
      Name: "Frontend Core",
      list: [
        { title: "React" },
        { title: "TypeScript" },
        { title: "Tailwind CSS" },
      ],
    },
    {
      Name: "Web Basics",
      list: [{ title: "HTML5" }, { title: "JavaScript" }, { title: "CSS3" }],
    },
    {
      Name: "Backend & Databases",
      list: [
        { title: "Node.js" },
        { title: "Express" },
        { title: "MongoDB" },
        { title: "PostgreSQL" },
        { title: "MySQL" },
        { title: "FastAPI" },
        { title: "Redis" },
        { title: "Upstash" },
      ],
    },
    {
      Name: "DevOps & Testing Architecture",
      list: [
        { title: "Docker" },
        { title: "Kubernetes" },
        { title: "Vitest" },
        { title: "Jest" },
      ],
    },
    {
      Name: "AI & Systems Infrastructure",
      list: [
        { title: "Hugging Face" },
        { title: "C++" },
        { title: "Winston Logging" },
      ],
    },
    {
      Name: "State Management",
      list: [{ title: "Redux Toolkit" }],
    },
  ];
  return (
    <div className="relative flex  p-4 mx-auto justify-center">
      <div className="grid grid-cols-3 gap-6 ">
        {techStackItems.map((data, index1) => (
          <div
            key={index1}
            className="group relative p-8 bg-slate-950/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
          >
            <h2 className="mt-2 text-2xl font-semibold text-blue-400 ">
              {data.Name}
            </h2>
            {data.list.map((titles, index2) => (
              <div
                key={index2}
                className="flex items-center gap-3 mt-3 text-slate-300"
              >
                <span className="text-xl">{iconMap[titles.title]}</span>
                <h3 className="text-base font-medium">{titles.title}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

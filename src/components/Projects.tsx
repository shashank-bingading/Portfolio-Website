import { useRef,useEffect} from "react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image?: string;
  live?: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "InsightStream",
    desc: "Apni description yahan likho (kya problem solve karta hai).",
    tags: ["React", "Express", "PostgreSQL", "FastAPI"],
    image: "/huihui.jpg", 
    live: "https://...",
    github: "https://github.com/shashank-bingading/InsightStream",
  },
  {
    title: "Connect Four Live",
    desc: "Real-time multiplayer Connect Four game.",
    tags: ["React", "Node.js", "WebSocket"],
    image: "/huihui.jpg",
    live: "https://...",
    github: "https://github.com/shashank-bingading/...",
  },
  {
    title: "RateYourGame",
    desc: "Games ko rate aur review karne wala platform.",
    tags: ["MERN", "Redux Toolkit"],
    image: "/huihui.jpg",
    github: "https://github.com/shashank-bingading/...",
  },
  {
    title: "Galactic Archive",
    desc: "Short description yahan likho.",
    tags: ["React", "TypeScript"],
    image: "/huihui.jpg",
    github: "https://github.com/shashank-bingading/...",
  },
];

const AUTO_SPEED = 40; 
const FRICTION = 3; 
export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const x = useRef(0);
  const vel = useRef(0); 
  const base = useRef(-AUTO_SPEED); 
  const dragging = useRef(false);
  const hovering = useRef(false);
  const visible = useRef(true);
  const moved = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const dragVel = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let prev = performance.now();

    const io = new IntersectionObserver(
      ([entry]) => (visible.current = entry.isIntersecting),
      { threshold: 0 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);

    const tick = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      const el = trackRef.current;

      if (el && visible.current) {
        const setW = el.scrollWidth / 2; 

        if (!dragging.current) {
          const target = hovering.current || reduce ? 0 : -AUTO_SPEED;
          base.current += (target - base.current) * Math.min(1, dt * 4); 
          vel.current *= Math.exp(-FRICTION * dt);
          x.current += (vel.current + base.current) * dt;
        }

        // infinite loop wrap
        x.current = -(((-x.current % setW) + setW) % setW);
        el.style.transform = `translate3d(${x.current}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    moved.current = false;
    startX.current = lastX.current = e.clientX;
    lastT.current = performance.now();
    dragVel.current = 0;
    vel.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    if (!moved.current && Math.abs(e.clientX - startX.current) > 5) {
      moved.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (!moved.current) return;

    const now = performance.now();
    const dt = (now - lastT.current) / 1000;
    const dx = e.clientX - lastX.current;
    x.current += dx;
    if (dt > 0) dragVel.current = dx / dt;
    lastX.current = e.clientX;
    lastT.current = now;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    const idle = performance.now() - lastT.current > 100;
    vel.current = idle ? 0 : dragVel.current; 
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
  };

  const nudge = (dir: "left" | "right") => {
    vel.current += dir === "left" ? 1100 : -1100; 
  };

  const renderCards = (copy: number) =>
    projects.map((p) => (
      <article
        key={`${copy}-${p.title}`}
        aria-hidden={copy === 1}
        className="mr-6 flex w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl
                   border border-white/10 bg-[#050816] transition-colors
                   hover:border-sky-400/40 sm:w-[340px]"
      >
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            draggable={false}
            loading="lazy"
            className="pointer-events-none h-48 w-full object-cover"
          />
        ) : (
          <div className="h-48 w-full bg-gradient-to-br from-sky-900/60 to-indigo-900/40" />
        )}

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-xl font-semibold text-white">{p.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-slate-300">{p.desc}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-sky-500/10 px-2 py-1 text-xs text-sky-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-4 pt-5 text-sm">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                tabIndex={copy === 1 ? -1 : 0}
                className="text-sky-400 hover:underline"
              >
                Live Demo
              </a>
            )}
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              tabIndex={copy === 1 ? -1 : 0}
              className="text-sky-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    ));

  return (
    <section ref={sectionRef} id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-4xl font-bold text-sky-200">Projects</h2>
        <div className="flex gap-2">
          <button
            onClick={() => nudge("left")}
            aria-label="Previous project"
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
          >
            ←
          </button>
          <button
            onClick={() => nudge("right")}
            aria-label="Next project"
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="cursor-grab select-none overflow-hidden active:cursor-grabbing"
        style={{
          touchAction: "pan-y", 
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {renderCards(0)}
          {renderCards(1)}
        </div>
      </div>
    </section>
  );
}
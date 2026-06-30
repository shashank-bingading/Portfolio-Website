export default function Cards () {
  interface carditems {
    id: number;
    title: string;
    label: string;
    content: string;
  }

  const cardItems: carditems[] = [
    {
      id: 1,
      title: "Academic Standing",
      label: "9.17 CGPA",
      content:
        "A reflection of steady effort across semesters, balancing standard computer science theory with practical, hands-on programming",
    },
    {
      id: 2,
      title: "Best Performance",
      label: "9.345 Max SGPA",
      content:
        "My highest semester average, achieved during a demanding term of advanced engineering courses and tight project deadlines",
    },
    {
      id: 3,
      title: "Technical Experience",
      label: "2+ Years Coding",
      content:
        "Spending the last two years architecting fullstack applications, writing clean code, and expanding into AI systems and cloud deployment.",
    },
  ];

  return (

    <section className="relative z-10 max-w-5xl mx-auto px-6 py-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
        {cardItems.map((data) => (
          <div key={data.id}
          className="group relative p-8 bg-slate-950/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20">
            <h3 className='mt-2 text-2xl font-semibold text-white'>{data.title}</h3>
              <p className='mt-1 text-sm uppercase tracking-widest text-blue-200 font-bold'>{data.label}</p>
              <p className='mt-3 text-gray-300 text-base leading-relaxed'>{data.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


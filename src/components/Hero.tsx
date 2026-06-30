const Hero = () => {
  return (
    <section className=" py-20 px-6 mx-5 rounded-4xl relative  mx:auto">
      <div className=" flex flex-col md:flex-row  justify-center gap-12 md:gap-20 w-full items-center max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-2xl shadow-xl max-w-sm w-full ">
          <img
            src="/huihui.jpg"
            alt="Hero Image"
            className="w-full h-auto object-contain md:object-cover"
          />
        </div>

        <div className="w-full md:w-[55%] max-w-2xl space-y-6 p-8 md:p-12 bg-slate-950/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl ">
          <p className="text-sky-500 uppercase tracking-[.25rem] text-xs font-bold">
            ABOUT
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            Fullstack Developer focused on building high-performance, scalable
            web apps from architecture to deployment. I connect robust backend
            infrastructure with responsive frontends. Currently scaling up into
            AI Engineering and Cloud Orchestration to deliver intelligent,
            containerized systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

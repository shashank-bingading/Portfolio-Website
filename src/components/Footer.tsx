import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-slate-950/20 backdrop-blur-md mt-20 px-6">
      <div className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
          <span className="text-sm font-semibold tracking-wider text-white">
            Shashank Singh
          </span>
          <p className="text-xs text-slate-400 max-w-xs">
            Computer Science Engineer • Focused on full-stack architecture and robust systems.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-5 text-xl">
            <a 
              href="https://github.com/shashank-bingading" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <SiGithub />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/shashanksingh88/" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-sky-400 hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&to=shashanksinghwork88@gmail.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-red-400 hover:scale-110 transition-all duration-200"
              aria-label="Gmail Account"
            >
              <SiGmail />
            </a>
          </div>
          
          <p className="text-[11px] text-slate-500 tracking-wide font-mono">
            © {currentYear} // Telemetry Stable
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
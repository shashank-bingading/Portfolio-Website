import "./App.css";
import BackGround from "./components/BackGround";
import CardNav from "./components/CardNav";
import About from "./components/About";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import InfiniteMenu from "./components/InfiniteMenu";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
    });
  }, []);

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

  const blocks = [
    {
      image: "/huihui.jpg",
      link: "https://reactbits.dev",
      title: "The Pier",
      description: "Concrete and open water under a bright morning sky.",
    },
    {
      image: "/huihui.jpg",
      link: "https://reactbits.dev",
      title: "Moonlit Field",
      description: "A single pole in a field of rapeseed under the full moon.",
    },
    {
      image: "/huihui.jpg",
      link: "https://reactbits.dev",
      title: "Rapeseed",
      description: "The same field at noon, yellow all the way to the horizon.",
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
          height: "750px",
          position: "relative",
          backgroundColor: "black",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
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
        <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
          <InfiniteMenu
            blocks={blocks}
            count={160}
            tileSize={0.63}
            roundness={0.2}
            zoom={1.65}
            pullBack={1}
            stretch={0.6}
            inertia={0.6}
            autoplay={3}
            grayscale
            dim={0.5}
            intro
            showInfo
            theme="dark"
            accentColor="#ffffff"
          />
        </div>
      </div>
      <main className="w-full min-h-screen relative">
        <About />
        <Cards />
        <TechStack />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;

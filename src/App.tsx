import "./App.css";
import BackGround from "./components/BackGround";
import Hero from "./components/Hero";
import CardNav from "./components/CardNav";
import About from "./components/About";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";


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
          height: "750px",
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
        <Hero/>
        </div>
        <main>
        <About />
        <Cards/>
    <TechStack/>
        <Projects/>
        <Footer/>
        </main>
    </div>
  );
}

export default App;

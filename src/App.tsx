import "./App.css";
import BackGround from "./components/BackGround";
import CardNav from "./components/CardNav";
import Hero from "./components/Hero";

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
    <div className="bg-blue-950">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <BackGround
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
      <div>
        <CardNav
          logoAlt="Company Logo"
          items={items}
          baseColor="rgba(8, 17, 41, 0.75)"
          menuColor="#ffffff"
          buttonBgColor="#ffffff"
          buttonTextColor="#030712"
          ease="power3.out"
        />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default App;

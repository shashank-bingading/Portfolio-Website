import "./App.css";
import PixelBlast from "../@/components/PixelBlast";
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
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#B497CF"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>
      {/* <div>
        <CardNav
          logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div> */}
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default App;

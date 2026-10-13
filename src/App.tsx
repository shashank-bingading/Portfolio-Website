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
      { label: "About Me", href: "#about", ariaLabel: "Go to About section" },
      {
        label: "GitHub",
        href: "https://github.com/shashank-bingading",
        ariaLabel: "Open GitHub profile",
      },
    ],
  },
  {
    label: "Projects",
    bgColor: "#2F293A",
    textColor: "#fff",
    links: [
      { label: "Projects", href: "#projects", ariaLabel: "Go to Projects section" },
    ],
  },
  {
    label: "Contact",
    bgColor: "#2F293A",
    textColor: "#fff",
    links: [
      {
        label: "Email",
        href: "mailto:shashanksingh31804@gmail.com",
        ariaLabel: "Send an email",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/shashanksingh88/",
        ariaLabel: "Open LinkedIn profile",
      },
    ],
  },
];

  const blocks = [
    {
      image: "/GalacticArchive.png",
      link: "https://github.com/shashank-bingading/Galactic-Archive",
      title: "Galactic Archive",
      description: "A modern, space-themed website built as a frontend project to revisit and sharpen core web development fundamentals using React, JavaScript, and Tailwind CSS",
    },
    {
      image: "/ConnectFour.png",
      link: "https://github.com/shashank-bingading/Connect_Four",
      title: "Connect-Four Online Multiplayer",
      description: "A modern, full-stack rendition of the classic Connect Four game. Experience seamless gameplay with instant state synchronization across clients",
    },
    {
      image: "/InsightStream.png",
      link: "https://github.com/shashank-bingading/InsightStream",
      title: "InsightStream",
      description: "InsightStream is a full-stack web app that turns any article URL into a summary, key takeaways, and a sentiment score using NLP models",
    },
    {
      image: "/RateYourGame.png",
      link: "https://github.com/shashank-bingading/RateYourGame",
      title: "Rate Your Game",
      description: "A full-stack web app to browse, favorite, and rate games with separate user and host roles",
    }
  ];

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-[#030712] via-[#050b1a] to-[#0b2559] text-white overflow-x-hidden">
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
        <section id="about"><About /></section>
        <Cards />
        <TechStack />
        <section id="projects"><Projects /></section>
        <Footer />
      </main>
    </div>
  );
}

export default App;

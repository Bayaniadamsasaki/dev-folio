import Biography from "@/components/Biography";

const Data = {
  hamburger: "http://localhost:3000/menu.svg",
  menuItems: [
    { name: "Home", link: "#home" },
    { name: "Biography", link: "#biography" },
    { name: "Project", link: "#project" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ],

  vectorHero: [
    { src: "http://localhost:3000/vector-1.svg", alt: "Vector 1" },
    { src: "http://localhost:3000/vector-2.svg", alt: "Vector 2" },
    { src: "http://localhost:3000/vector-3.svg", alt: "Vector 3" },
  ],

  iconCards: [
    {
      title: "Design Thinking",
      icon: "http://localhost:3000/figma.svg",
      year: "2023",
      alt: "Figma",
    },
    {
      title: "Clean Code",
      icon: "http://localhost:3000/react.svg",
      year: "2024",
      alt: "React",
    },
  ],

  Biography: [
    { profile: "http://localhost:3000/profile.png", alt: "profil-adam" },
  ],
};

export default Data;

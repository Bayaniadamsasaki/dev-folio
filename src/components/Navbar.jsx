"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import data from "../constants/data";

const Navbar = () => {
  const buttonRef = useRef(null);
  const menuItemsRef = useRef([]);
  const nameRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Animasi teks "Bayani Adam Sasaki"
    if (nameRef.current) {
      const text = new SplitType(nameRef.current, { types: "chars" });

      gsap.fromTo(
        text.chars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power2.out",
        }
      );
    }

    // Animasi menu items (Desktop)
    menuItemsRef.current.forEach((item, index) => {
      if (item) {
        const splitText = new SplitType(item, { types: "chars" });

        gsap.fromTo(
          splitText.chars,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05 * index,
            duration: 1,
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  // Efek Toggle Menu
  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          pointerEvents: "auto",
        });
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: "power2.in",
          pointerEvents: "none",
        });
      }
    }
  }, [isOpen]);

  // Tutup menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: "#B0FC04",
      color: "#000",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: "transparent",
      color: "#fff",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <nav className="flex justify-between items-center w-full h-[70px] lg:h-[100px] px-5 lg:px-[100px] font-poppins">
      <div className="flex justify-start items-center gap-[10px]">
        <img
          src="/logo.svg"
          className="w-[20px] h-[20px] lg:w-[30px] lg:h-[31.17px] object-cover cursor-pointer"
          alt="Logo"
        />
        <p
          ref={nameRef}
          className="text-[15px] lg:text-[24px] font-bold text-white cursor-pointer"
        >
          Bayani Adam Sasaki
        </p>
      </div>

      {/* Menu Items (Desktop) */}
      <div className="hidden lg:flex gap-10">
        {data.menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            ref={(el) => (menuItemsRef.current[index] = el)}
            className="text-md font-semibold cursor-pointer whitespace-nowrap hover:text-secondary text-white"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Hamburger Icon */}
      <img
        className="lg:hidden cursor-pointer"
        src={data.hamburger}
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="absolute z-20 top-[70px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[300px] rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 text-white flex flex-col items-center gap-3 py-5 shadow-2xl transition-all duration-500 opacity-0 scale-90 pointer-events-none"
      >
        {data.menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-[15px] w-full text-center py-3 font-semibold transition-all duration-300 rounded-lg hover:bg-white/20 hover:text-secondary"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Button Get Resume */}
      <button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hidden lg:flex px-10 py-[10px] rounded-full border border-white text-md font-semibold text-white hover:bg-secondary hover:text-black"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "http://localhost:3000/CV_BAYANI_ADAM_SASAKI.pdf";
          link.download = "CV BAYANI ADAM SASAKI.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        Get Resume
      </button>
    </nav>
  );
};

export default Navbar;

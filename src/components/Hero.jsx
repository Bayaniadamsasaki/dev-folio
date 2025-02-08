"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import data from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const svgRefs = useRef([]);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

    svgRefs.current.forEach((svg) => {
      gsap.fromTo(
        svg,
        { opacity: 1, y: 0, scale: 1 },
        {
          opacity: 0,
          y: -50,
          scale: 0.5,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: svg,
            start: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      card1Ref.current,
      { opacity: 1, y: 0, rotate: -14 },
      {
        opacity: 0,
        y: -50,
        rotate: -14,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card1Ref.current,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      card2Ref.current,
      { opacity: 1, y: 0, rotate: 10 },
      {
        opacity: 0,
        y: -50,
        rotate: 10,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card2Ref.current,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative px-[100px] w-full">
      <div
        className="flex justify-center items-center w-full h-[670px] bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/gridview.png')" }}
      >
        <p
          ref={textRef}
          className="w-full text-[200px] font-inter font-black text-center leading-hero bg-hero-texture bg-clip-text text-transparent"
        >
          UI/UX FRONTEND
        </p>

        <img
          ref={(el) => (svgRefs.current[0] = el)}
          src={data.vectorHero[0].src}
          alt={data.vectorHero[0].alt}
          style={{ position: "absolute", left: "900px", top: "190px" }}
        />
        <img
          ref={(el) => (svgRefs.current[1] = el)}
          src={data.vectorHero[1].src}
          alt={data.vectorHero[1].alt}
          style={{ position: "absolute", left: "265px;", top: "160px;" }}
        />
        <img
          ref={(el) => (svgRefs.current[2] = el)}
          src={data.vectorHero[2].src}
          alt={data.vectorHero[2].alt}
          style={{ position: "absolute", left: "195px;", top: "450px;" }}
        />

        {/* Card Figma */}
        <div
          ref={card1Ref}
          className="flex flex-col justify-center items-center w-[150px] h-[180px] absolute overflow-hidden gap-6 p-3.5 rounded-[30px] bg-primary/30 backdrop-blur-[5px] border border-white/10 shadow-inner shadow-black/20 rotate-[-14.385deg]"
          style={{
            boxShadow: "6px 30px 62px -12px rgba(85,85,85,0.16)",
            left: "460px",
            top: "310px",
          }}
        >
          <img src={data.iconCards[0].icon} alt={data.iconCards[0].alt} />
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-white">
              Design Thinking
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left text-white">
              2023
            </p>
          </div>
        </div>

        {/* React Card */}
        <div
          ref={card2Ref}
          className="flex flex-col justify-center items-center w-[150px] h-[180px] absolute overflow-hidden gap-6 p-3.5 rounded-[30px] bg-primary/30 backdrop-blur-[5px] border border-white/10 shadow-inner shadow-black/20 rotate-[10.961deg]"
          style={{
            boxShadow: "6px 30px 62px -12px rgba(85,85,85,0.16)",
            left: "730px",
            top: "260px",
          }}
        >
          <img src={data.iconCards[1].icon} alt={data.iconCards[1].alt}/>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-white">
              Clean Code
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left text-white">
              2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

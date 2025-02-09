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
      if (window.innerWidth > 768) {
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
      }
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
    <section
      id="home"
      ref={heroRef}
      className="relative px-5 lg:px-[100px] w-full"
    >
      <div
        className="flex justify-center items-center lg:w-full lg:h-auto w-auto h-[488px] lg:aspect-[17.5/9] bg-no-repeat lg:bg-center bg-cover"
        style={{
          backgroundImage: "url('/gridview.png')",
        }}
      >
        <p
          ref={textRef}
          className="lg:w-full w-[277px] lg:text-[200px] text-[50px] font-inter font-black text-center lg:leading-hero leading-mobile bg-hero-texture bg-clip-text text-transparent mt-[-250px] lg:mt-0"
        >
          UI/UX FRONTEND
        </p>

        <img
          className="absolute left-[245px] top-[85px] lg:left-[900px] lg:top-[170px] lg:w-[153.47px] lg:h-[162.14px] w-[40px] h-[42.36px]"
          ref={(el) => (svgRefs.current[0] = el)}
          src={data.vectorHero[0].src}
          alt={data.vectorHero[0].alt}
          // style={{ position: "absolute", left: "900px", top: "190px" }}
        />
        <img
          className="absolute left-[95px] top-[75px] lg:left-[265px] lg:top-[130px] lg:w-[181px] lg:h-[162px] w-[40px] h-[35.8px]"
          ref={(el) => (svgRefs.current[1] = el)}
          src={data.vectorHero[1].src}
          alt={data.vectorHero[1].alt}
          // style={{ position: "absolute", left: "265px;", top: "160px;" }}
        />
        <img
          className="absolute left-[70px] top-[145px] lg:left-[195px] lg:top-[420px] lg:w-[191px] lg:h-[120px] w-[45px] h-[35.12px]"
          ref={(el) => (svgRefs.current[2] = el)}
          src={data.vectorHero[2].src}
          alt={data.vectorHero[2].alt}
          // style={{ position: "absolute", left: "195px;", top: "450px;" }}
        />

        {/* Card Figma */}
        <div
          ref={card1Ref}
          className="lg:flex hidden flex-col justify-center items-center w-[150px] h-[180px] absolute overflow-hidden gap-6 p-3.5 rounded-[30px] bg-primary/30 backdrop-blur-[5px] border border-white/10 shadow-inner shadow-black/20 rotate-[-14.385deg]"
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
          className="lg:flex hidden flex-col justify-center items-center w-[150px] h-[180px] absolute overflow-hidden gap-6 p-3.5 rounded-[30px] bg-primary/30 backdrop-blur-[5px] border border-white/10 shadow-inner shadow-black/20 rotate-[10.961deg]"
          style={{
            boxShadow: "6px 30px 62px -12px rgba(85,85,85,0.16)",
            left: "730px",
            top: "260px",
          }}
        >
          <img src={data.iconCards[1].icon} alt={data.iconCards[1].alt} />
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

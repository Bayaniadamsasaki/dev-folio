"use client";

import data from "../constants/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Biography = () => {
  const bioRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const svgRefs = useRef([]);

  useEffect(() => {
    const bioElement = bioRef.current;
    const textElements = textRef.current?.children;
    const imageElement = imageRef.current;

    gsap.fromTo(
      bioElement,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bioElement,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageElement,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: imageElement,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      id="biography"
      ref={bioRef}
      className="flex mt-[-280px] lg:mt-0 flex-col justify-start items-center w-full h-full relative overflow-hidden gap-[100px] px-5 py-10 lg:p-[100px] lg:rounded-tl-[80px] rounded-tl-[40px] rounded-tr-[40px] lg:rounded-tr-[80px] bg-white"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10">
        {/* Profile Picture */}
        <div
          ref={imageRef}
          className="relative rounded-full overflow-hidden border-4 border-primary flex items-center justify-center bg-secondary"
        >
          <div className="inset-0 bg-primary-700 rounded-full">
            <img
              src={data.Biography[0].profile}
              alt={data.Biography[0].alt}
              width={150}
              height={150}
              className="relative z-10 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full flex-grow gap-[30px]">
          {/* Biography */}
          <div
            ref={textRef}
            className="flex flex-col justify-center lg:justify-start lg:items-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-[30px] lg:text-[40px] font-bold text-left uppercase text-primary">
              BIOGRAPHY
            </p>
            <div className="flex flex-col flex-grow-0 flex-shrink-0 text-[20px] lg:text-xl font-semibold lg:text-left text-center text-black">
              <p className="flex-grow-0 flex-shrink-0 lg:text-xl font-semibold lg:text-left text-center text-black">
                I’m a Frontend Developer &amp; UI/UX Design Enthusiast.
              </p>
              <p className="flex-grow-0 flex-shrink-0 lg:text-xl font-semibold lg:text-left text-center text-black">
                Student Information Technology at Bumigora University.
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-8 py-1">
            {/* Instagram */}
            <a
              href={data.linkSocial[0].instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-14 h-14 p-4 rounded-[10px] border-2 border-[#033aca] hover:bg-[#033aca] group"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                e
                className="w-5 h-5 relative group-hover:fill-white"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clipPath="url(#clip0_1540_1626)">
                  <path
                    d="M5.8584 0.070014C4.7944 0.120181 4.06782 0.290014 3.43257 0.539514C2.77523 0.795764 2.21798 1.13951 1.66357 1.69593C1.10923 2.25235 0.767735 2.80993 0.513401 3.46843C0.267235 4.10493 0.100401 4.83218 0.0534013 5.89676C0.00640132 6.96135 -0.00401534 7.3036 0.00123466 10.0193C0.00640132 12.7348 0.0184013 13.0752 0.0699847 14.142C0.120818 15.2058 0.289985 15.9322 0.539568 16.5676C0.796235 17.225 1.13957 17.782 1.69623 18.3366C2.25282 18.8912 2.80998 19.2318 3.46998 19.4866C4.10598 19.7324 4.8334 19.9 5.89782 19.9466C6.96224 19.9933 7.30482 20.0041 10.0197 19.9988C12.7345 19.9937 13.0763 19.9816 14.1428 19.931C15.2095 19.8804 15.932 19.71 16.5677 19.4616C17.2251 19.2044 17.7825 18.8616 18.3367 18.3048C18.8908 17.748 19.2321 17.19 19.4862 16.5312C19.7327 15.8952 19.9001 15.1678 19.9462 14.1042C19.9929 13.0368 20.0039 12.696 19.9987 9.98085C19.9935 7.2656 19.9812 6.92518 19.9307 5.85876C19.8801 4.79235 19.7107 4.06818 19.4612 3.43235C19.2042 2.77493 18.8612 2.21835 18.3049 1.66335C17.7485 1.10835 17.19 0.767347 16.5315 0.513764C15.895 0.267514 15.1681 0.099764 14.1037 0.053764C13.0392 0.00776399 12.6967 -0.00415268 9.98082 0.00118066C7.26499 0.00634732 6.92498 0.018014 5.8584 0.070014ZM5.97523 18.1476C5.00023 18.1052 4.47082 17.9432 4.11798 17.8076C3.65082 17.6276 3.31798 17.41 2.9664 17.0618C2.61473 16.7136 2.39882 16.3796 2.2164 15.9134C2.0794 15.5606 1.9144 15.0318 1.86882 14.0568C1.81923 13.003 1.80882 12.6866 1.80298 10.0168C1.79715 7.34701 1.8074 7.03093 1.85357 5.97676C1.89523 5.0026 2.05823 4.4726 2.19357 4.11993C2.37357 3.65218 2.5904 3.31993 2.9394 2.9686C3.2884 2.61718 3.6214 2.40076 4.08798 2.21835C4.44048 2.08076 4.96923 1.91718 5.94382 1.87076C6.9984 1.82076 7.3144 1.81076 9.98382 1.80493C12.6532 1.7991 12.9701 1.8091 14.0251 1.8556C14.9992 1.89793 15.5295 2.05935 15.8817 2.1956C16.3491 2.3756 16.6817 2.59176 17.0331 2.94143C17.3845 3.29093 17.6011 3.62276 17.7835 4.09035C17.9212 4.44176 18.0849 4.97035 18.1309 5.9456C18.1811 7.00018 18.1925 7.31643 18.1972 9.9856C18.2021 12.6548 18.1927 12.9718 18.1464 14.0256C18.1039 15.0006 17.9422 15.5302 17.8064 15.8834C17.6264 16.3504 17.4095 16.6834 17.0602 17.0346C16.7111 17.3858 16.3785 17.6022 15.9117 17.7846C15.5597 17.922 15.0302 18.086 14.0565 18.1324C13.0018 18.182 12.6858 18.1924 10.0154 18.1983C7.34499 18.2041 7.02982 18.1933 5.97523 18.1476ZM14.1275 4.65535C14.1279 4.89271 14.1987 5.12462 14.3309 5.32174C14.4631 5.51887 14.6508 5.67237 14.8702 5.76281C15.0897 5.85326 15.331 5.87659 15.5637 5.82986C15.7965 5.78313 16.0101 5.66843 16.1776 5.50028C16.3451 5.33213 16.459 5.11807 16.5049 4.88518C16.5507 4.6523 16.5265 4.41104 16.4352 4.19193C16.344 3.97282 16.1898 3.7857 15.9921 3.65423C15.7945 3.52276 15.5623 3.45285 15.325 3.45335C15.0068 3.45401 14.7019 3.581 14.4774 3.80641C14.2528 4.03181 14.127 4.33717 14.1275 4.65535ZM4.8654 10.01C4.87098 12.846 7.17424 15.1398 10.0096 15.1344C12.8451 15.129 15.1404 12.826 15.1351 9.99001C15.1297 7.15401 12.8259 4.8596 9.99007 4.86518C7.15424 4.87076 4.86007 7.17435 4.8654 10.01ZM6.66665 10.0064C6.66535 9.34717 6.85957 8.70232 7.22476 8.15344C7.58994 7.60455 8.10969 7.17628 8.71827 6.92279C9.32685 6.66929 9.99694 6.60195 10.6438 6.72929C11.2906 6.85662 11.8852 7.17291 12.3523 7.63815C12.8194 8.1034 13.1381 8.6967 13.268 9.34304C13.3979 9.98939 13.3332 10.6597 13.0821 11.2693C12.831 11.8789 12.4048 12.4003 11.8574 12.7677C11.31 13.1351 10.6659 13.3319 10.0067 13.3332C9.56889 13.3341 9.13524 13.2488 8.73046 13.0821C8.32568 12.9154 7.95771 12.6706 7.64755 12.3617C7.33739 12.0527 7.09113 11.6857 6.92282 11.2816C6.75452 10.8775 6.66747 10.4442 6.66665 10.0064Z"
                    className="fill-[#033aca] group-hover:fill-white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1540_1626">
                    <rect width={20} height={20} fill="white" />
                  </clippath>
                </defs>
              </svg>
            </a>
            {/* Github */}
            <a
              href={data.linkSocial[1].github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-14 h-14 p-4 rounded-[10px] border-2 border-[#033aca] hover:bg-[#033aca] group"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 relative group-hover:fill-white"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clip-path="url(#clip0_1540_1628)">
                  <path
                    d="M10 0.247498C4.475 0.247498 0 4.725 0 10.2475C0 14.6667 2.865 18.4142 6.8375 19.735C7.3375 19.8292 7.52083 19.52 7.52083 19.2542C7.52083 19.0167 7.5125 18.3875 7.50833 17.5542C4.72667 18.1575 4.14 16.2125 4.14 16.2125C3.685 15.0583 3.0275 14.75 3.0275 14.75C2.12167 14.13 3.0975 14.1425 3.0975 14.1425C4.10167 14.2125 4.62917 15.1725 4.62917 15.1725C5.52083 16.7017 6.97 16.26 7.54167 16.0042C7.63167 15.3575 7.88917 14.9167 8.175 14.6667C5.95417 14.4167 3.62 13.5567 3.62 9.725C3.62 8.63333 4.0075 7.74166 4.64917 7.04166C4.53667 6.78916 4.19917 5.7725 4.73667 4.395C4.73667 4.395 5.57417 4.12666 7.48667 5.42C8.28667 5.1975 9.13667 5.0875 9.98667 5.0825C10.8367 5.0875 11.6867 5.1975 12.4867 5.42C14.3867 4.12666 15.2242 4.395 15.2242 4.395C15.7617 5.7725 15.4242 6.78916 15.3242 7.04166C15.9617 7.74166 16.3492 8.63333 16.3492 9.725C16.3492 13.5667 14.0117 14.4125 11.7867 14.6583C12.1367 14.9583 12.4617 15.5717 12.4617 16.5083C12.4617 17.8467 12.4492 18.9217 12.4492 19.2467C12.4492 19.5092 12.6242 19.8217 13.1367 19.7217C17.1375 18.41 20 14.66 20 10.2475C20 4.725 15.5225 0.247498 10 0.247498Z"
                    className="fill-[#033aca] group-hover:fill-white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1540_1628">
                    <rect width={20} height={20} fill="white" />
                  </clippath>
                </defs>
              </svg>
            </a>
            {/* Linkedin */}
            <a
              href={data.linkSocial[2].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-14 h-14 p-4 rounded-[10px] border-2 border-[#033aca] hover:bg-[#033aca] group"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 relative group-hover:fill-white"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clip-path="url(#clip0_1541_1630)">
                  <path
                    d="M15.8333 0H4.16667C1.86583 0 0 1.86583 0 4.16667V15.8333C0 18.1342 1.86583 20 4.16667 20H15.8333C18.135 20 20 18.1342 20 15.8333V4.16667C20 1.86583 18.135 0 15.8333 0ZM6.66667 15.8333H4.16667V6.66667H6.66667V15.8333ZM5.41667 5.61C4.61167 5.61 3.95833 4.95167 3.95833 4.14C3.95833 3.32833 4.61167 2.67 5.41667 2.67C6.22167 2.67 6.875 3.32833 6.875 4.14C6.875 4.95167 6.2225 5.61 5.41667 5.61ZM16.6667 15.8333H14.1667V11.1633C14.1667 8.35667 10.8333 8.56917 10.8333 11.1633V15.8333H8.33333V6.66667H10.8333V8.1375C11.9967 5.9825 16.6667 5.82333 16.6667 10.2008V15.8333Z"
                    className="fill-[#033aca] group-hover:fill-white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1541_1630">
                    <rect width={20} height={20} fill="white" />
                  </clippath>
                </defs>
              </svg>
            </a>
            {/* Behance */}
            <a
              href={data.linkSocial[3].behance}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-14 h-14 p-4 rounded-[10px] border-2 border-[#033aca] hover:bg-[#033aca] group"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 relative group-hover:fill-white"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.1408 14.1058C14.3529 14.3022 14.6027 14.4535 14.875 14.5505C15.1473 14.6475 15.4365 14.6881 15.725 14.67C16.1822 14.6816 16.6305 14.5425 17.0008 14.2742C17.3025 14.0783 17.5308 13.7875 17.65 13.4492H19.8042C19.5747 14.4139 19.0145 15.2678 18.2208 15.8625C17.459 16.368 16.5589 16.6243 15.645 16.5958C14.9928 16.6043 14.3455 16.4816 13.7417 16.235C13.1952 16.0073 12.7051 15.6629 12.3058 15.2258C11.9082 14.768 11.6026 14.2378 11.4058 13.6642C11.1853 13.0228 11.0773 12.3481 11.0867 11.67C11.0825 11.0033 11.1942 10.3408 11.4167 9.71249C11.7168 8.82895 12.2883 8.06281 13.0498 7.52345C13.8112 6.9841 14.7236 6.6991 15.6567 6.70916C16.3458 6.69486 17.0272 6.85633 17.6367 7.17832C18.1875 7.47999 18.6625 7.90332 19.0267 8.41582C19.3987 8.95328 19.6654 9.55645 19.8125 10.1933C19.9742 10.8775 20.0317 11.5817 19.9833 12.2833H13.5675C13.515 12.9417 13.7208 13.595 14.1408 14.1058ZM5.78917 3.40332C6.32941 3.39354 6.86886 3.44894 7.39583 3.56832C7.83975 3.66504 8.26115 3.84548 8.6375 4.09999C8.98583 4.35249 9.26083 4.69249 9.43583 5.08499C9.63667 5.56749 9.73333 6.08749 9.72 6.60999C9.74326 7.18433 9.59658 7.75277 9.29833 8.24416C8.98513 8.70801 8.55236 9.07858 8.04583 9.31666C8.73354 9.5019 9.33254 9.92655 9.735 10.5142C10.1217 11.1367 10.3158 11.86 10.2933 12.5925C10.3066 13.1764 10.186 13.7557 9.94083 14.2858C9.71454 14.7489 9.38255 15.1522 8.97167 15.4633C8.54938 15.7716 8.07396 15.9996 7.56917 16.1358C7.04598 16.2808 6.5054 16.3534 5.9625 16.3517H0V3.40332H5.78917ZM5.59333 14.1533C5.85 14.1567 6.10667 14.1292 6.35667 14.0708C6.58528 14.0206 6.80203 13.9266 6.995 13.7942C7.185 13.6625 7.3375 13.485 7.44 13.2783C7.55833 13.0142 7.61333 12.7258 7.59917 12.4375C7.62495 12.1742 7.59014 11.9086 7.49741 11.6609C7.40467 11.4131 7.25648 11.1899 7.06417 11.0083C6.65618 10.7083 6.15651 10.5595 5.65083 10.5875H2.70083V14.1533H5.59333ZM16.9558 9.18082C16.7763 9.00127 16.5604 8.86231 16.3226 8.77333C16.0849 8.68434 15.8308 8.6474 15.5775 8.66499C15.2412 8.65195 14.9073 8.72632 14.6083 8.88082C14.3714 9.01106 14.1625 9.18661 13.9933 9.39749C13.8427 9.59469 13.7307 9.81863 13.6633 10.0575C13.6017 10.2567 13.5633 10.4617 13.5492 10.6692H17.5233C17.4885 10.1277 17.2913 9.60935 16.9575 9.18166L16.9558 9.18082ZM5.445 8.64082C5.86972 8.65819 6.28777 8.53098 6.63083 8.27999C6.96333 7.98416 7.13667 7.54666 7.0975 7.10249C7.1083 6.84668 7.05743 6.59202 6.94917 6.35999C6.85681 6.17565 6.71369 6.02154 6.53667 5.91582C6.35714 5.79945 6.15536 5.72169 5.94417 5.68749C5.71502 5.64269 5.48178 5.6223 5.24833 5.62666H2.70083V8.65249H5.445V8.64082ZM18.0167 4.26832H13.0367V5.54082H18.0167V4.26832Z"
                  className="fill-[#033aca] group-hover:fill-white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;

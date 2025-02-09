import data from "../constants/data";

const Biography = () => {
  return (
    <div
      id="biography"
      className="flex mt-[-280px] lg:mt-0 flex-col justify-start items-center w-full h-full relative overflow-hidden gap-[100px] px-5 py-10 lg:p-[100px] lg:rounded-tl-[80px] rounded-tl-[40px] rounded-tr-[40px] lg:rounded-tr-[80px] bg-white"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10">
        <div className="relative rounded-full overflow-hidden border-4 border-primary flex items-center justify-center bg-secondary">
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
          <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
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

          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-8 py-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-14 h-14 relative gap-2 p-4 rounded-[10px] border-2 border-[#033aca]">
              <svg
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <g clip-path="url(#clip0_1470_183)">
                  <path
                    d="M20 10.5C20 4.97715 15.5229 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 15.4912 3.65684 19.6283 8.4375 20.3785V13.3906H5.89844V10.5H8.4375V8.29688C8.4375 5.79063 9.93047 4.40625 12.2146 4.40625C13.3084 4.40625 14.4531 4.60156 14.4531 4.60156V7.0625H13.1922C11.95 7.0625 11.5625 7.8334 11.5625 8.625V10.5H14.3359L13.8926 13.3906H11.5625V20.3785C16.3432 19.6283 20 15.4912 20 10.5Z"
                    fill="#033aca"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1470_183">
                    <rect
                      width={20}
                      height={20}
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clippath>
                </defs>
              </svg>
            </div>
            <div className="flex justify-center lg:justify-start lg:items-start items-center flex-grow-0 flex-shrink-0 w-14 h-14 relative gap-2 p-4 rounded-[10px] border-2 border-[#033aca]">
              <svg
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 10.5C20 16.0228 15.5228 20.5 10 20.5C4.47715 20.5 0 16.0228 0 10.5C0 4.97715 4.47715 0.5 10 0.5C15.5228 0.5 20 4.97715 20 10.5ZM15.2047 9.03799C16.0117 9.03799 16.6667 9.69296 16.6667 10.5C16.6667 11.0965 16.3041 11.6111 15.8246 11.845C15.848 11.9854 15.8597 12.1257 15.8597 12.2778C15.8597 14.5234 13.2515 16.3362 10.0234 16.3362C6.79533 16.3362 4.18714 14.5234 4.18714 12.2778C4.18714 12.1257 4.19884 11.9737 4.22223 11.8333C3.70761 11.5994 3.35673 11.0965 3.35673 10.5C3.35673 9.69296 4.0117 9.03799 4.81872 9.03799C5.20468 9.03799 5.56726 9.20173 5.82457 9.44735C6.83041 8.71051 8.22223 8.25437 9.77778 8.20758L10.5146 4.7222C10.538 4.65203 10.5731 4.59355 10.6316 4.55846C10.6901 4.52337 10.7602 4.51168 10.8304 4.52337L13.2515 5.03799C13.4152 4.68711 13.7661 4.4532 14.1754 4.4532C14.7485 4.4532 15.2164 4.92103 15.2164 5.49413C15.2164 6.06723 14.7485 6.53507 14.1754 6.53507C13.614 6.53507 13.1579 6.09062 13.1345 5.54092L10.9708 5.08478L10.3041 8.20758C11.8246 8.26606 13.2047 8.7339 14.1988 9.44735C14.4561 9.19004 14.807 9.03799 15.2047 9.03799ZM7.70761 10.5C7.13451 10.5 6.66667 10.9678 6.66667 11.5409C6.66667 12.114 7.13451 12.5819 7.70761 12.5819C8.28071 12.5819 8.74854 12.114 8.74854 11.5409C8.74854 10.9678 8.28071 10.5 7.70761 10.5ZM10.0117 15.0497C10.4094 15.0497 11.7661 15.0029 12.4795 14.2895C12.5848 14.1842 12.5848 14.0204 12.5029 13.9035C12.3977 13.7982 12.2222 13.7982 12.117 13.9035C11.6608 14.3479 10.7135 14.5117 10.0234 14.5117C9.33334 14.5117 8.37427 14.3479 7.92983 13.9035C7.82457 13.7982 7.64913 13.7982 7.54386 13.9035C7.4386 14.0088 7.4386 14.1842 7.54386 14.2895C8.24562 14.9912 9.61404 15.0497 10.0117 15.0497ZM11.2515 11.5409C11.2515 12.114 11.7193 12.5819 12.2924 12.5819C12.8655 12.5819 13.3333 12.114 13.3333 11.5409C13.3333 10.9678 12.8655 10.5 12.2924 10.5C11.7193 10.5 11.2515 10.9678 11.2515 11.5409Z"
                  fill="#033ACA"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-14 h-14 relative gap-2 p-4 rounded-[10px] border-2 border-[#033aca]">
              <svg
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M6.2918 18.625C13.8371 18.625 17.9652 12.3723 17.9652 6.95161C17.9652 6.77583 17.9613 6.59614 17.9535 6.42036C18.7566 5.83961 19.4496 5.12027 20 4.29614C19.2521 4.62889 18.458 4.84621 17.6449 4.94067C18.5011 4.42748 19.1421 3.62129 19.4492 2.67153C18.6438 3.14886 17.763 3.48557 16.8445 3.66724C16.2257 3.0097 15.4075 2.57432 14.5164 2.42844C13.6253 2.28255 12.711 2.43427 11.9148 2.86014C11.1186 3.28601 10.4848 3.96232 10.1115 4.78449C9.73825 5.60666 9.64619 6.52891 9.84961 7.40864C8.21874 7.3268 6.62328 6.90315 5.16665 6.16514C3.71002 5.42714 2.42474 4.39126 1.39414 3.12466C0.870333 4.02776 0.710047 5.09643 0.945859 6.11347C1.18167 7.13051 1.79589 8.0196 2.66367 8.60005C2.01219 8.57937 1.37498 8.40396 0.804688 8.08833V8.13911C0.804104 9.08685 1.13175 10.0055 1.73192 10.739C2.3321 11.4725 3.16777 11.9755 4.09687 12.1625C3.49338 12.3277 2.85999 12.3517 2.2457 12.2329C2.50788 13.0479 3.01798 13.7608 3.70481 14.272C4.39164 14.7832 5.22093 15.0672 6.07695 15.0844C4.62369 16.226 2.82848 16.8452 0.980469 16.8422C0.652739 16.8417 0.325333 16.8216 0 16.7821C1.87738 17.9865 4.06128 18.6262 6.2918 18.625Z"
                  fill="#033ACA"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-14 h-14 relative gap-2 p-4 rounded-[10px] border-2 border-[#033aca]">
              <svg
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M8.24009 8.89001C7.67009 8.89001 7.22009 9.39001 7.22009 10C7.22009 10.61 7.68009 11.11 8.24009 11.11C8.81009 11.11 9.26009 10.61 9.26009 10C9.27009 9.39001 8.81009 8.89001 8.24009 8.89001ZM11.8901 8.89001C11.3201 8.89001 10.8701 9.39001 10.8701 10C10.8701 10.61 11.3301 11.11 11.8901 11.11C12.4601 11.11 12.9101 10.61 12.9101 10C12.9101 9.39001 12.4601 8.89001 11.8901 8.89001Z"
                  fill="#033ACA"
                />
                <path
                  d="M16.75 0.5H3.35005C2.22005 0.5 1.30005 1.42 1.30005 2.56V16.08C1.30005 17.22 2.22005 18.14 3.35005 18.14H14.69L14.16 16.29L15.44 17.48L16.65 18.6L18.8 20.5V2.56C18.8 1.42 17.88 0.5 16.75 0.5ZM12.89 13.56C12.89 13.56 12.53 13.13 12.23 12.75C13.54 12.38 14.04 11.56 14.04 11.56C13.63 11.83 13.24 12.02 12.89 12.15C12.39 12.36 11.91 12.5 11.44 12.58C10.48 12.76 9.60005 12.71 8.85005 12.57C8.28005 12.46 7.79005 12.3 7.38005 12.14C7.15005 12.05 6.90005 11.94 6.65005 11.8C6.62005 11.78 6.59005 11.77 6.56005 11.75C6.54005 11.74 6.53005 11.73 6.52005 11.72C6.34005 11.62 6.24005 11.55 6.24005 11.55C6.24005 11.55 6.72005 12.35 7.99005 12.73C7.69005 13.11 7.32005 13.56 7.32005 13.56C5.11005 13.49 4.27005 12.04 4.27005 12.04C4.27005 8.82 5.71005 6.21 5.71005 6.21C7.15005 5.13 8.52005 5.16 8.52005 5.16L8.62005 5.28C6.82005 5.8 5.99005 6.59 5.99005 6.59C5.99005 6.59 6.21005 6.47 6.58005 6.3C7.65005 5.83 8.50005 5.7 8.85005 5.67C8.91005 5.66 8.96005 5.65 9.02005 5.65C9.63005 5.57 10.32 5.55 11.04 5.63C11.99 5.74 13.01 6.02 14.05 6.59C14.05 6.59 13.26 5.84 11.5601 5.32L11.7 5.16C11.7 5.16 13.07 5.13 14.51 6.21C14.51 6.21 15.95 8.82 15.95 12.04C15.95 12.04 15.1 13.49 12.89 13.56Z"
                  fill="#033ACA"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;

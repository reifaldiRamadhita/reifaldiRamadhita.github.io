import imgSMA from "../assets/img-portofolio/logo-smanja.png";
import imgSMP from "../assets/img-portofolio/logo-smp.png";
import imgSD from "../assets/img-portofolio/logo-sd.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Education = ({ elEducation }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      ref={elEducation}
      className="relative h-fit w-full md:h-[600px] md:px-10 lg:min-h-screen lg:px-20"
    >
      {/* title */}
      <div className="absolute -right-14 bottom-1/2 h-fit w-fit rotate-90 overflow-hidden pb-3 md:-right-10 lg:right-0">
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="pr-12 text-end font-poiret text-5xl font-bold text-gray-900 dark:text-gray-200 md:text-6xl lg:text-7xl"
        >
          Education
        </h1>
        <div className="absolute -top-[2px] right-0 bg-gray-100 dark:bg-gray-900">
          <p className="bg-gradient-to-br from-gray-900 to-cyan-500 bg-clip-text text-7xl text-transparent">
            |
          </p>
        </div>
      </div>

      {/* main */}
      <div className="relative ml-8 flex h-fit w-1/2 scale-75 flex-col-reverse items-center justify-around overflow-hidden md:mx-auto md:-ml-10 md:h-full md:w-full md:flex-row lg:ml-32 lg:min-h-screen lg:w-2/3 lg:scale-100">
        <p className="absolute bottom-1/2 left-0 mb-5 hidden text-gray-900 dark:text-gray-300 md:block">
          2018
        </p>

        {/* sma */}
        <div className="z-10 flex scale-75 flex-col items-center bg-gray-100 dark:bg-gray-900 md:scale-100">
          <div className="flex h-36 w-36 scale-90 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-100 p-5 shadow-xl shadow-gray-300 dark:border-gray-400 dark:bg-gray-900 dark:shadow-gray-900 md:scale-100">
            <img src={imgSMA} alt="logo-sma" className="object-cover" />
          </div>
          <p className="mt-4 truncate text-center text-lg text-gray-900 dark:text-gray-200 md:mt-8">
            SMAN 1 JATILAWANG
          </p>
        </div>
        {/* bar */}
        <span className="absolute bottom-[60%] mb-7 inline-block h-0.5 w-[17%] rotate-90 bg-gray-900 dark:bg-gray-400 md:bottom-1/2 md:left-[24%] md:rotate-0"></span>
        {/* smp */}
        <div className="z-10 flex scale-75 flex-col items-center bg-gray-100 dark:bg-gray-900 md:scale-100">
          <div className="flex h-36 w-36 scale-90 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-100 p-8 shadow-xl shadow-gray-300 dark:border-gray-400 dark:bg-gray-900 dark:shadow-gray-900 md:scale-100">
            <img src={imgSMP} alt="logo-sma" className="object-cover" />
          </div>
          <p className="mt-4 truncate text-center text-lg text-gray-900 dark:text-gray-200 md:mt-8">
            SMPN 2 JATILAWANG
          </p>
        </div>
        {/* bar */}
        <span className="absolute bottom-[26%] right-[41%] mb-7 inline-block h-0.5 w-[19%] rotate-90 bg-gray-900 dark:bg-gray-400 md:bottom-1/2 md:right-1/4 md:rotate-0"></span>
        {/* sd */}
        <div className="z-10 flex scale-75 flex-col items-center bg-gray-100 dark:bg-gray-900 md:scale-100">
          <div className="flex h-36 w-36 scale-90 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-100 p-7 shadow-xl shadow-gray-300 dark:border-gray-400 dark:bg-gray-900 dark:shadow-gray-900 md:scale-100">
            <img src={imgSD} alt="logo-sma" className="object-cover" />
          </div>
          <p className="mt-4 truncate text-center text-lg text-gray-900 dark:text-gray-200 md:mt-8">
            SDN 2 TINGGARWANGI
          </p>
        </div>
        <p className="absolute bottom-1/2 right-0 mb-5 hidden text-gray-900 dark:text-gray-300 md:block">
          2006
        </p>
      </div>
    </section>
  );
};

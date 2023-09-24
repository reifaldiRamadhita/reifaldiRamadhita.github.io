import imgDMI from "../assets/img-portofolio/logo PT-Daido-Metal.png";
import imgMEAINA from "../assets/img-portofolio/Mitsubishi-Electric-Logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const WorkExperience = ({ elWorkExp }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      ref={elWorkExp}
      className="relative h-fit px-2 py-20 md:px-10 lg:px-20"
    >
      {/* title */}
      <div className="relative right-8 h-fit w-full overflow-hidden md:right-10 lg:right-32">
        <h1
          className="pr-11 text-end font-poiret text-5xl font-bold text-gray-900 dark:text-gray-200 md:text-6xl lg:text-7xl"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Work Experience
        </h1>
        <div className="absolute -top-[2px] right-0 h-full w-[6px] bg-gradient-to-br from-gray-900 to-cyan-500"></div>
      </div>

      {/* main */}
      <div className="mt-14 flex scale-90 flex-col items-center md:mt-0 md:scale-100">
        {/* daido */}
        <div className="relative ml-8 flex w-[75%] flex-col items-center justify-center pt-16 md:ml-16 md:h-[450px] md:flex-row md:gap-x-8 md:pt-0 lg:h-[630px] lg:gap-x-12">
          <div className="absolute -left-[75%] top-1/2 flex h-fit w-fit -rotate-90 items-center pt-5 text-gray-700 dark:text-gray-300 md:-left-72 md:top-1/2 md:pt-0">
            <span>21 / 12 / 2019</span>
            <span className="mx-3 inline-block h-[2px] w-20 bg-gray-700 dark:bg-gray-300 md:w-32"></span>
            <span>5 / 10 / 2018</span>
          </div>
          <div className="mb-6 flex h-1/2 flex-col items-center justify-between md:mb-0">
            <p className="text-center text-gray-900 dark:text-gray-300 md:text-start">
              MM 2100 Block M 25-26 Ganda Mekar,
              <br /> Cikarang Barat, Bekasi, Indonesia 17520
            </p>
          </div>
          <div className="mb-8 flex w-64 items-center justify-center bg-white shadow-xl shadow-gray-300 dark:shadow-gray-800 md:mb-0 md:h-44 lg:h-64">
            <img src={imgDMI} alt="img-company" className="w-52" />
          </div>
          <div className="flex items-center">
            <span className="hidden h-[2px] bg-gray-700 dark:bg-gray-400 md:inline-block md:w-20 lg:w-32"></span>
            <div className="border-l-0 border-gray-700 py-5 dark:border-gray-400 md:border-l-2 md:px-4 lg:px-8">
              <p className="truncate text-lg text-gray-900 dark:text-gray-300">
                Departmen : Production
              </p>
              <p className="text-lg text-gray-900 dark:text-gray-300">
                Position : Operator
              </p>
            </div>
          </div>
        </div>

        {/* meaina */}
        <div className="relative ml-8 flex w-[75%] flex-col items-center justify-center pt-16 md:ml-16 md:h-[450px] md:flex-row md:gap-x-8 md:pt-0 lg:h-[630px] lg:gap-x-12">
          <div className="absolute -left-[75%] top-1/2 flex h-fit w-fit -rotate-90 items-center pt-5 text-gray-700 dark:text-gray-300 md:-left-72 md:top-1/2 md:pt-0">
            <span>12 / 01 / 2023</span>
            <span className="mx-3 inline-block h-[2px] w-20 bg-gray-700 dark:bg-gray-300 md:w-32"></span>
            <span>13 / 01 / 2021</span>
          </div>
          <div className="mb-6 flex h-1/2 flex-col items-center justify-between md:mb-0">
            <p className="text-center text-gray-900 dark:text-gray-300 md:text-start">
              Bekasi International Estate Block C11 <br />
              No 1-5 Cikarang Selatan Bekasi 17550 - Indonesia
            </p>
          </div>
          <div className="mb-8 flex w-64 items-center justify-center bg-white shadow-xl shadow-gray-300 dark:shadow-gray-800 md:mb-0 md:h-44 lg:h-64">
            <img src={imgMEAINA} alt="img-company" className="w-52" />
          </div>
          <div className="flex items-center">
            <span className="hidden h-[2px] bg-gray-700 dark:bg-gray-400 md:inline-block md:w-20 lg:w-32"></span>
            <div className="border-l-0 border-gray-700 py-5 dark:border-gray-400 md:border-l-2 md:px-4 lg:px-8">
              <p className="truncate text-lg text-gray-900 dark:text-gray-300">
                Departmen : Production
              </p>
              <p className="truncate text-lg text-gray-900 dark:text-gray-300">
                Position : Operator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

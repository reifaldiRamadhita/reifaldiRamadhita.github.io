import imgCoffeeLaptop from "../assets/img-portofolio/project-coffeeshop-laptop.png";
import imgCoffeeHp from "../assets/img-portofolio/project-coffeeshop-hp.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Project = ({ elProject }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      ref={elProject}
      className="relative h-fit w-full py-16 md:px-10 lg:min-h-screen lg:px-20"
    >
      {/* title */}
      <div className="absolute left-8 top-20 h-fit w-fit overflow-hidden pb-3 md:left-16 lg:left-32">
        <h1 className="pr-12 text-end font-poiret text-5xl font-bold text-gray-900 dark:text-gray-200 md:text-6xl lg:text-7xl">
          My Project
        </h1>
        <div className="absolute -top-[2px] right-0 bg-gray-100 dark:bg-gray-900">
          <p className="bg-gradient-to-br from-gray-900 to-cyan-500 bg-clip-text text-7xl text-transparent">
            |
          </p>
        </div>
      </div>

      {/* main */}
      <div className="mt-24 w-full md:mt-44 md:h-fit lg:min-h-screen">
        {/* laptop */}
        <div className="flex items-center justify-center gap-x-5 pt-20 md:gap-x-20">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="w-1/3 bg-[#252a2f] p-2 shadow-xl shadow-gray-400 dark:shadow-gray-900 md:p-14"
          >
            <img
              src={imgCoffeeLaptop}
              alt="img-coffee-laptop"
              className="object-cover"
            />
          </div>
          <h2
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-3xl text-gray-900 dark:text-gray-200 md:text-5xl"
          >
            Coffee Shop
          </h2>
        </div>
        {/* hp */}
        <div className="flex items-center justify-center gap-x-5 pt-16 md:gap-x-20 md:pt-40">
          <ul>
            <li>
              <h2 className="mb-3 text-2xl text-gray-900 dark:text-gray-200 md:mb-5 md:text-3xl">
                Technology
              </h2>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <p className="mb-1 text-end text-base text-gray-700 dark:text-gray-400 md:text-lg">
                HTML
              </p>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <p className="mb-1 text-end text-base text-gray-700 dark:text-gray-400 md:text-lg">
                CSS
              </p>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <p className="mb-1 text-end text-base text-gray-700 dark:text-gray-400 md:text-lg">
                Javascript
              </p>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <p className="mb-1 text-end text-base text-gray-700 dark:text-gray-400 md:text-lg">
                Tailwind CSS
              </p>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="400"
            >
              <p className="mb-1 text-end text-base text-gray-700 dark:text-gray-400 md:text-lg">
                React JS
              </p>
            </li>
          </ul>
          <div className="w-1/3 bg-[#252a2f] p-2 shadow-xl shadow-gray-400 dark:shadow-gray-900 md:w-1/4 md:p-14">
            <img
              src={imgCoffeeHp}
              alt="img-coffee-hp"
              className="object-cover"
            />
          </div>
        </div>

        <a
          href="https://github.com/reifaldiRamadhita/coffee-shop"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-14 block w-28 scale-90 bg-gradient-to-br from-gray-900 to-cyan-500 py-3 text-center text-lg font-bold text-gray-100 shadow-lg dark:from-gray-800 dark:to-cyan-500 md:mt-32 md:scale-100"
        >
          View
        </a>
      </div>
    </section>
  );
};

// bg-[#252a2f]

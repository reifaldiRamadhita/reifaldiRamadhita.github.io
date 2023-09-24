import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import imgAbout from "../assets/img-portofolio/img-about.jpg";

export const About = ({ elAbout }) => {
  const imgPerson = useRef(null);
  useEffect(() => {
    AOS.init();

    VanillaTilt.init(imgPerson.current, {
      max: 25,
      speed: 400,
    });
  }, []);

  return (
    <section
      ref={elAbout}
      className="relative flex items-center px-8 py-20 dark:bg-gray-900 md:h-fit md:px-16 md:py-20 md:pt-0 lg:min-h-screen lg:px-32 lg:py-0"
    >
      <div className="flex flex-col md:ml-10 md:items-center lg:ml-20 lg:flex-row">
        <div className="z-10 w-44 md:w-64 lg:w-96">
          <img
            ref={imgPerson}
            src={imgAbout}
            alt="img"
            className="rounded-sm shadow-xl shadow-gray-900"
            data-tilt
            data-tilt-reset="false"
          />
        </div>

        <div className="w-80 md:ml-10 md:mt-8 lg:ml-20 lg:mt-0">
          <p className="mt-8 text-base leading-loose text-gray-800 dark:text-gray-300 md:text-lg">
            Hai every one, My name is Reifaldi Ramadhita but i would like if you
            call me Reii.
            <br />
            <br />I live in Banyumas, Indonesia. I was born in Banyumas, 17 Mei
            2000. I`m {new Date().getFullYear() - 2000} years old.
            <br />
            <br />I am passionate about learning new Technologies and staying
            up-to-date with the last trends in Web Development
          </p>
        </div>
      </div>

      {/* title */}
      <div className="absolute -right-5 top-28 z-10 h-fit w-fit rotate-90 overflow-hidden md:right-24 md:top-1/3">
        <h1
          className="pr-12 text-end font-poiret text-6xl font-bold text-gray-900 dark:text-gray-200 md:text-7xl lg:text-8xl"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          About
        </h1>
        <div className="absolute -right-3 -top-[2px] bg-gray-100 dark:bg-slate-900">
          <p className="bg-gradient-to-br from-gray-900 to-cyan-500 bg-clip-text text-8xl text-transparent">
            |
          </p>
        </div>
      </div>
    </section>
  );
};

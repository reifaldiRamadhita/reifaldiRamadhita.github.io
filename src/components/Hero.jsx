/* eslint-disable no-undef */
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger, TextPlugin, EasePack } from "gsap/all";
import Typewriter from "typewriter-effect/dist/core";
gsap.registerPlugin(ScrollTrigger, TextPlugin, EasePack);

export const Hero = ({ elHome, handleGoToContact }) => {
  const container = useRef(null);
  const textHero = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(textHero.current, {
      autoStart: true,
    });

    typewriter
      .pauseFor(5000)
      .typeString("I am someone who is interested in technology and innovation")
      .start();

    const ctx = gsap.context(() => {
      // animation left side
      var magnets = document.querySelectorAll(".magnetic");
      var strength = 50;

      magnets.forEach((magnet) => {
        magnet.addEventListener("mousemove", moveMagnet);
        magnet.addEventListener("mouseout", function (event) {
          TweenMax.to(event.currentTarget, 1, {
            x: 0,
            y: 0,
            ease: Power4.easeOut,
          });
        });
      });

      function moveMagnet(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();

        TweenMax.to(magnetButton, 1, {
          x:
            ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
            strength,
          y:
            ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
            strength,
          ease: Power4.easeOut,
        });
      }
    }, container.current);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={elHome}
      className="relative h-screen overflow-hidden px-8 md:h-[800px] md:px-0 lg:h-screen lg:px-20"
    >
      <div
        ref={container}
        className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden"
      >
        <div className="relative z-10 h-fit w-fit">
          <p className="mb-6 text-center text-xl font-semibold text-gray-700 dark:text-gray-200 md:text-2xl">
            Hey there, I&apos;m
          </p>
          <h1 className="mb-3 text-center text-4xl font-bold text-gray-800 dark:text-gray-100 md:text-5xl">
            Reifaldi Ramadhita
          </h1>
          <p
            ref={textHero}
            className="h-16 text-center text-lg text-gray-700 dark:text-gray-300 md:h-fit md:text-xl"
          ></p>
        </div>

        {/* button chat */}
        <div className="magnetic group relative z-10 -ml-0 flex h-28 w-40 cursor-pointer items-center justify-center md:-ml-4">
          <div className="absolute h-14 w-36 rounded-full border-2 border-gray-500 shadow-md shadow-gray-300 backdrop-blur-sm transition duration-1000 group-hover:bg-white dark:shadow-gray-900"></div>
          <div
            onClick={handleGoToContact}
            className="magnetic z-10 flex h-full w-full items-center justify-center text-center text-gray-500"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="#6b7280"
            >
              <title>Google Chat</title>
              <path d="M7.533 0a1.816 1.816 0 0 0-1.816 1.816v2.832h11.178c1.043 0 1.888.855 1.888 1.91v8.204h2.906a1.816 1.816 0 0 0 1.817-1.817V1.816A1.816 1.816 0 0 0 21.689 0H7.533zM2.311 5.148A1.816 1.816 0 0 0 .494 6.965V23.09c0 .81.979 1.215 1.55.642l3.749-3.748h10.674a1.816 1.816 0 0 0 1.816-1.816V6.965a1.816 1.816 0 0 0-1.816-1.817H2.31Z" />
            </svg>
            <p className="ml-2 h-fit w-fit truncate text-lg">Let`s Talk</p>
          </div>
        </div>
      </div>
    </section>
  );
};

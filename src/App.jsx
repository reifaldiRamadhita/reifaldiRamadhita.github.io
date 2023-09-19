/* eslint-disable no-undef */
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skill } from "./components/Skill";
import { WorkExperience } from "./components/WorkExperience";
import { Project } from "./components/Project";
import { Education } from "./components/Education";
import { Certificate } from "./components/Certificate";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";

import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { useRef, useLayoutEffect } from "react";
import { TextPlugin, EasePack } from "gsap/all";
import { Particels } from "./components/Particles";
gsap.registerPlugin(TextPlugin, EasePack);

function App() {
  const wrapper = useRef(null);
  const elHome = useRef(null);
  const elAbout = useRef(null);
  const elSkill = useRef(null);
  const elWorkExp = useRef(null);
  const elProject = useRef(null);
  const elEducation = useRef(null);
  const elCertificate = useRef(null);
  const elContact = useRef(null);
  const opening = useRef(null);

  useLayoutEffect(() => {
    // smoothe scroll
    const lenis = new Lenis({
      wrapper: document.querySelector("html"),
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // opening
    const ctx = gsap.context(() => {
      gsap.registerPlugin(TextPlugin, EasePack);

      function machineGun(text) {
        var words = text.split(" "),
          // eslint-disable-next-line no-unused-vars
          tl = gsap.timeline({ delay: 0.6, repeat: 2, repeatDelay: 4 }),
          wordCount = words.length,
          time = 0,
          word,
          element,
          duration,
          isSentenceEnd,
          i;

        var container = document.getElementById("animateOpening");

        for (i = 0; i < wordCount; i++) {
          word = words[i];
          isSentenceEnd = /(\.|\?|!)$/.test(word);
          element = document.createElement("h3");
          element.textContent = word;
          container.appendChild(element);
          duration = Math.max(0.5, word.length * 0.15);
          if (isSentenceEnd) {
            duration += 0.6;
          }

          element.style.opacity = 0;
          element.style.transform = "scale(0) translateZ(0.01)";

          gsap.to(element, {
            duration: duration,
            scale: 1.2,
            ease: "slow(0.25, 0.9)",
            delay: time,
          });

          gsap.to(element, {
            duration: duration,
            opacity: 1,
            ease: "slow(0.25, 0.9, true)",
            delay: time,
          });

          time += duration - 0.05;
          if (isSentenceEnd) {
            time += 0.6;
          }
        }
      }
      machineGun("Halo Hi こんにちは Bonjour 안녕하세요 halloWorld");

      gsap.to(opening.current, {
        delay: 5,
        duration: 1,
        xPercent: -100,
      });
    }, wrapper.current);

    return () => ctx.revert();
  }, []);

  // handle go to contact
  const handleGoToContact = () => {
    window.scrollTo({
      top: elContact.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // handle go to section
  const handleGoToSection = (section) => {
    const objSection = {
      elHome,
      elAbout,
      elSkill,
      elWorkExp,
      elProject,
      elEducation,
      elCertificate,
      elContact,
    };
    const getSection = objSection[section];
    window.scrollTo({
      top: getSection.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={wrapper} className="relative">
      <div
        ref={opening}
        className="fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center overflow-hidden bg-cyan-950"
        id="animateOpening"
      ></div>
      <div className="relative w-full bg-gray-100 transition duration-300 dark:bg-gray-900 dark:transition dark:duration-500">
        <Navbar handleGoToSection={handleGoToSection} />
        <Hero elHome={elHome} handleGoToContact={handleGoToContact} />
        <About elAbout={elAbout} />
        <Skill elSkill={elSkill} />
        <WorkExperience elWorkExp={elWorkExp} />
        <Project elProject={elProject} />
        <Education elEducation={elEducation} />
        <Certificate elCertificate={elCertificate} />
        <Contact elContact={elContact} />
        <div className="absolute left-0 top-0 h-screen w-screen">
          <Particels />
        </div>
      </div>
    </div>
  );
}

export default App;

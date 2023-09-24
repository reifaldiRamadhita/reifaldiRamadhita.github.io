import { useState, useRef } from "react";
import logoR from "../assets/img-portofolio/logo-R.svg";

export const Navbar = ({ handleGoToSection }) => {
  const checkMode = localStorage.theme === "dark";
  const [showMenu, setShowMenu] = useState(false);
  const [checked, setChecked] = useState(checkMode);
  const btnMenu = useRef(null);
  const html = document.querySelector("html");
  const navbar = useRef(null);
  const progresScoll = useRef(null);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  // light/dark mode
  const handleMode = (e) => {
    if (e.target.checked) {
      html.classList.add("dark");
      localStorage.theme = "dark";
      setChecked(true);
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
      setChecked(false);
    }
  };
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  window.onclick = (e) => {
    const overlay = document.querySelector("#overlay");
    if (e.target === overlay) {
      setShowMenu(!showMenu);
    }
  };

  // progresBar
  function progressBarScroll() {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;

    progresScoll.current.style.width = `${scrolled}%`;
    progresScoll.current.style.height = "2px";
  }

  window.onscroll = function () {
    progressBarScroll();

    // visible/invisible background navbar
    window.scrollY > 0
      ? (navbar.current.style = "backdrop-filter: blur(50px);")
      : (navbar.current.style = "backdrop-filter: blur(0);");
  };

  return (
    <>
      <section
        ref={navbar}
        className="fixed left-0 top-0 z-50 flex h-fit w-full flex-col justify-between"
      >
        <div className="flex h-16 items-center justify-between px-8 md:px-16 lg:px-32">
          {/* title */}
          <div className="flex h-full w-fit items-center">
            <img
              src={logoR}
              alt="logo-portfolio"
              className="h-11 w-11 md:h-12 md:w-12"
            />
            <p className="ml-1 text-xl text-gray-400 md:text-2xl">Portfolio</p>
          </div>
          {/* button */}
          <label
            ref={btnMenu}
            htmlFor="menu"
            className="relative flex h-fit w-fit scale-75 cursor-pointer items-center justify-evenly gap-x-2 py-4 md:scale-100"
          >
            <span
              style={
                showMenu
                  ? { backgroundColor: "#22c55e", transitionDelay: "200ms" }
                  : {}
              }
              className="block h-4 w-4 cursor-pointer rounded-full border-2 border-green-400 delay-100"
            ></span>
            <span
              style={
                showMenu
                  ? { backgroundColor: "#eab308", transitionDelay: "100ms" }
                  : {}
              }
              className="block h-4 w-4 cursor-pointer rounded-full border-2 border-yellow-400 delay-200"
            ></span>
            <span className="block h-4 w-4 cursor-pointer rounded-full border-2 border-red-400 bg-red-500"></span>
          </label>
          <input
            type="checkbox"
            onClick={handleShowMenu}
            id="menu"
            value={showMenu}
            className="hidden"
          />
        </div>

        {/* progres scroll */}
        <div
          ref={progresScoll}
          className="flex items-center justify-end bg-cyan-500"
        ></div>
      </section>

      {/* list menu */}
      <div
        style={
          showMenu
            ? { transform: "translateY(4rem)", transitionDuration: "500ms" }
            : { transform: "translateY(-100%)", transitionDuration: "500ms" }
        }
        className="fixed z-40 flex h-full w-full -translate-y-full flex-col overflow-hidden shadow-sm transition duration-500 "
      >
        <div className="flex h-fit w-full justify-end py-5 backdrop-blur-lg">
          <ul className="grid h-52 w-full grid-cols-3 justify-items-end gap-x-4 gap-y-8 px-8 md:w-1/2 md:gap-x-14 md:px-16 lg:px-32">
            <li>
              <p
                onClick={() => handleGoToSection("elHome")}
                className="cursor-pointer text-end text-base text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-300 md:text-lg"
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => handleGoToSection("elAbout")}
                className="cursor-pointer text-end text-base text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-300 md:text-lg"
              >
                About
              </p>
            </li>
            <li>
              <p
                onClick={() => handleGoToSection("elSkill")}
                className="cursor-pointer text-end text-base text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-300 md:text-lg"
              >
                Skill
              </p>
            </li>
            <li>
              <p
                onClick={() => handleGoToSection("elWorkExp")}
                className="cursor-pointer truncate text-end text-base text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-300 md:text-lg"
              >
                Work Experience
              </p>
            </li>
            <li>
              <p
                onClick={() => handleGoToSection("elProject")}
                className="cursor-pointer text-end text-base text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-300 md:text-lg"
              >
                Project
              </p>
            </li>
            <li>
              <p
                onClick={() => handleGoToSection("elEducation")}
                className="cursor-pointer text-end text-base text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-300 md:text-lg"
              >
                Education
              </p>
            </li>
            <li>
              <p
                onClick={() => handleGoToSection("elCertificate")}
                className="cursor-pointer text-end text-base text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-300 md:text-lg"
              >
                Certificate
              </p>
            </li>
            <li>
              <p
                onClick={() => handleGoToSection("elContact")}
                className="cursor-pointer text-end text-base text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-300 md:text-lg"
              >
                Contact
              </p>
            </li>
            <li className="flex h-fit w-full justify-end overflow-hidden">
              <label
                htmlFor="mode"
                style={
                  checked
                    ? {
                        backgroundColor: "#d1d5db",
                        transitionDuration: "300ms",
                      }
                    : {
                        backgroundColor: "#4b5563",
                        transitionDuration: "300ms",
                      }
                }
                className="relative flex h-7 w-14 items-center justify-between rounded-full px-1"
              >
                {/* sun */}
                <span className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#f97316"
                    className="bi bi-brightness-low-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                  </svg>
                </span>
                {/* ball */}
                <span
                  style={
                    checked
                      ? {
                          transform: "translateX(29px)",
                          transition: "linear",
                          transitionDuration: "300ms",
                          backgroundColor: "#111827",
                        }
                      : {
                          transform: "translateX(0px)",
                          transition: "linear",
                          transitionDuration: "300ms",
                          backgroundColor: "#f3f4f6",
                        }
                  }
                  className="absolute z-10 h-5 w-5 rounded-full"
                ></span>
                {/* moon */}
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="#e5e7eb"
                    className="bi bi-moon-stars-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                  </svg>
                </span>
              </label>
              <input
                onClick={handleMode}
                type="checkbox"
                id="mode"
                className="hidden"
              />
            </li>
          </ul>
        </div>
        {/* overlay */}
        <div id="overlay" className="h-full w-full bg-transparent"></div>
      </div>
    </>
  );
};

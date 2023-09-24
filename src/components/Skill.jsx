import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import AOS from "aos";
import "aos/dist/aos.css";
gsap.registerPlugin(ScrollTrigger);

export const Skill = ({ elSkill }) => {
  useLayoutEffect(() => {
    AOS.init();
    const races = document.querySelector(".races");
    const racesWrapper = document.querySelector("#racesWrapper");

    const ctx = gsap.context(() => {
      function getScrollAmount() {
        let racesWidth = races.scrollWidth;
        return -(racesWidth - window.innerWidth);
      }
      const tween = gsap.to(races, {
        x: getScrollAmount(),
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: racesWrapper,
        start: "top top",
        end: () => `+=${(getScrollAmount() / 2) * -1}`,
        pin: true,
        pinnedContainer: racesWrapper,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
        preventOverlaps: 1,
      });
    }, races.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={elSkill} className="relative h-fit w-full pt-20">
      <div className="mx-auto w-[85%]">
        {/* title */}
        <div className="absolute top-20 h-fit w-fit overflow-hidden md:left-16 md:top-16 lg:left-28">
          <h1
            className="pr-12 text-end font-poiret text-5xl font-bold text-gray-900 dark:text-gray-200 md:text-6xl lg:text-7xl"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Skill
          </h1>
          <div className="absolute -top-[2px] right-0 bg-gray-100 dark:bg-gray-900">
            <p className="bg-gradient-to-br from-gray-900 to-cyan-500 bg-clip-text text-7xl text-transparent">
              |
            </p>
          </div>
        </div>

        {/* main */}
        <div
          id="racesWrapper"
          className="flex min-h-screen w-fit items-center overflow-hidden"
        >
          <div className="races flex h-fit w-fit flex-nowrap gap-x-0 md:gap-x-32">
            <div className="hidden h-96 w-[250px] md:block"></div>

            {/* html */}
            <div className="relative flex h-[500px] w-[400px] scale-75 items-center md:scale-100">
              <div className="ml-5 flex w-[300px] items-center gap-x-8">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#E34F26"
                  width="100"
                >
                  <title>HTML5</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
                <p className="text-4xl font-bold text-gray-700 dark:text-gray-300">
                  HTML 5
                </p>
              </div>

              <p className="absolute bottom-8 right-8 text-gray-900 dark:text-gray-400">
                Hypertext Markup Language |
              </p>

              <div className="absolute -left-10 top-8 flex h-fit w-fit rotate-90 items-center text-gray-900">
                <span className="text-lg text-cyan-600">1</span>
                <span className="mx-2 inline-block h-[2px] w-4 bg-gray-700 dark:bg-gray-400"></span>
                <span className="text-lg text-gray-800 dark:text-gray-200">
                  5
                </span>
              </div>
            </div>
            {/* css */}
            <div className="relative flex h-[500px] w-[400px] scale-75 items-center md:scale-100">
              <div className="ml-5 flex w-[300px] items-center gap-x-8">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1572B6"
                  width="100"
                >
                  <title>CSS3</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>
                <p className="text-4xl font-bold text-gray-700 dark:text-gray-300">
                  CSS
                </p>
              </div>

              <p className="absolute bottom-8 right-8 text-gray-900 dark:text-gray-400">
                Cascading Style Sheets |
              </p>

              <div className="absolute -left-10 top-8 flex h-fit w-fit rotate-90 items-center text-gray-900">
                <span className="text-lg text-cyan-600">2</span>
                <span className="mx-2 inline-block h-[2px] w-4 bg-gray-700 dark:bg-gray-400"></span>
                <span className="text-lg text-gray-800 dark:text-gray-200">
                  5
                </span>
              </div>
            </div>
            {/* js */}
            <div className="relative flex h-[500px] w-[400px] scale-75 items-center md:scale-100">
              <div className="ml-5 flex w-[300px] items-center gap-x-8">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F7DF1E"
                  width="100"
                >
                  <title>JavaScript</title>
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
                <p className="text-4xl font-bold text-gray-700 dark:text-gray-300">
                  JS
                </p>
              </div>

              <p className="absolute bottom-8 right-8 text-gray-900 dark:text-gray-400">
                Javascript |
              </p>

              <div className="absolute -left-10 top-8 flex h-fit w-fit rotate-90 items-center text-gray-900">
                <span className="text-lg text-cyan-600">3</span>
                <span className="mx-2 inline-block h-[2px] w-4 bg-gray-700 dark:bg-gray-400"></span>
                <span className="text-lg text-gray-800 dark:text-gray-200">
                  5
                </span>
              </div>
            </div>
            {/* tailwind */}
            <div className="relative flex h-[500px] w-[400px] scale-75 items-center md:scale-100">
              <div className="ml-5 flex w-[300px] items-center gap-x-8">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#06B6D4"
                  width="100"
                >
                  <title>Tailwind CSS</title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
                <p className="text-4xl font-bold text-gray-700 dark:text-gray-300">
                  Tailwind CSS
                </p>
              </div>

              <p className="absolute bottom-8 right-8 text-gray-900 dark:text-gray-400">
                Tailwind CSS |
              </p>

              <div className="absolute -left-10 top-8 flex h-fit w-fit rotate-90 items-center text-gray-900">
                <span className="text-lg text-cyan-600">4</span>
                <span className="mx-2 inline-block h-[2px] w-4 bg-gray-700 dark:bg-gray-400"></span>
                <span className="text-lg text-gray-800 dark:text-gray-200">
                  5
                </span>
              </div>
            </div>
            {/* react */}
            <div className="relative flex h-[500px] w-[400px] scale-75 items-center md:scale-100">
              <div className="ml-5 flex w-[300px] items-center gap-x-8">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#61DAFB"
                  width="100"
                >
                  <title>React</title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                </svg>
                <p className="text-4xl font-bold text-gray-700 dark:text-gray-300">
                  React
                </p>
              </div>

              <p className="absolute bottom-8 right-8 text-gray-900 dark:text-gray-400">
                React |
              </p>

              <div className="absolute -left-10 top-8 flex h-fit w-fit rotate-90 items-center text-gray-900">
                <span className="text-lg text-cyan-600">5</span>
                <span className="mx-2 inline-block h-[2px] w-4 bg-gray-700 dark:bg-gray-400"></span>
                <span className="text-lg text-gray-800 dark:text-gray-200">
                  5
                </span>
              </div>
            </div>

            <div className="hidden h-96 w-[250px] md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

import imgFccHMTLCSS from "../assets/img-portofolio/fcc-html-css.png";
import imgFccJs from "../assets/img-portofolio/fcc-js.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import "animate.css";

export const Certificate = ({ elCertificate }) => {
  const handleLookCf = (img) => {
    Swal.fire({
      width: "45em",
      padding: "0 30px 1.25em",
      imageUrl: img,
      imageWidth: "100%",
      imageAlt: "Custom image",
      confirmButtonColor: "#164e63",
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
      hideClass: {
        popup: "animate__animated animate__zoomOut",
      },
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      ref={elCertificate}
      className="relative h-fit w-full px-8 md:px-10 lg:min-h-screen lg:px-20"
    >
      {/* title */}
      <div className="absolute top-20 h-fit w-fit overflow-hidden md:left-16 md:top-16 lg:left-28">
        <h1
          className="pr-12 text-end font-poiret text-5xl font-bold text-gray-900 dark:text-gray-200 md:text-6xl lg:text-7xl"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Certificate
        </h1>
        <div className="absolute -top-[2px] right-0 bg-gray-100 dark:bg-gray-900">
          <p className="bg-gradient-to-br from-gray-900 to-cyan-500 bg-clip-text text-7xl text-transparent">
            |
          </p>
        </div>
      </div>

      {/* main */}
      <div className="mx-auto flex w-2/3 flex-col items-center justify-between gap-10 pt-52 md:h-full md:flex-row md:pb-32 lg:min-h-screen lg:pb-0 lg:pt-32">
        <div
          onClick={() => handleLookCf(imgFccHMTLCSS)}
          className="group relative cursor-pointer md:w-[400px]"
        >
          <img
            src={imgFccHMTLCSS}
            alt="certificate freecodecamp html-css"
            className="object-cover shadow-xl shadow-gray-400 dark:shadow-gray-800"
          />

          {/* overlay */}
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center transition duration-500 group-hover:backdrop-blur-sm">
            <p className="text-4xl font-bold text-transparent transition duration-500 group-hover:text-gray-800">
              View
            </p>
          </div>
        </div>
        <div
          onClick={() => handleLookCf(imgFccJs)}
          className="group relative cursor-pointer md:w-[400px]"
        >
          <img
            src={imgFccJs}
            alt="certificate freecodecamp javascript"
            className="object-cover shadow-xl shadow-gray-400 dark:shadow-gray-800"
          />
          {/* overlay */}
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center transition duration-500 group-hover:backdrop-blur-sm">
            <p className="text-4xl font-bold text-transparent transition duration-500 group-hover:text-gray-700">
              View
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

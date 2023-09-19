import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Contact = ({ elContact }) => {
  const form = useRef();
  const inputName = useRef();
  const inputTelephone = useRef();
  const inputEmail = useRef();
  const inputSubject = useRef();
  const inputMessage = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gl22j3f",
        "template_qq96aqu",
        form.current,
        "20NTrWOoFwI5UdmIZ",
      )
      .then(
        (result) => {
          console.log(result.text);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Success",
          });
        },
        (error) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: error.text,
          });
        },
      );

    inputName.current.value = "";
    inputTelephone.current.value = "";
    inputEmail.current.value = "";
    inputSubject.current.value = "";
    inputMessage.current.value = "";
  };

  return (
    <section
      ref={elContact}
      className="relative mt-20 min-h-screen w-full px-10 pt-20 md:px-20"
    >
      {/* title */}
      <div className="relative h-fit w-full overflow-hidden md:right-0 lg:right-32">
        <h1
          className="pr-12 text-end font-poiret text-5xl font-bold text-gray-900 dark:text-gray-200 md:text-6xl lg:text-7xl"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Contact
        </h1>
        <div className="absolute -top-[2px] right-0 bg-gray-100 dark:bg-gray-900">
          <p className="bg-gradient-to-br from-gray-900 to-cyan-500 bg-clip-text text-7xl text-transparent">
            |
          </p>
        </div>
      </div>

      {/* main */}
      <div className="mt-16 flex h-fit w-full flex-wrap items-center overflow-hidden md:mt-32">
        {/* form */}
        <div className="md:w-full lg:w-1/2">
          <form id="myForm" ref={form} onSubmit={sendEmail}>
            <div className="mb-3 flex gap-x-4">
              <input
                ref={inputName}
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full border-b-2 border-gray-900 bg-gray-100 px-6 py-4 text-base text-gray-900 outline-none dark:border-gray-400 dark:bg-gray-900 dark:text-gray-200 md:text-lg"
                required
              />
              <input
                ref={inputTelephone}
                type="tel"
                name="telephone"
                id="telephone"
                placeholder="Phone Number"
                className="w-full border-b-2 border-gray-900 bg-gray-100 px-6 py-4 text-base text-gray-900 outline-none dark:border-gray-400 dark:bg-gray-900 dark:text-gray-200 md:text-lg"
                required
              />
            </div>
            <div className="mb-3 flex gap-x-4">
              <input
                ref={inputEmail}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full border-b-2 border-gray-900 bg-gray-100 px-6 py-4 text-base text-gray-900 outline-none dark:border-gray-400 dark:bg-gray-900 dark:text-gray-200 md:text-lg"
                required
              />
              <input
                ref={inputSubject}
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full border-b-2 border-gray-900 bg-gray-100 px-6 py-4 text-base text-gray-900 outline-none dark:border-gray-400 dark:bg-gray-900 dark:text-gray-200 md:text-lg"
                required
              />
            </div>
            <textarea
              ref={inputMessage}
              name="message"
              id="message"
              placeholder="Write Your Message"
              className="mb-8 block h-56 w-full border-b-2 border-gray-900 bg-gray-100 px-6 py-4 text-base text-gray-900 outline-none dark:border-gray-400 dark:bg-gray-900 dark:text-gray-200 md:text-lg"
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="cursor-pointer bg-cyan-900 px-5 py-3 text-base text-white shadow-lg md:text-lg"
            />
          </form>
        </div>

        {/* social media */}
        <div className="relative md:w-full md:pt-32 lg:w-1/2 lg:pl-16 lg:pt-0">
          {/* title */}
          <div className="absolute hidden h-fit w-fit -rotate-90 items-center md:bottom-1/3 md:left-2/3 md:flex lg:-left-[16%] lg:top-1/2">
            <span className="inline-block h-1 bg-gradient-to-br from-cyan-500 to-gray-900 md:w-[25vh] lg:w-[50vh]"></span>
            <span className="truncate pl-4 text-gray-900 dark:text-gray-400">
              Contact Me
            </span>
          </div>
          <div className="mt-20 h-full w-full md:ml-0 md:mt-0 lg:ml-28">
            <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-gray-200">
              Have an Enquiry ?
            </h2>
            <p className="mb-5 text-lg text-gray-900 dark:text-gray-300">
              You can email me or give me a call by using the links below
            </p>

            {/* ig */}
            <div className="mb-3 flex items-center">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                fill="#6b7280"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
              <a
                href="https://www.instagram.com/reifaldiramadhita/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-5 text-lg text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-200 dark:hover:text-cyan-600"
              >
                reifaldiramadhita
              </a>
            </div>

            {/* fb */}
            <div className="mb-3 flex items-center">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                fill="#6b7280"
              >
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <a
                href="https://www.facebook.com/reifaldi.ramadhita/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-5 text-lg text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-200 dark:hover:text-cyan-600"
              >
                reifaldiramadhita
              </a>
            </div>

            {/* gtihub */}
            <div className="mb-3 flex items-center">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                fill="#6b7280"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <a
                href="https://github.com/reifaldiRamadhita?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-5 text-lg text-gray-900 transition duration-300 hover:text-cyan-600 dark:text-gray-200 dark:hover:text-cyan-600"
              >
                reifaldiRamadhita
              </a>
            </div>

            {/* email */}
            <div className="mb-10 flex items-center">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                fill="#6b7280"
              >
                <title>Gmail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
              <span className="ml-5 text-lg text-gray-900 dark:text-gray-200">
                reifaldir17@gmail.com
              </span>
            </div>

            <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-200">
              My Location
            </h2>
            <p className="mb-5 text-lg text-gray-900 dark:text-gray-300">
              Jatilawang, Banyumas, Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="relative mt-36">
        <hr className="h-0.5  bg-gray-800" />
        <p className="mt-6 pb-14 text-center text-gray-500">
          Copyright © 2023 Reifaldi Ramadhita. All Right Reserved
        </p>
      </div>
    </section>
  );
};

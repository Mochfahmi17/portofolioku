import HeroImage from "../assets/image/hero.svg";
import { mySkill, project } from "../data/data";
import myCV from "../assets/resources/my_CV.pdf";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Home Section Start */}
      <section className="homepage bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="hero grid grid-cols-1 items-center gap-20 pt-32 md:grid-cols-2">
            <div className="box">
              <h1 className="animate__animated animate__fadeInLeft text-base font-semibold text-teal-500 md:text-xl">
                Hi everyone 👋, my name is
                <span className="animate__animated animate__fadeInLeft mb-7 mt-1 block text-4xl font-bold text-slate-900 lg:text-5xl">
                  Mochammad Fahmi
                </span>
              </h1>
              <p className="mb-7 font-medium leading-relaxed text-slate-500 lg:text-lg">
                Welcome to my portfolio website, here you can see my skills and
                portfolio that you can see and access. You can also see my CV by
                downloading it. thank you.
              </p>
              <a
                href={myCV}
                download="Mochammad_Fahmi_CV"
                className="animate__animated animate__bounce animate__delay-1s inline-block rounded-md bg-teal-500 px-8 py-3 text-base font-semibold text-white shadow transition-all hover:bg-teal-400"
              >
                Download CV
              </a>
            </div>
            <div className="box">
              <img
                src={HeroImage}
                alt="Hero Image"
                className="animate__animated animate__fadeIn mx-auto w-[400px] object-cover object-center md:mx-0 md:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Home Section End */}

      {/* About Section Start */}
      <section className="aboutpage bg-white pb-20" id="about">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-0 pt-36 md:grid-cols-2 md:gap-20">
            <div className="box">
              <h4 className="mb-3 text-lg font-bold text-teal-500">About Me</h4>
              <h2 className="mb-5 max-w-md text-3xl font-bold text-slate-900 lg:text-4xl">
                Graphic Designer & Front-End Developer
              </h2>
              <p className="text-base font-medium text-slate-500 lg:text-lg">
                Hello! My name is Mochammad Fahmi Kurnia Sandi, I am a Graphic
                Designer and Frontend Developer. As a Graphic Designer &
                Front-End Developer, I have expertise in creating visually
                appealing displays while ensuring website functionality and
                responsiveness. I am also capable of operating design software
                which I acquired from on-the-job training. I stay up-to-date
                with the latest trends in web design and development to provide
                innovative and customized solutions to clients.
              </p>
            </div>
            <div className="box">
              <h3 className="mb-3 mt-6 text-2xl font-semibold text-slate-900 md:mt-10 lg:text-3xl">
                Skills
              </h3>
              <p className="mb-5 text-base font-medium text-slate-500 lg:text-lg">
                As a graphic designer and front end developer I have the
                following skills : <br />
                <span className="mt-4 block">
                  {mySkill.map((item) => {
                    return (
                      <span className="ml-4 mt-1 block" key={item.id}>
                        {item.id}. {item.skill}
                      </span>
                    );
                  })}
                </span>
              </p>
              <h3 className="mb-3 mt-6 text-2xl font-semibold text-slate-900 lg:text-3xl">
                let&apos;s be friends
              </h3>
              <p className="text-base font-medium text-slate-500 lg:text-lg">
                Hello! I&apos;m so happy to connect with you. Feel free to
                contact me via social media. Click on the links below and
                let&apos;s be friends!
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://web.facebook.com/ppi.fahmi/"
                  target="_blank"
                  className="mr-3 text-slate-300 transition-all hover:text-[#0866FF]"
                >
                  <svg
                    role="img"
                    width="30"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/fahmi_art17"
                  target="_blank"
                  className="mr-3 text-slate-300 transition-all hover:text-[#E4405F]"
                >
                  <svg
                    role="img"
                    width="30"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mochammad-fahmi-kurnia-sandi-ba39b2227/"
                  target="_blank"
                  className="mr-3 text-slate-300 transition-all hover:text-[#0A66C2]"
                >
                  <svg
                    role="img"
                    width="30"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Mochfahmi17"
                  target="_blank"
                  className="mr-3 text-slate-300 transition-all hover:text-[#181717]"
                >
                  <svg
                    role="img"
                    width="30"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Portfolio Section Start */}
      <section className="portfolio pb-20 pt-32" id="portfolio">
        <div className="container mx-auto px-4 md:px-8">
          <div className="title mx-auto mb-16 max-w-xl">
            <h4
              data-aos="fade-up"
              className="mb-3 text-center text-lg font-bold text-teal-500"
            >
              Portfolio
            </h4>
            <h2 className="mb-5 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
              My Project
            </h2>
            <p className="text-center text-base font-medium text-slate-500 lg:text-lg">
              Welcome to my portfolio, here you can see the projects I have
              worked on
            </p>
          </div>
          <div className="service-box mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {project.map((item) => {
              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                  className="box flex cursor-pointer flex-col justify-between rounded-lg bg-white p-4 shadow transition-all md:p-2"
                >
                  <div className="img overflow-hidden rounded-t-md">
                    <img src={item.image} alt="" width="w-full" />
                  </div>
                  <h3 className="mb-3 mt-5 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mb-7 text-base font-medium text-slate-500">
                    {item.text}
                  </p>
                  <div className="button self-end">
                    <a
                      href={item.link}
                      target="_blank"
                      className="inline-block rounded-lg bg-teal-500 px-9 py-2 text-base font-semibold text-white shadow transition-all hover:bg-teal-400"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* Contact Section Start */}
      <section className="contact bg-white pb-20 pt-32" id="contact">
        <div className="conatiner mx-auto px-4 md:px-8">
          <div className="title mx-auto mb-16 max-w-xl">
            <h4
              data-aos="fade-up"
              className="mb-3 text-center text-lg font-bold text-teal-500"
            >
              Contact
            </h4>
            <h2 className="mb-5 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
              Contact Me
            </h2>
            <p className="text-center text-base font-medium text-slate-500 lg:text-lg">
              If you have any questions or require further information, please
              do not hesitate to contact us.
            </p>
          </div>
          <div className="box">
            <form action="#">
              <div className="w-full lg:mx-auto lg:w-2/3">
                <div className="mb-8 w-full">
                  <label
                    htmlFor="name"
                    className="text-base font-bold text-teal-500"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md bg-slate-200 p-3 text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    placeholder="Type your name here..."
                  />
                </div>
                <div className="mb-8 w-full">
                  <label
                    htmlFor="email"
                    className="text-base font-bold text-teal-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md bg-slate-200 p-3 text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    placeholder="Type your email here..."
                  />
                </div>
                <div className="mb-8 w-full">
                  <label
                    htmlFor="message"
                    className="text-base font-bold text-teal-500"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    className="h-32 w-full rounded-md bg-slate-200 p-3 text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <div className="w-full">
                  <button className="w-full rounded-full bg-teal-500 px-8 py-3 text-base font-medium text-white transition hover:opacity-80 hover:shadow-lg">
                    Send Message!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default Homepage;

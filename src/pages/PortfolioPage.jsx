import { Link } from "react-router-dom";
import { project } from "../data/data";
import { useEffect } from "react";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
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
            Welcome to my Portfolio
          </h2>
          <p className="text-center text-base font-medium text-slate-500 lg:text-lg">
            This is all my portfolio that I have ever made.
          </p>
        </div>
        <div className="service-box mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {project
            .map((item) => {
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
            })
            .reverse()}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="mt-10 justify-center rounded-md bg-teal-500 px-8 py-3 text-base font-semibold text-white shadow transition-all hover:bg-teal-400"
          >
            Back home!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;

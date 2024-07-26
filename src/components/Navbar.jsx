import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  const eventHandler = () => {
    setMenu(!menu);
  };

  //   saat menu di click
  const hamburgerMenu = menu ? "translate-x-0" : "translate-x-full";

  // tombol close
  const closeIcon = menu ? "ri-close-large-line text-teal-500" : "ri-menu-line";

  // ketika di scroll muncul background putih
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 10) {
        setScroll(true);
        setMenu(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "";

  return (
    <div
      className={`navbar fixed w-full py-4 ${scrollActive} animate__animated animate__fadeInDown z-10 transition-all`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <a href="#">
              <h1 className="text-lg font-bold text-teal-500 sm:text-xl md:text-2xl">
                Mochammad Fahmi
              </h1>
            </a>
          </div>
          <ul
            className={`absolute ${hamburgerMenu} right-0 top-full flex flex-col gap-8 rounded-bl-xl bg-teal-500 px-8 py-6 text-center shadow-lg transition-all md:static md:h-full md:translate-x-0 md:flex-row md:rounded-none md:bg-transparent md:p-0 md:shadow-none lg:gap-12`}
          >
            <li className="group">
              <a
                href="#"
                className="text-base font-medium text-white opacity-75 group-hover:text-slate-900 md:text-slate-900 md:group-hover:text-teal-500"
              >
                Home
              </a>
            </li>
            <li className="group">
              <a
                href="#about"
                className="text-base font-medium text-white opacity-75 group-hover:text-slate-900 md:text-slate-900 md:group-hover:text-teal-500"
              >
                About Me
              </a>
            </li>
            <li className="group">
              <a
                href="#portfolio"
                className="text-base font-medium text-white opacity-75 group-hover:text-slate-900 md:text-slate-900 md:group-hover:text-teal-500"
              >
                Portfolio
              </a>
            </li>
            <li className="group">
              <a
                href="#contact"
                className="text-base font-medium text-white opacity-75 group-hover:text-slate-900 md:text-slate-900 md:group-hover:text-teal-500"
              >
                Contact Me
              </a>
            </li>
          </ul>
          <div className="extra-menu block md:hidden">
            <i
              className={`${closeIcon} block cursor-pointer text-3xl md:hidden`}
              onClick={eventHandler}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

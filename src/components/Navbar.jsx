
import React, { useEffect, useState } from "react";

//import framer motion
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "home", offset: -30 },
    { name: "ABOUT", link: "about", offset: -30 },
    { name: "SKILLS", link: "skills", offset: -30 },
    { name: "PROJECTS", link: "projects", offset: -30 },
    { name: "CONTACT", link: "contact", offset: -30 },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <motion.h4
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-4xl uppercase font-bold"
          >
            V<span className="text-cyan-600">ira</span>J
          </motion.h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                key={i}
                className={`px-6 hover:text-cyan-600`}
              >
                <Link
                  to={menu?.link}
                  spy={true}
                  smooth={true}
                  offset={menu?.offset}
                  duration={500}
                  href={menu?.link}
                >
                  {menu?.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>

        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <Link
                  to={menu?.link}
                  spy={true}
                  smooth={true}
                  offset={menu?.offset}
                  duration={1000}
                  href={menu?.link}
                  onClick={() => setOpen(false)}
                >
                  {menu?.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

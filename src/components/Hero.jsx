import React, { useEffect } from "react";
import hero from "../assets/images/hero.png";

//import framer motion
import { motion } from "framer-motion";

//import react type animation
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const social_media = [
    {
      platform: "Instagram",
      icon: "logo-instagram",
      link: "https://www.instagram.com/vtranathunga?igsh=OGQ5ZDc2ODk2ZA==",
    },
    {
      platform: "Facebook",
      icon: "logo-facebook",
      link: "https://www.facebook.com/viraj.tharuka.98?mibextid=kFxxJD",
    },
    {
      platform: "LinkedIn",
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/viraj-tharuka-83443b213",
    },
    {
      platform: "GitHub",
      icon: "logo-github",
      link: "https://twitter.com/your_handle",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex-1 flex items-center justify-center h-full"
      >
        <img
          src={hero}
          alt="Viraj Ranathunga"
          className="md:w-11/12 h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="flex-1"
      >
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My name is <span>Viraj Ranathunga</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "Full Stack Developer",
              1000,
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontSize: "1.5rem",
              display: "inline-block",
              marginTop: "1rem", // Example: Adjust the top margin
              fontWeight: "semi-bold",
              color: "#666", // Adjust the text color
            }}
            repeat={Infinity}
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn-primary mt-8"
          >
            Contact Me
          </motion.button>
        </div>
        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
          {social_media?.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={item.icon}></ion-icon>
              </motion.div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

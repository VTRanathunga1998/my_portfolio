import React from "react";
import hero from "../assets/images/hero.png";

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

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt="Viraj Tharuka"
          className="md:w-11/12 h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My name is <span>Viraj Tharuka</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600 ">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
        </div>
        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
          {social_media?.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer">
              <div className="text-gray-600 hover:text-white cursor-pointer">
                <ion-icon name={item.icon}></ion-icon>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

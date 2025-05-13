import React from "react";
import project2 from "../assets/images/project-1.png";
import project1 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project_person from "../assets/images/show2.png";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Pharmacy Tracking App",
      github_link:
        "https://github.com/Dinithirathnayaka/Pharmacy-Tracking-System.git",
      live_link: "#",
    },
    {
      img: project2,
      name: "Automated Attendance System",
      github_link:
        "https://github.com/VTRanathunga1998/UniversityAttendanceSystem.git",
      live_link: "#",
    },
    {
      img: project3,
      name: "Sports Club Control System",
      github_link: "",
      live_link: "https://club.otomatiki.xyz/",
    },
    {
      img: project4,
      name: "Lost Property System",
      github_link: "https://github.com/VTRanathunga1998/lost-property.git",
      live_link: "",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-16 px-5 mx-auto items-center relative">
        <div className="lg:block hidden">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
            <img
              src={project_person}
              alt="Project"
              className="w-full object-cover bg-cyan-600 rounded-xl"
            />
          </div>
        </div>
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt="Project Information"
                    className="rounded-lg h-56 w-full object-cover"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;

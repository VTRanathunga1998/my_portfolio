import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

  const contact_info = [
    { logo: "mail", text: "virajtharuka.fb@gmail.com" },
    { logo: "logo-whatsapp", text: "+94 71 528 5066" },
    {
      logo: "location",
      text: "Deniyaya, Sri Lanka",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_et34dnp",
        "template_93ofdpn",
        formRef.current,
        "xjrTSOUCZAMdGfv6i"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          formRef.current.reset();
        },
        (error) => {
          toast.error("Message not sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          formRef.current.reset();
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
              required
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;

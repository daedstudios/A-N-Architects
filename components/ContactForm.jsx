"use client";

import { useState, useRef } from "react";
import gsap from "gsap";

export default function ContactForm() {
  const coverRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    gsap.to(coverRef.current, {
      duration: 1,
      height: "100%",
      ease: "power4.out",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full  ">
      <div
        className="absolute top-85 text-gray-300 overflow-hidden left-0 h-0 w-[10rem] bg-transparent"
        ref={coverRef}
      >
        wir melden uns!
      </div>
      <div className="flex justify-between items-center py-5 border-b-[0.5px] border-gray-300">
        <label htmlFor="name" className="text-sm ">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-0 focus:outline-0 break-words text-right"
          placeholder="Anton Schiff"
          style={{ textAlign: "right" }}
        />
      </div>

      <div className="flex justify-between  py-5 items-center border-b-[0.5px] border-gray-300">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border-0 focus:outline-0 break-words text-right"
          placeholder="anton@gmail.com"
          style={{ textAlign: "right" }}
        />
      </div>

      <div className="flex justify-between  py-5 items-center border-b-[0.5px] border-gray-300">
        <label htmlFor="projectType" className="text-sm">
          Projektart
        </label>
        <input
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="border-0 focus:outline-0 break-words text-right"
          placeholder="Einfamilienhaus"
          style={{ textAlign: "right" }}
        />
      </div>

      <div className="flex justify-between  py-5 items-center border-b-[0.5px] border-gray-300">
        <label htmlFor="description" className="text-sm">
          Beschreibung
        </label>
        <input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border-0 focus:outline-0 break-words resize-none text-right"
          placeholder="Details"
          rows={1}
          style={{ textAlign: "right" }}
        />
      </div>

      <div className="flex justify-between  py-5 items-center border-b-[0.5px] border-gray-300">
        <label htmlFor="location" className="text-sm">
          Ort
        </label>
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border-0 focus:outline-0 break-words text-right"
          placeholder="e.g. Trier"
          style={{ textAlign: "right" }}
        />
      </div>

      <div className="flex justify-end py-5 items-center font-[inter] text-2xl ">
        <button
          type="submit"
          className="bg-transparent pb-12 cursor-pointer text-black hover:bg-transparent hover:text-gray-300"
        >
          SEND
        </button>
      </div>
    </form>
  );
}

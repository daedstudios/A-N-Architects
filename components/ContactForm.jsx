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
    <form
      onSubmit={handleSubmit}
      className="relative w-full divide-y-2 divide-gray-200"
    >
      <div
        className="absolute top-0  left-0 h-0 w-full bg-red-50"
        ref={coverRef}
      >
        Response submitted
      </div>
      <div className="flex justify-between items-center py-5">
        <label htmlFor="name" className="text-sm">
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

      <div className="flex justify-between  py-5 items-center">
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

      <div className="flex justify-between  py-5 items-center">
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

      <div className="flex justify-between  py-5 items-center">
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

      <div className="flex justify-between  py-5 items-center">
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
          className="bg-transparent cursor-pointer text-black hover:bg-transparent hover:text-gray-700"
        >
          SEND
        </button>
      </div>
    </form>
  );
}

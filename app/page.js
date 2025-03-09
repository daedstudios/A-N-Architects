"use client";
import React from "react";
import { projects_data } from "@/projectsData/all_projects";
import ImageComponent from "@/components/ImageCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const neuContainer = useRef(null);
  const parentContainer = useRef(null);
  const crossRef = useRef(null);

  useGSAP(() => {
    gsap.to(neuContainer.current, {
      x: "50vw",
      scrollTrigger: {
        trigger: parentContainer.current,
        start: "bottom 40%",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(crossRef.current, {
      rotation: "360deg",
      scrollTrigger: {
        trigger: parentContainer.current,
        start: "bottom 40%",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-[auto] grid-rows-[repeat(18,_18rem)] md:grid-rows-[repeat(12,_18rem)] lg:grid-rows-[repeat(9,_18rem)] px-2 gap-2 min-h-screen text-4xl">
      <div
        className="row-span-1 text-[8rem] md:text-[12rem] lg:text-[17rem] lg:col-span-4 md:col-span-2 col-span-1 mt-auto"
        ref={parentContainer}
      >
        {" "}
        ALT{" "}
      </div>

      <div
        className="row-span-1 text-[8rem] md:text-[12rem] lg:text-[17rem] lg:col-span-4 md:col-span-2 col-span-1 md:pl-24 pl-12"
        ref={neuContainer}
      >
        <div className="inline-block" ref={crossRef}>
          +
        </div>
        NEU
      </div>
      {projects_data.map(({ name, details, slug, image }) => (
        <React.Fragment key={name}>
          <ImageComponent image={image} details={details} slug={slug} />
        </React.Fragment>
      ))}

      <div className="col-span-1 row-span-1 text-[1.75rem]"> MISSION </div>
      <p className="text-gray-600 col-span-1 lg:col-span-3 text-[1.5rem]  row-span-1 ">
        Die Firma hat sich der Erhaltung, Restaurierung und adaptiven
        Wiederverwendung historischer Gebäude in ganz Deutschland verschrieben.
        Unsere Mission ist es, das kulturelle Erbe zu bewahren und gleichzeitig
        moderne Funktionalität in geschützte Strukturen zu integrieren.
      </p>

      <div className="col-span-1 row-span-1 text-[1.75rem]"> STORY </div>

      <p className="text-gray-600 col-span-1 lg:col-span-3 text-[1.5rem]  row-span-1 ">
        Wir stellen uns eine Zukunft vor, in der jeder historische Ort nicht nur
        als Zeugnis unserer Vergangenheit bewahrt wird, sondern auch als
        lebendiger Teil des zeitgenössischen Lebens dient. Unsere Vision ist es,
        Lebensräume zu schaffen, die die Geschichte ehren und gleichzeitig
        Innovation in Design und Nachhaltigkeit umarmen.
      </p>

      <div className="lg:col-span-4 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-1 mt-16 row-span-3">
        <div className="col-span-1 mt-auto py-2 md:col-span-2 lg:col-span-4 row-span-1 text-[1.75rem]">
          {" "}
          AUSZEICHNUNGEN{" "}
        </div>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className=" border-b py-[2rem] px-2 border-gray-300 flex flex-row justify-between cursor-pointer hover:bg-foreground hover:text-white "
          >
            <div className="text-[1rem]">2024</div>
            <div className="text-[1rem]">heading article</div>
            <div className="text-[1rem]">heading article</div>
          </div>
        ))}
      </div>
      <div className="col-span-1 row-span-1 h-full lg:hidden "> </div>
    </div>
  );
}

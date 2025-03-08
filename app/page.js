import React from "react"

import page from "./contact/page";
import project1 from "@/public/images/project1.png"
import project2 from "@/public/images/project2.png"
import project3 from "@/public/images/project3.png"
import project4 from "@/public/images/project4.png"
import ImageCard from '@/components/ImageCard'

const data = [
  { name: project1, details: 'latest project description' },
  { name: project2, details: 'latest project description' },
  { name: project3, details: 'latest project description' },
  { name: project4, details: 'latest project description' },
]


export default function Home() {
  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-[auto] grid-rows-[repeat(13,_22.5rem)] lg:grid-rows-[repeat(11,_22.5rem)] px-2 gap-2 min-h-screen text-4xl">
      <div className="row-span-1 text-[8rem] md:text-[12rem] lg:text-[17rem] lg:col-span-4 md:col-span-2 sm:col-span-1 mt-auto"> ALT </div>

      <div className="row-span-1 text-[8rem] md:text-[12rem] lg:text-[17rem] lg:col-span-4 md:col-span-2 sm:col-span-1   "> +NEU </div>

      <div className="col-span-1 py-2 md:col-span-2 lg:col-span-4 text-[1.75rem] mt-auto"> projekte </div>
      {data.map(({ name, details }) => (
        <React.Fragment key={name}>
          <ImageCard image={name} details={details} />
        </React.Fragment>
      ))}
      {/* <div className="row-span-1 col-span-1 text-sm  text-gray-600 hidden lg:block ">latest project description</div>
      <div className="row-span-1 col-span-1 text-sm  text-gray-600 hidden lg:block">latest project description</div>
      <div className="row-span-1 col-span-1 text-sm  text-gray-600 hidden lg:block">latest project description</div>
      <div className="row-span-1 col-span-1 text-sm  text-gray-600 hidden lg:block">latest project description</div> */}


      <div className="col-span-1 row-span-1 text-[1.75rem]"> mission </div>
      <p className="text-gray-700 lg:col-span-3 text-[1.5rem] lg:text-[1.75rem] lg:row-span-1 sm:row-span-3">
        Die Firma hat sich der Erhaltung, Restaurierung und adaptiven Wiederverwendung historischer Gebäude in
        ganz Deutschland verschrieben. Unsere Mission ist es, das kulturelle Erbe zu bewahren und gleichzeitig
        moderne Funktionalität in geschützte Strukturen zu integrieren.
      </p>

      <div className="col-span-1 row-span-1 text-[1.75rem]"> story </div>
      <p className="text-gray-700 lg:col-span-3 text-[1.5rem] lg:text-[1.75rem] lg:row-span-1 sm:row-span-3">
        Wir stellen uns eine Zukunft vor, in der jeder historische Ort nicht nur als Zeugnis unserer Vergangenheit
        bewahrt wird, sondern auch als lebendiger Teil des zeitgenössischen Lebens dient. Unsere Vision ist es,
        Lebensräume zu schaffen, die die Geschichte ehren und gleichzeitig Innovation in Design und Nachhaltigkeit
        umarmen.
      </p>
      <div className="col-span-1 mt-auto py-2 md:col-span-2 lg:col-span-4 row-span-1 text-[1.75rem]"> auszeichnungen </div>

      <div className="lg:col-span-4 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-1 row-span-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className=" border-t py-[2rem] border-gray-300 flex flex-row justify-between cursor-pointer hover:bg-foreground hover:text-white ">
            <div className="text-sm">2024</div>
            <div className="text-sm">heading article</div>
            <div className="text-sm">heading article</div>
          </div>
        ))}
      </div>
      <div className="col-span-1 row-span-1 h-full ">  </div>
    </div>
  );
}

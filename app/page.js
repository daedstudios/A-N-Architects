import Image from "next/image";
import page from "./contact/page";
import project1 from "@/public/images/project1.png"
import project2 from "@/public/images/project2.png"
import project3 from "@/public/images/project3.png"
import project4 from "@/public/images/project4.png"

  

export default function Home() {
  return (
    
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-auto grid-rows-[repeat(13,_22.5rem)] lg:grid-rows-[repeat(8,_22.5rem)] px-2 gap-2 min-h-screen text-4xl">
           <div className="row-span-1 text-[8rem] md:text-[12rem] lg:text-[17rem] lg:col-span-4 md:col-span-2 sm:col-span-1 place-content-end"> ALT </div>
       
           <div className="row-span-1 text-[8rem] md:text-[12rem] lg:text-[17rem] lg:col-span-4 md:col-span-2 sm:col-span-1   "> +NEU </div>
     
      <div className="col-span-1 place-content-end py-2 md:col-span-2 lg:col-span-4 row-span-1 text-[2rem]"> projekte </div>
         {[project1, project2, project3, project4].map((item, index) => (
            <div key={index} className="relative row-span-1 col-span-1" >
              <div>
                <Image
                  src={item}
                  alt={item}
                  fill 
               />
             </div>

              <div className="text-sm  text-gray-600 place-content-end">latest project description</div>
           </div>
         ))}
      
      <div className="col-span-1 lg:col-span-4 md:col-span-2 row-span-1 text-[2rem]">  </div>
      <div className="col-span-1 row-span-1 text-[2rem]"> mission </div>
      <p className="text-gray-700 lg:col-span-3 text-[1.5rem] lg:text-[2rem] lg:row-span-1 sm:row-span-3">
            Die Firma hat sich der Erhaltung, Restaurierung und adaptiven Wiederverwendung historischer Gebäude in
            ganz Deutschland verschrieben. Unsere Mission ist es, das kulturelle Erbe zu bewahren und gleichzeitig
            moderne Funktionalität in geschützte Strukturen zu integrieren.
      </p>
      
      <div className="col-span-1 row-span-1 text-[2rem]"> story </div>
      <p className="text-gray-700 lg:col-span-3 text-[1.5rem] lg:text-[2rem] lg:row-span-1 sm:row-span-3">
            Wir stellen uns eine Zukunft vor, in der jeder historische Ort nicht nur als Zeugnis unserer Vergangenheit
            bewahrt wird, sondern auch als lebendiger Teil des zeitgenössischen Lebens dient. Unsere Vision ist es,
            Lebensräume zu schaffen, die die Geschichte ehren und gleichzeitig Innovation in Design und Nachhaltigkeit
            umarmen.
      </p>    
      <div className="col-span-1 place-content-end py-2 md:col-span-2 lg:col-span-4 row-span-1 text-[2rem]"> auszeichnungen </div>

      <div className="lg:col-span-4 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-1 row-span-3">
       {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className=" border-t py-[1.5rem] border-gray-300 flex flex-row justify-between">
            <div className="text-sm">2024</div>
           <div className="text-sm">heading article</div>
           <div className="text-sm">heading article</div>
          </div>
        ))}
      </div>


    </div>
  );
}


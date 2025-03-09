import React from "react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";


const page = () => {

  return <div>
    <div className="w-full mx-2">
      <Image
        src='/images/blueprint.png'
        alt="Architectural blueprint with pencii"
        height={1000}
        width={500}
        className="aspect-square h-[400px] object-cover"
      />
    </div>
    <ContactForm />
  </div>
};

export default page;

import React from "react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-2">
      <div className="relative h-[60vh]">
        <Image
          src="/images/blueprint.png"
          alt="blueprint"
          fill
          className="cursor-pointer bg-cover bg-center bg-no-repeat"
          objectFit="cover"
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-auto grid-rows-[repeat(4,_22.5rem)] lg:grid-rows-[repeat(1,_22.5rem)] px-2 gap-2 bg-background">
      <div className="relative w-[16rem] h-[8rem] col-span-1 row-span-1">
        <Image alt="logo" src="/Logo.svg" fill />
      </div>
      <div className="col-span-1 row-span-1 text-[1rem] text-gray-500">
        <p> hello@altundneu.com</p>
        <p className="pb-[6rem]"> +49 170 1417983</p>
        <p> Am Ackerhof 13</p>
        <p> 54317 Kassel</p>
      </div>
      <div className="relative col-span-1 row-span-1 text-[1rem] text-gray-500">
        <div>
          <Link href="/">home</Link>
        </div>
        <div>
          <Link href="/projects">projects</Link>
        </div>
        <div>
          <Link href="/contact">contact</Link>
        </div>
        <div>
          <Link href="/team">team</Link>
        </div>
        <div className="text-black text-[4rem] absolute bottom-0 left-0">
          ARCHITEKTUR
        </div>
      </div>
      <div className="relative col-span-1 row-span-1 text-[1rem] h-full text-gray-500">
        <div>
          <Link href="https://www.instagram.com/" className="block">
            instagram
          </Link>
          <Link href="https://www.linkedin.com/" className="block">
            linkedIn
          </Link>
          <Link href="https://www.facebook.com/" className="block">
            facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

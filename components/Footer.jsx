import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-auto grid-rows-[repeat(2,_18rem)] lg:grid-rows-[repeat(1,_18rem)] px-2 gap-2 bg-background">
      <div className="relative w-[16rem] h-[8rem] col-span-1 row-span-1">
        <Image alt="logo" src="/favicon.png" width={96} height={96} />
      </div>
      <div className="col-span-1 mt-2 row-span-1 text-[1rem] text-foreground">
        <p> hello@altundneu.com</p>
        <p className="pb-[6rem]"> +49 170 1417983</p>
        <p> Am Ackerhof 13</p>
        <p> 54317 Kassel</p>
      </div>
      <div className="relative  mt-2 md:block col-span-1 row-span-1 text-[1rem] text-foreground">
        <div className="hover:text-gray-200">
          <Link href="/">home</Link>
        </div>
        <div className="hover:text-gray-200">
          <Link href="/projects">projects</Link>
        </div>
        <div className="hover:text-gray-200">
          <Link href="/contact">contact</Link>
        </div>
        <div className="hover:text-gray-200">
          <Link href="/team">team</Link>
        </div>
        <div className="text-black hidden md:block text-[4rem] absolute bottom-0 left-0">
          ARCHITEKTUR
        </div>
      </div>
      <div className="relative mt-2 col-span-1 row-span-1 text-[1rem] h-full text-foreground">
        <div>
          <Link
            href="https://www.instagram.com/"
            className="block hover:text-gray-200"
          >
            instagram
          </Link>
          <Link
            href="https://www.linkedin.com/"
            className="block hover:text-gray-200"
          >
            linkedIn
          </Link>
          <Link
            href="https://www.facebook.com/"
            className="block hover:text-gray-200"
          >
            facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

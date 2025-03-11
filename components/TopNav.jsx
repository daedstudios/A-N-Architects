"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TopNav = () => {
  const ref = React.useRef(null);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (open) {
      gsap.to(ref.current, { height: "100vh", duration: 0.4 });
    } else {
      gsap.to(ref.current, { height: "0", duration: 1 });
    }
  }, [open]);

  return (
    <>
      <div
        className={`h-[5.5rem]  top-0 z-90 bg-background sticky flex justify-between items-center px-4`}
      >
        <div className=" text-1xl text-gray-300">
          <p>ALT+</p>
        </div>

        <div className="gap-4 hidden md:flex justify-end">
          <Link className="underline-hover" href="/">
            home
          </Link>
          <Link className="underline-hover" href="/projects">
            projects
          </Link>
          <Link className="underline-hover" href="/contact">
            contact
          </Link>
          <Link className="underline-hover" href="/team">
            team
          </Link>
        </div>
        <div
          className={`block gap-4 md:hidden justify-end`}
          onClick={() => setOpen(!open)}
        >
          <Image
            alt="plus"
            src="/plus.svg"
            width={24}
            height={24}
            className="tetx-white fill-white"
          ></Image>
        </div>
      </div>
      <div
        className="fixed z-100 flex text-xl flex-col items-end md:hidden w-screen h-0 bg-background text-foreground px-8 overflow-hidden gap-2 pt-8"
        ref={ref}
        onClick={() => setOpen(!open)}
      >
        <Link className="underline-hover" href="/">
          home
        </Link>
        <Link className="underline-hover" href="/projects">
          projects
        </Link>
        <Link className="underline-hover" href="/contact">
          contact
        </Link>
        <Link className="underline-hover" href="/team">
          team
        </Link>
      </div>
    </>
  );
};

export default TopNav;

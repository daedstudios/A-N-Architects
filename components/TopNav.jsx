import Link from "next/link";
import React from "react";
import Image from "next/image";

const TopNav = () => {
  return (
    <div className="h-[5.5rem] bg-backgorund border-b-[0.5px] top-0 z-100 bg-background sticky flex justify-between items-center px-4">
      <div className=" text-1xl">
        <p>A+N</p>
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
      <div className="gap-4 md:hidden justify-end">
        <Image
          src="/plus.svg"
          width={24}
          height={24}
          className="text-black"
        ></Image>
      </div>
    </div>
  );
};

export default TopNav;

import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <div className="h-[5.5rem] bg-background flex justify-between items-center px-4">
      <div className=" text-1xl">
        <p>A+N</p>
      </div>

      <div className="flex gap-4  justify-end">
        <Link href="/">home</Link>
        <Link href="/projects">projects</Link>
        <Link href="/contact">contact</Link>
        <Link href="/team">team</Link>
      </div>
    </div>
  );
};

export default TopNav;

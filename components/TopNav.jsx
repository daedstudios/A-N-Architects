import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <div className="h-[5.5rem] bg-amber-100 flex justify-between items-center w-full pr-8">
      <p className="text-3xl">A + N</p>
      <div className="flex gap-4 underline">
        <Link href="/">home</Link>
        <Link href="/projects">projects</Link>
        <Link href="/contact">contact</Link>
        <Link href="/team">team</Link>
      </div>
    </div>
  );
};

export default TopNav;

import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <div className="h-[5.5rem] bg-backgorund flex justify-between items-center px-4">
      <div className=" text-1xl">
        <p>A+N</p>
      </div>

      <div className="flex gap-4  justify-end">
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
    </div>
  );
};

export default TopNav;

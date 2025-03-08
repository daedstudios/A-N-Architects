import React from "react";
import ImageComponent from "@/components/ImageCard";
import { projects_data } from "@/projectsData/all_projects";

const page = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-[auto] md:grid-rows-[repeat(5,_22.5rem)] grid-rows-[repeat(9,_22.5rem)] lg:grid-rows-[repeat(3,_22.5rem)] px-2 gap-2 min-h-screen text-4xl">
      <div className="col-span-1 lg:col-span-4 md:col-span-2 row-span-1 text-[1.75rem] mt-auto">
        UNSER TEAM
      </div>
      {projects_data.map(({ name, details, slug, image }) => (
        <React.Fragment key={name}>
          <ImageComponent image={image} details={details} slug={slug} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default page;

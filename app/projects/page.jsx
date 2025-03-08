import ImageComponent from "@/components/ImageCard";
import { projects_data } from "@/projectsData/all_projects";
import React from "react";

const page = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-[auto] grid-rows-[repeat(13,_22.5rem)] lg:grid-rows-[repeat(11,_22.5rem)] px-2 gap-2 min-h-screen text-4xl">
      {projects_data.map(({ name, details, slug, image }) => (
        <React.Fragment key={name}>
          <ImageComponent image={image} details={details} slug={slug} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default page;

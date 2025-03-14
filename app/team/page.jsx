import React from "react";
import ImageComponent from "@/components/ImageCard";
import { team_data } from "@/projectsData/teamData";
import ProjectAndContact from "@/components/ProjectAndContact";

const page = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-[auto] md:grid-rows-[repeat(6,_18rem)] grid-rows-[repeat(10,_18rem)] lg:grid-rows-[repeat(4,_18rem)] px-2 gap-2 min-h-screen text-4xl">
      <div className="col-span-1 text-gray-200 lg:col-span-4 md:col-span-2 row-span-1 text-[1.75rem] mt-auto">
        UNSER TEAM
      </div>
      {team_data.map(({ name, details, image }) => (
        <React.Fragment key={name}>
          <ImageComponent image={image} details={details} name={name} />
        </React.Fragment>
      ))}
      <ProjectAndContact />
    </div>
  );
};

export default page;

import React from "react";
import { projects_data } from "@/projectsData/all_projects";
import Image from "next/image";
import ProjectAndContact from "@/components/ProjectAndContact";

const DisplayRow = ({ name, content }) => (
  <div className="row-span-1 border-b-[0.5px] border-gray-200 col-span-1 flex justify-between py-7 items-center">
    <p className="font-semibold">{name}</p>
    <p>{typeof content === "object" ? JSON.stringify(content) : content}</p>
  </div>
);

const Page = ({ params }) => {
  const prj_data = projects_data.find(
    (project) => project.slug === params.slug
  );
  if (!prj_data) {
    return <p className="text-red-500">Project not found</p>;
  }

  const { image, name, info = [], otherdetails, additionalInfo } = prj_data;
  console.log(image, name, info);

  return (
    <div className="space-y-4 px-2">
      <div className="relative h-[60vh]">
        <Image
          src={`/images/${image}`}
          alt={name}
          fill
          className="cursor-pointer bg-cover bg-center bg-no-repeat"
          objectFit="cover"
        />
      </div>
      <div className="space-y-4">
        <div className="grid grid-rows-4  grid-cols-1 md:grid-cols-2 text-sm gap-4">
          {info.map((item, i) => {
            const [key, value] = Object.entries(item)[0];
            return (
              <DisplayRow key={`${key}-${i + 4}`} name={key} content={value} />
            );
          })}
        </div>
        <h1 className="text-[2rem] py-12 text-gray-200">{otherdetails}</h1>
        <p className="text-[1rem] pb-12"> {additionalInfo}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-[repeat(1,_18rem)] grid-rows-[repeat(2,_18rem)] ">
        <ProjectAndContact />
      </div>
    </div>
  );
};

export default Page;

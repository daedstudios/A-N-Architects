import React from "react";
import { projects_data } from "@/projectsData/all_projects";
import Image from "next/image";


const DisplayRow = ({ name, content }) => (
  <div className="flex justify-between py-7 items-center">
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

  const { image, name, info = [], otherdetails } = prj_data;
  console.log(image, name, info);

  return (
    <div className="space-y-4 px-2">
      <div className="relative h-[500px]">
        <Image
          src={`/images/${image}`}
          alt={name}
          fill
          className="cursor-pointer bg-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 text-sm gap-2">
          <section className="px-2 border-gray-200 border border-solid divide-y-1 divide-gray-200">
            {info.slice(0, 4).map((item, i) => {
              const [key, value] = Object.entries(item)[0];
              return (
                <DisplayRow key={`${key}-${i}`} name={key} content={value} />
              );
            })}
          </section>
          <section className="px-2 border-gray-200 border border-solid divide-y-1 divide-gray-200">
            {info.slice(4).map((item, i) => {
              const [key, value] = Object.entries(item)[0];
              return (
                <DisplayRow
                  key={`${key}-${i + 4}`}
                  name={key}
                  content={value}
                />
              );
            })}
          </section>
        </div>
        <h1 className="text-3xl font-bold">{otherdetails}</h1>
      </div>
    </div>
  );
};

export default Page;

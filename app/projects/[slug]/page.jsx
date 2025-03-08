import React from "react";
import { projects_data } from "@/projectsData/all_projects";

const page = ({ params }) => {
  const currentProject = projects_data.find(
    (project) => project.slug === params.slug
  );
  console.log("currentProject", currentProject);

  return <div>Project: {currentProject.name}</div>;
};

export default page;

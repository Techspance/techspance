import React from "react";

const page = ( {params}) => {
  return <div className=" pt-32 " >
    <h1>Project</h1>
    <p>{params.projectId}</p>
    </div>;
};

export default page;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {

  const data = useLoaderData();
  return (
    <div className="w-full text-black text-3xl text-center py-5">
      Github Name: ${data.name}
      <img src={data.avatar_url} width={100} height={100} />
    </div>
  );
}

export default Github;



export async  function LoaderGithub() {

  const response = await fetch(`https://api.github.com/users/Raamm213`);
  const data = response.json();
  return data
}


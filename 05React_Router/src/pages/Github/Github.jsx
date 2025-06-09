import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/Raamm213`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data)
      });
  }, []);

  return (
    <div className="w-full text-black text-3xl text-center py-5">
      Github Name: ${data.name}
      <img src={data.avatar_url} width={100} height={100} />
    </div>
  );
}

export default Github;

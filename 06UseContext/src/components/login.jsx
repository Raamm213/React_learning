import React, { useContext } from "react";
import { useState } from "react";
import { useData } from "../Context/UserContext";

function Login() {
  const { Id, setId, Password, setPassword } = useData();

  const enterfunction = (e) => {
    if (e.key === "Enter") {
      handlesubmit();
    }
  };

  const handlesubmit = (e) => {
    console.log("Enter key working just fine!!!!");
    e.preventDefault();
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col justify-center items-center"
        onSubmit={handlesubmit}
      >
        <h1 className="m-4 text-fuchsia-300 font-extrabold text-2xl">Log IN</h1>
        <input
          type="text"
          placeholder="LogIn ID"
          className="h-10 w-80 bg-gray-200 text-center rounded-xl m-4"
          value={Id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          onKeyDown={enterfunction}
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          className="h-10 w-80 bg-gray-200 text-center rounded-xl mb-4"
          value={Password}
          onKeyDown={enterfunction}
        />
        <button
          className="h-10 w-25 bg-blue-400 hover:bg-blue-300 rounded-xl p-4 flex justify-center items-center font-semibold outline-offset-2  active:bg-blue-400 hover:outline-3 active:outline-0 cursor-pointer "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;

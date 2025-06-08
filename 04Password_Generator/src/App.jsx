import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [len, setLen] = useState(8);
  const [num, setNum] = useState(false);
  const [chara, setChara] = useState(false);
  const [pass, setPass] = useState("");

  const generator = useCallback(() => {
    let temp = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "1234567890";
    if (chara) str += "!@#$%^&*()_+";

    for (let i = 1; i < len; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      temp += str.charAt(char);
    }
    setPass(temp);
  }, [len, num, chara]);

  useEffect(() => {
    generator();
  }, [len, num, chara]);

  

  const [copyText, setCopyText] = useState("Copy");

  const handleCopy = async () => {
    window.navigator.clipboard.writeText(pass);
    setCopyText("Copied");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCopyText("Copy");
  };

  return (
    <>
      <div className="h-screen w-screen bg-gray-500 flex justify-center items-center ">
        <div className="h-60 w-150 bg-gray-700 rounded-4xl shadow-2xl/50 p-5 hover:shadow-2xl/100 duration-200 hover:outline-4 hover:outline-offset-3 outline-gray-700">
          <h1 className=" text-white text-center text-3xl  uppercase font-black border-b-2 pb-3">
            Password
          </h1>
          <div className="flex justify-center items-center flex-row w-full p-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              value={pass}
              readOnly
              className="bg-white w-80 h-10 rounded-l-4xl text-center"
            />
            <button
              className="bg-blue-600 cursor-pointer rounded-r-4xl h-10 w-26 uppercase hover:bg-blue-500  active:bg-blue-600"
              onClick={handleCopy}
              type="button"
              id="copy"
            >
              {copyText}
            </button>
          </div>
          <div className="flex justify-center items-center  flex-row gap-10">
            <input
              type="range"
              name="length"
              min={0}
              max={12}
              value={len}
              id=""
              onChange={(e) => {
                setLen(e.target.value);
              }}
              className="w-40 cursor-pointer"
            />
            <h2 className="text-white font-bold">length:{len}</h2>
            <div className="gap-x-1 flex justify-center items-center text-white font-bold">
              <input
                type="checkbox"
                className=""
                id="charaterInput"
                onChange={(e) => setChara(e.target.checked)}
              />
              <label htmlFor="charaterInput">Character</label>
            </div>
            <div className="gap-x-1 flex justify-center items-center text-white font-bold">
              <input
                type="checkbox"
                className=""
                id="numberInput"
                onChange={(e) => setNum(e.target.checked)}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

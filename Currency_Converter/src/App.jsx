import { useState } from "react";
import "./App.css";
import useFetch from "./components/fetch";
import { CustumInput } from "./hooks";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [converted, setConverted] = useState(0);

  const fromcurrency = useFetch(from);
  const options = Object.keys(fromcurrency);

  const convert = () => {
    setConverted(amount * fromcurrency[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div
        className="h-screen w-screen bg-gray-600 flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="h-auto p-10 bg-white/90 gap-7 w-[500px] rounded-4xl flex justify-center items-center flex-col shadow-2xl">
          <CustumInput
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(e) => {
              setFrom(e);
            }}
            onAmountChange={(e) => {
              setAmount(e);
            }}
            selectedCurrency={from}
            amountDisabled
          />
          <div className=" h-12 w-30 absolute top-[113%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-3xl">
            <button
              className="h-full w-full cursor-pointer   font-extrabold bg-purple-600 rounded-3xl text-white hover:bg-purple-400 duration-100  uppercase  hover:shadow-2xl/35"
              onClick={swap}
            >
              sweep
            </button>
          </div>
          <div className="bg-gray-800 h-28 w-full p-5 flex justify-center items-stretch rounded-xl">
            <div className="h-full w-1/2 flex flex-col justify-center items-start gap-2">
              <h1 className="text-white font-extrabold text-[15px] ml-3">To</h1>
              <input
                type="number"
                name=""
                id=""
                className="w-full h-2/3 bg-white rounded-xl text-center"
                placeholder="Enter Quantity"
                readOnly
                value={converted}
              />
            </div>
            <div className="h-full w-1/2 flex flex-col justify-center items-end gap-2">
              <h1 className="text-white font-extrabold text-[15px] text-right">
                Currency Type
              </h1>
              <select name="" id="" className="bg-white h-2/3 w-1/3 rounded-md">
                <option value="1">IND</option>
                <option value="2">USD</option>
              </select>
            </div>
          </div>
          <button
            onClick={convert}
            className="h-14 w-3/6 bg-blue-600 rounded-3xl text-white hover:bg-blue-400 duration-100 cursor-pointer uppercase  active:translate-y-1 font-extrabold hover:shadow-2xl/35"
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

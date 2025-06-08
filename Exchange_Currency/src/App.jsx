import { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import CustomInput from "../components/customInput";
import useFetchData from "../hooks/fetch";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const ratio = useFetchData(from);

  const options = ratio ? Object.keys(ratio) : [];

  const convert = useCallback(() => {
    setConvertedAmount(Math.round(amount * ratio[to] * 100) / 100);
  }, [ratio, to, amount]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  useEffect(() => {
    convert();
  }, [amount, from, to, convert]);

  return (
    <>
      <div
        className="h-screen w-screen bg-gray-600 flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="h-auto p-10 bg-white/90 gap-7 w-200 rounded-4xl flex justify-center items-center flex-col shadow-2xl relative">
          <CustomInput
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            onAmountChange={setAmount}
            selectedCurrency={from}
            placeHolder="Enter the currency to convert"
          />
          <div className=" h-12 w-30 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-3xl z-10">
            <button
              className="h-full w-full cursor-pointer font-extrabold bg-purple-600 rounded-3xl text-white hover:bg-purple-400 duration-100  uppercase  hover:shadow-2xl/35"
              onClick={swap}
            >
              sweep
            </button>
          </div>
          <CustomInput
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={setTo}
            selectedCurrency={to}
            amountDisabled
            placeHolder="Your Converted Currency"
          />
        </div>
      </div>
    </>
  );
}

export default App;

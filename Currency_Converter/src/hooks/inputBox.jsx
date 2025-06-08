import React, { useId } from "react";

function CustumInput({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  className = ""
}) {
  const id = useId();
  return (
    <div
      className={`bg-gray-800 h-28 w-full p-5 flex justify-center items-stretch rounded-xl relative  ${className}`}
    >
      <div className="h-full w-1/2 flex flex-col justify-center items-start gap-2">
        <label htmlFor={id} className="text-white font-extrabold text-[15px]">
          {label}
        </label>
        <input
          type="number"
          name=""
          id={id}
          className="w-full h-2/3 bg-white rounded-xl text-center outline-none"
          placeholder="Enter Quantity"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="h-full w-1/2 flex flex-col justify-center items-end gap-2">
        <h1 className="text-white font-extrabold text-[15px] text-right">
          Currency Type
        </h1>
        <select
          name=""
          id=""
          className="bg-white h-2/3 w-1/3 rounded-md"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CustumInput;


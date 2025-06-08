import React, { useId, useRef, useEffect } from "react";

function CustomInput(props) {
  const id = useId();
  const inputref = useRef(null);

  useEffect(() => {
    if (props.label === "From") {
      inputref.current.focus();
    }
  }, []);
  return (
    <>
      <div
        className={`bg-gray-800 h-28 w-full p-5 flex justify-center items-stretch rounded-xl relative  ${props.className}`}
      >
        <div className="h-full w-1/2 flex flex-col justify-center items-start gap-2">
          <label htmlFor={id} className="text-white font-extrabold text-[15px]">
            {props.label}
          </label>
          <input
            type="number"
            name=""
            id={id}
            className="w-full h-2/3 bg-white rounded-xl text-center outline-none"
            placeholder={props.placeHolder}
            disabled={props.amountDisabled}
            value={props.amount}
            ref={inputref}
            onChange={(e) => {
              props.onAmountChange(Number(e.target.value));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && props.onEnter) props.onEnter();
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
            className="bg-white h-2/3 w-1/3 rounded-md text-center"
            value={props.selectedCurrency}
            onChange={(e) => {
              props.onCurrencyChange(e.target.value);
            }}
          >
            {props.currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default CustomInput;

import React, { useContext, useState } from "react";
import { DataContext } from "./UserContextCreation";

const DataProvider = ({ children }) => {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <DataContext.Provider value={{ Id, setId, Password, setPassword }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useData = () => useContext(DataContext); 
import React, { createContext } from "react";

export const AppContext = createContext();

export default ContextProvider = (props) => {
  const phone = "+1 123456789";
  return (
    <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
  );
};

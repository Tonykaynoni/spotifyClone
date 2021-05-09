import React, { createContext, useContext, useReducer } from "react";
export const DataLayerContext = createContext();

export const DataLayer = ({ initialStateProps, reducer, children }) => {
  //console.log("Info", reducer, initialStateProps);
  return (
    <>
      {" "}
      <DataLayerContext.Provider value={useReducer(reducer, initialStateProps)}>
        {children}
      </DataLayerContext.Provider>{" "}
    </>
  );
};

//make context available for all components that calls useDataLayer
export const useDataLayerValue = () => useContext(DataLayerContext);

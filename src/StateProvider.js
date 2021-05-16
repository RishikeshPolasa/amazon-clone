//setup data layer
//we need to track the basket

import React, { createContext, useReducer, useContext } from "react";

//this is data layer
export const StateContext = createContext();

//this is provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
